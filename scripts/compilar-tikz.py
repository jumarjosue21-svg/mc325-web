#!/usr/bin/env python3
"""Compila figuras TikZ pesadas de Desarrollo del Curso sin alterar Markdown."""
import argparse, hashlib, os, re, shutil, subprocess, tempfile
from pathlib import Path
import xml.etree.ElementTree as ET

LIMITE = 65536  # bytes UTF-8; coincide con js/tikz-precompilado.js
PATRON = re.compile(r'<script\s+type=["\']text/tikz["\'][^>]*>([\s\S]*?)</script>', re.I)
CARPETA = Path('assets/tikz-precompilado/v1')

def normalizar(codigo):
    return codigo.replace('\r\n','\n').replace('\r','\n').strip(' \t\n')

def clave(codigo):
    return hashlib.sha256(codigo.encode('utf-8')).hexdigest()

def compilar(codigo, destino):
    # Contenido oficial revisado. Directorio temporal y sin shell escape.
    with tempfile.TemporaryDirectory(prefix='mc325-tikz-') as temporal:
        trabajo = Path(temporal)
        tex = '\\documentclass[tikz,border=2pt]{standalone}\n\\usepackage{amsmath,amssymb}\n\\begin{document}\n' + codigo + '\n\\end{document}\n'
        (trabajo/'figura.tex').write_text(tex, encoding='utf-8')
        proceso = subprocess.run(['pdflatex','-no-shell-escape','-halt-on-error','-interaction=nonstopmode','figura.tex'], cwd=trabajo, env=dict(os.environ,openin_any='p',openout_any='p'), stdout=subprocess.PIPE, stderr=subprocess.STDOUT, timeout=240)
        if proceso.returncode:
            raise RuntimeError(proceso.stdout.decode(errors='replace')[-4000:])
        subprocess.run(['pdftocairo','-svg','figura.pdf','figura.svg'],cwd=trabajo,check=True,timeout=120)
        svg = trabajo/'figura.svg'
        raiz = ET.parse(svg).getroot()
        if raiz.tag != '{http://www.w3.org/2000/svg}svg' or not raiz.get('viewBox'):
            raise RuntimeError('Salida SVG inválida')
        for nodo in raiz.iter():
            if nodo.tag.rsplit('}',1)[-1] in {'image','script','foreignObject'}:
                raise RuntimeError('Se esperaba un gráfico vectorial sin imágenes incrustadas ni scripts')
            for atributo,valor in nodo.attrib.items():
                if atributo.rsplit('}',1)[-1]=='href' and not valor.startswith('#'):
                    raise RuntimeError('Referencia externa no permitida')
        destino.parent.mkdir(parents=True,exist_ok=True)
        shutil.copyfile(svg,destino)

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[1])
    parser.add_argument('--force',action='store_true',help='Recompilar aunque ya exista el SVG')
    args=parser.parse_args(); raiz=args.root.resolve()
    if not (raiz/'articulos').is_dir(): parser.error('No se encontró articulos/ en --root')
    salida=raiz/CARPETA; salida.mkdir(parents=True,exist_ok=True)
    esperados=set(); errores=[]
    for archivo in sorted((raiz/'articulos').rglob('*.md')):
        for n,bloque in enumerate(PATRON.finditer(archivo.read_text(encoding='utf-8')),1):
            codigo=normalizar(bloque.group(1)); tamano=len(codigo.encode('utf-8'))
            if tamano<=LIMITE: continue
            nombre=clave(codigo)+'.svg'; esperados.add(nombre); destino=salida/nombre
            etiqueta=f'{archivo.relative_to(raiz)} · bloque {n} ({tamano} bytes)'
            if destino.is_file() and destino.stat().st_size>0 and not args.force:
                print(f'Reutilizado: {etiqueta}',flush=True); continue
            print(f'Compilando: {etiqueta}',flush=True)
            try:
                compilar(codigo,destino); print(f'  OK: {destino.stat().st_size} bytes',flush=True)
            except Exception as exc:
                errores.append(etiqueta); print(f'  ERROR: {exc}',flush=True)
    if errores: raise SystemExit('Se cancela publicación: '+', '.join(errores))
    for existente in salida.glob('*.svg'):
        if existente.name not in esperados: existente.unlink()
    print(f'Figuras precompiladas disponibles: {len(esperados)}',flush=True)

if __name__=='__main__': main()
