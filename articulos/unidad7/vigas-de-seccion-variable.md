

VigasdeSecciónVariable
FacultaddeIngenieríaMecánica
UniversidadNacionaldeIngeniería,Lima,Perú
## Resumen
Sepresentaelanálisisdevigasdesecciónvariable,esdecir,conrigidezalaexiónEI(x)
noconstante,mediantelaintegraciónsucesivadelacadenacargacortantemomentogiro
deexión.Sedesarrollanlasrelacionesdiferencialesdelaviga,laintegraciónnuméricaconla
regladeltrap ecioyladeterminacióndelgiroinicial,yelméto dodeintegracióngrácaconel
tratamientodeescalas.Alnalseresuelventresproblemas:unavigasimplementeap oyada
concargatriangular(integraciónnumérica,consutabladeresultadosysusdiagramas)ydos
voladizosdesecciónvariable(Problemas35y36),unavigatronco cónicaconcargaconcentrada
yunavigarectangulardealturavariableconcargauniformeyconcentrada.Enlosvoladizos
sedeterminalaseccióndelesfuerzonormalmáximo,elgiroyladeexióndelextremolibre,
ycuántasvecessonmayoresresp ectodeunavigadesecciónconstanteigualalamáxima.
Resultados:enelProblema35elesfuerzomáximoapareceenx= 3L/4ylasrazonesson2,3
y5;enelProblema36apareceenx= 0,4Lylasrazonesson1,05,2,08y2,91.Elcontenido
sebasaenlasnotasdeclaseElementosdesecciónvariabledeResistenciadeMaterialesI I
## (UNI).
1Intro ducción
EnlasvigasprismáticaslarigidezalaexiónEIesconstanteylasdeexionesseobtieneninte-
grandoenformacerradalasrelacionesdiferencialesdelaviga.Cuandolaseccióncambiaalolargo
deleje,I=I(x),elco cienteM/EI(x)dejadeserunp olinomiosimpleysudobleintegraciónrara
veztieneunaexpresiónanalíticacómo da.Lasnotasdeclase[1]resuelvenestadicultadintegrando
puntoapunto,deformanuméricaográca.Además,elesfuerzonormalmáximonotienep orqué
estardondeelmomentoectoresmáximo,p orquelaseccióntambiéncambia.
Estedo cumentosigueelsiguienteorden:relacionesdiferenciales(sección2),integraciónnumérica
(sección3),integracióngrácaconescalas(sección4)y,alnal,losproblemasresueltos(sección5):
elejemplodelavigasimplementeap oyadaylosProblemas35y36devoladizos.Lospárrafos
marcadoscomoNotasoncomplementosalasnotasoriginales.
Nota.LaTabla1daI(x)paralasseccionesmáscomunes.Losexp onentes3y4hacenquela
inerciacambiemuyrápido:unconocuyodiámetroseduplicatiene16vecesmásinercia.
Tabla1:Momentodeinerciasegúneltip odevariación
SecciónI(x)Observación
## Rectangular,anchobconstante,altura
h(x)
bh
## 3
/12Siheslineal,I∝x
## 3
## Rectangular,alturahconstante,ancho
b(x)
bh
## 3
/12Sibeslineal,I∝x
## Circularderadior(x)πr
## 4
/4Sireslineal(cono),I∝x
## 4
Tubular(radiosRyr)π(R
## 4
## −r
## 4
)/4VaríasicambiaRor
EscalonadaI
## 1
## ,I
## 2
,...Constantep ortramos
## 1

2Relacionesdiferencialesdelaviga
Lasrelacionesdiferencialesentrelasfuerzasinternasdeunaviga,comolascortantesylosmomentos
ectores,ylascargasdistribuidassobreellasepuedenestablecermediantelassiguientesecuaciones.
## Paralasfuerzascortantesylascargasdistribuidas:
dV
dx
## =−q(1)
## V=−
## Z
qdx+V
## 0
## (2)
Mientrasque,enelcasodelosmomentosectores,larelaciónsevinculaconlasfuerzascortantes:
dM
dx
## =V(3)
## M=
## Z
Vdx+M
## 0
## (4)
Estasexpresionesmuestranqueesp osibleobtenerlasfuerzascortantesapartirdeldiagramade
cargasdistribuidasp orintegración,mientrasquelosmomentosectoresseobtienenintegrando
directamenteeldiagramadefuerzascortantes.
Delateoríadevigassesab equelaecuacióndiferencialqueligaladeexiónwconlacarga
uniformementedistribuidaes
d
## 4
w
dx
## 4
## =−
q
## EI
## (5)
Silarigidezexionalesconstante,esp osibleintegrarsololadistribucióndecargasyobtenerlas
fuerzascortantesdentrodelelemento:
d
## 3
w
dx
## 3
## =−
## 1
## EI
## Z
qdx+
## V
## 0
## EI
## (6)
## V=EI
d
## 3
w
dx
## 3
## =−
## Z
qdx+V
## 0
## (7)
## Deformaanáloga,seintegranlascortantesparaobtenereldiagramademomentosectores:
## EI
d
## 3
w
dx
## 3
## =V;M=EI
d
## 2
w
dx
## 2
## =
## Z
Vdx+M
## 0
## (8)
Unavezobtenidoeldiagramademomentosectores,seestableceunarelaciónentrelascurvaturas,
losmomentosectoresylarigidezalaexión.Estarelaciónsefundamentaenlaship ótesis
deEulerBernoulliydalugaraldenominadodiagramademomentosreducidos.Alintegrarla
distribucióndemomentosreducidosalolargodelejesedeterminanlosgiros:
d
## 2
w
dx
## 2
## =
## M
## EI
## (9)
dw
dx
## =
## Z
## M
## EI
dx+θ
## 0
## (10)
## Finalmente,ladeexiónencadasecciónseobtieneintegrandolaecuacióndelosgiros:
dw
dx
## =θ(11)
w=
## Z
θdx+w
## 0
## (12)
Nota.Cadaintegraciónintro duceunaconstante(V
## 0
## ,M
## 0
## ,θ
## 0
## ,w
## 0
## )quesejaconlascondiciones
deb orde;laTabla2resumedoscasos.ConEIvariable,elúnicocambioresp ectodeunaviga
prismáticaesdividirMentreEI(x)puntoapunto;integrarM/EIparaobtenerθywequivale
alméto dodelavigaconjugada[2].Enestasnotaslacargasedesignaqyladeexiónw;enlas
recurrenciasdelasección3lacargaenelpuntoiseescrib eq
i
## .
## 2

Tabla2:Constantesdeintegraciónycondicionesquelasjan
ConstanteVigasimplementeap oyadaVoladizoemp otradoenx= 0
## V
## 0
## M(L) = 0V(L) = 0
## M
## 0
## M(0) = 0M(L) = 0
θ
## 0
w(L) = 0θ(0) = 0
w
## 0
w(0) = 0w(0) = 0
3Integraciónnumérica
## Sediscretizaelejeenpuntosx
## 0
< x
## 1
<···< x
n
yseaplicalaregladeltrap ecioencadaintervalo,
parai= 1,...,n.Cálculodeldiagramadefuerzascortantesapartirdeldiagramadecargas:
## V
i
## =V
i−1
## −0,5 (q
i
## +q
i−1
## )(x
i
## −x
i−1
## )(13)
## Cálculodeldiagramademomentosectoresapartirdeldiagramadefuerzascortantes:
## M
i
## =M
i−1
## + 0,5 (V
i
## +V
i−1
## )(x
i
## −x
i−1
## )(14)
## Cálculodelosgirosapartirdeldiagramademomentosectoresreducidos:
θ
i
## =θ
i−1
## + 0,5
## 
## M
## EI
## 
i
## +
## 
## M
## EI
## 
i−1
## 
## (x
i
## −x
i−1
## )(15)
## Cálculodelasdeexionesapartirdeldiagramadegirosobtenidospreviamente:
w
i
## =w
i−1
## + 0,5 (θ
i
## +θ
i−1
## )(x
i
## −x
i−1
## )(16)
Nota.ComoV=−
## R
qdx,enlarecurrenciadelcortanteeltérminodeltrap ecioentraconsigno
menos;lasnotasoriginalesloescrib enconsignomás,p erolatabladelejemplosídecrece,esdecir,
usaelsignomenos.ElvalorinicialV
## 0
noseobtienedeldiagramadecargas:sehallaimp oniendo
M(L) = 0sobreelmomentointegrado.Elíndiceiarrancaen1,pueselpasoi= 0notieneun
elementoi−1.
3.1Giroinicial
Elcálculodelosgirosrequieredeterminarelgiroinicialdelasección;estedeb erásercalculado
considerandoqueelejexdeb edividirp orlamitadeldiagramadedeexiones.EnlaFig.1se
observaqueeldiagramadegirosparteinicialmenteencero,algoqueesunerror,puessesab eque
elgiroenelap oyoizquierdoesnegativoydiferentedecero.Lap osicióndelejexdeb eubicarsede
talformaqueeláreaba jolacurvadegiroA
## 1
yeláreasobreellaA
## 2
tenganlamismamagnitud,si
seconsideralap osicióndeesteejeabunidadesdelorigen.EláreadelrectángulobLesigualala
sumaA
## 1
## +A
## 3
y,dadoqueA
## 1
## =A
## 2
,eláreadeesterectánguloesigualaA
## 2
## +A
## 3
## ,esdecir,elárea
deba jodelacurvadegiros.Estoseplanteaapartirdelasiguienteecuación:
bL=
## Z
## L
## 0
θdx(17)
Apartirdeesto,seobtienelap osicióndelejexdividiendop orlalongitud:
b=
## R
## L
## 0
θdx
## L
## (18)
Nota.Dividirp orlamitadeldiagramadedeexionesequivaleaelegirθ
## 0
talquew(L) = 0,es
decir,θ
## 0
=−b.Poreso,elgirocorregidoeselgiroprovisionaldesplazadounacantidadconstante
bhaciaaba jo,yladeexióncorregidaesw=w
## ′
## −bx.
## 3

## 012345
x (m)
## 0
## 1
## 2
## 3
## 4
## 5
## 6
## 7
μ
## 0
## (
## £
## 10
## ¡
## 7
## )
(unidades de la tabla)
## A
## 2
## A
## 1
## A
## 3
nuevo eje x (a b del origen)
b
Figura1:Diagramadeáreasparaelgiroinicial(curvaprovisionalθ
## ′
delejemplodelasección5).
3.2Algoritmocompleto
1.Discretizarx
## 0
## ...x
n
ycalcularq(x)eI(x).
## 2.V←−
## R
qdx(trap ecio);M←
## R
## Vdx.
## 3.V
## 0
## =−M(L)/L;V←V+V
## 0
## ;M←M+V
## 0
x.
## 4.θ
## ′
## ←
## R
(M/EI) dx;w
## ′
## ←
## R
θ
## ′
dx.
## 5.b=w
## ′
(L)/L;θ=θ
## ′
## −b;w=w
## ′
## −bx.
6.Hallarelmáximode|w|,queo curredondeθ= 0.
4Integracióngráca
Unaformaalternativaderealizarlaintegracióndelasexpresionesesusandométo dosgrácos
(Fig.2).Eláreadeba jodelafunciónfentrex
i−1
yx
i
puedeaproximarsep ormediodelaregla
deltrap ecio;así,sieláreadelaintegralhastaelpuntox
i−1
escono cidaeigualab
i−1
## ,entoncesla
integralhastax
i
tienelasiguienteforma:
s=b
i−1
## + 0,5
##  
f(x
i
## ) +f(x
i−1
## )
## 
## (x
i
## −x
i−1
## )(19)
Nota.Lasnotasoriginalesescrib enb
i
enlugardeb
i−1
yunadiferenciaenlugardeunasuma;la
regladeltrap eciosumalasordenadas.Además,elpro cedimientoconp oloadistanciaeyvaloren
elpuntomedioquesiguecorresp ondealp olígonofunicular(regladelpuntomedio)másqueala
regladeSimpson.
Unméto dográcopuededesarrollarseintro duciendounparámetroe,queesladistanciamedida
alaizquierdadelejey.Enprincipio,estadistanciaesarbitrariayestarálimitadaúnicamente
p orlaconvenienciadesuelecciónduranteeltraba jodeintegración.Deacuerdoconlagura,el
segmentoABtieneunap endientequedep endedelaabscisadelpuntomedio ̄xubicadoentrex
i−1
yx
i
ydelparámetroe:
m
## AB
## =
f( ̄x)
e
## (20)
Enelgrácodelafunciónacumulativapresentadodeba jodelafunciónaintegrarseapreciaque,
almultiplicarestap endientep orelavanceodesplazamientolinealenx,seobtiene
## S
i
## =m
## AB
## (x
i
## −x
i−1
## ) =
f( ̄x)
e
## (x
i
## −x
i−1
## )(21)
## 4

f
## (
x
## )
polo
e
x
i ¡1
x
i
## ¹
x
f(
## ¹
x)
## −2−10123456
x
integral acumulada
b
i ¡1
b
i
x
i
## ¡x
i ¡1
pendiente  = f(
## ¹
x)=e
(paralela al rayo)
Figura2:Méto dodeintegracióngrácaconp oloaladistanciae.
Así,elméto dográcoconsisteenencontrarlap endienteindicadaenelgrácodelafunciónoriginal
yluegotrasladarestap endientealgrácodelafunciónacumuladaenelúltimopuntoobtenidode
laintegraciónanterior.Elpro ductodeestap endientep oreldesplazamientolinealdaeláreadela
funciónoriginalhastaesepunto.
4.1Escalas
Amenudo,enundibujo,p orlaslimitacionesdeespacioocomo didadvisual,noesp osibledibujar
lasmagnitudesrealesmedidas,sinoqueesnecesariousarescalas.Dadoquesetienenmedidas
longitudinalesenxymedidasdefuerza,momentoomomentoreducidoenelejevertical,será
necesariousarescalas,esdecir,relacionesentrelasmedidaseneldibujoomedidasenpap elylas
medidasreales(Fig.3).
x
i ¡1
x
i
y
i ¡1
y
i
## 0
Medidas reales
a
i ¡1
a
i
b
i ¡1
b
i
## 0
Medidas de dibujo
Figura3:Escalasdemedidasrealesvs.medidasdedibujo.
## 5

## Escalahorizontalyescalavertical:
## E
x
## =
medidasreales
medidasdibujo
## =
x
i
a
i
## (22)
## E
y
## =
medidasreales
medidasdibujo
## =
y
i
b
i
## (23)
Laintegracióndeunafunciónfconmedidasdedibujopro duciráunresultadonuméricoque
contieneunaconstantedeintegraciónyunasumatoria:
s=c
## 0
## +
b
## 1
e
## (a
## 1
## −a
## 0
## ) +
b
## 2
e
## (a
## 2
## −a
## 1
## ) +···+
b
n
e
## (a
n
## −a
n−1
## )(24)
s=c
## 0
## +
b
## 1
e
## ∆a
## 1
## +
b
## 2
e
## ∆a
## 2
## +···+
b
n
e
## ∆a
n
## (25)
s=c
## 0
## +
y
## 1
## E
x
## E
y
e
## ∆x
## 1
## +
y
## 2
## E
x
## E
y
e
## ∆x
## 2
## +···+
y
n
## E
x
## E
y
e
## ∆x
n
## (26)
Silamedidadelaconstantedeintegraciónsehacedetalformaqueexistaunaescalaquerelaciona
suvaloreneldibujoconsuvalorreal,estasepuedeexpresarasí:
## E
z
## =
z
## 0
c
## 0
## (27)
## Así,setienelaexpresión
s=
z
## 0
## E
z
## +
y
## 1
## E
x
## E
y
e
## ∆x
## 1
## +···+
y
n
## E
x
## E
y
e
## ∆x
n
## (28)
Evidentemente,laescalautilizadaparalaconstantedeintegraciónnopuedeserarbitrariapara
queelméto dotengautilidad.Así,laescaladelaconstantedeintegracióndeb eráser:
## E
z
## =E
x
## E
y
e(29)
Nota.ConE
x
= 0,5m/cm,E
y
= 5kN/cmye= 4cmresultaE
z
= 0,5×5×4 = 10kN·m/cm:
1cmdeordenadaenlacurvaacumuladaequivalea10kN·m.Sienelejemplodelasección5se
integraragrácamenteM/EI,laescalaverticalE
y
tendríaunidadesdecurvatura(rad/mp orcm)
yE
z
deradp orcm.
5Problemasresueltos
5.1Ejemplo:vigasimplementeap oyadaconcargatriangular
CalcularladeexiónmáximadelavigadesecciónvariablementecontinuamostradaenlaFig.4,
queestásometidaalaaccióndeunacargaquevaríalinealmentedesdeq
## 1
hastaq
## 2
.Considerelos
siguientesvalores:q
## 1
## = 0,q
## 2
= 20kN/m,h
## 1
## = 0,20m,h
## 2
= 0,5m,L= 5m,E= 200GPa.
Solución.Lavigasedivideen40tramosde∆x= 0,125myseaplicanlasecuaciones(13)(16)
ylacorreccióndelgiroinicial,conq(x)  =  4xkN/m,h(x)  =  0,20 + 0,06xmeI(x)  =bh
## 3
## /12.
LatablacompletasemuestraenlaTabla8delAp éndiceA.Losdiagramasdecarga,cortante,
momentoector,momentoreducido,giroydeexiónsemuestranenlasFigs.5,6y7.
Resultadosobtenidos.Delatabla:V
## 0
= 16,6719kN;momentomáximoM= 32,0742kN·men
x= 2,875m(dondeVcambiadesigno);giroenelap oyoizquierdoθ(0) =−4,058E−07;giroenel
ap oyoderechoθ(L) = +2,697E−07;deexiónmáxima|w|= 5,045E−07enx= 2,25m,dondeel
giroseanula(interp olando,x≈2,21m).
Nota.Sobreunidades.M/EI= 5,593E−08enx= 0,125msoloseobtieneconMenkN·m
yEIenN·m
## 2
(E= 200E9Pa):lascolumnasM/EI,θ
## ′
## ,w
## ′
## ,θywdelatablaestánenunidades
mixtasydeb enmultiplicarsep or10
## 3
paraexpresarseenradym.Conunidadescoherentes,la
deexiónmáximaes5,045E−04m= 0,505mm(Tabla3).
## 6

q
## 1
q
## 2
h
## 1
h
## 2
## L
## ¢
x
## ¢
x
## ¢
x
## ¢
x
## ¢
x
## ¢
x
## ¢
x
## ¢
x
## ¢
x
## ¢
x
h
## 1
h
## 2
## L
Figura4:Vigadelejemplo:(a)vigaconlacargatriangular;(b)discretizaciónentramosdelongitud∆x.
Elanchob= 0,25mnoguraenelenunciado;sededujodeI(0) = 1,667×10
## −4
m
## 4
delatabla.
## 012345
x (m)
## 0
## 5
## 10
## 15
## 20
## Carga
q
(kN/m)
## Carga
## 012345
x (m)
## −30
## −20
## −10
## 0
## 10
## Cortante
## V
(kN)
## Cortante
Figura5:Diagramadecargasydiagramadefuerzascortantes.
Tabla3:Resultadosdelejemplo
MagnitudValordelatablaConunidadescoherentesUnidad
## V
## 0
16,671916,6719kN
## M
máx
32,074232,0742kN·m
θ(0)−4,058E−07−4,058E−04rad
θ(L)+2,697E−07+2,697E−04rad
## |w|
máx
(n= 40)5,045E−075,045E−04(0,505mm)m
## 7

## 012345
x (m)
## 0
## 10
## 20
## 30
## Momento
## M
(kN·m)
Momento flector
## 012345
x (m)
## 0.0
## 0.5
## 1.0
## 1.5
## 2.0
## M=EI
## (
## £
## 10
## ¡
## 7
## )
Momento reducido
Figura6:Diagramademomentosectoresydemomentosreducidos(unidadesdelatabla).
## 012345
x (m)
## −4
## −2
## 0
## 2
## Giro
μ
## (
## £
## 10
## ¡
## 7
## )
## Giro
## 012345
x (m)
## −5
## −4
## −3
## −2
## −1
## 0
## Deflexión
w
## (
## £
## 10
## ¡
## 7
## )
## Deflexión
Figura7:Diagramadegirosydedeexiones(unidadesdelatabla).
## 8

## Unalacalculadaamano
Nota.Paracomprobarelméto doserepitelalax= 0,125mdelatabla(∆x= 0,125m;q= 0,5
kN/m;V
## 0
= 16,6719kN).Primeroelcortanteyelmomento,con(13)y(14):
## V
## 1
= 16,6719−0,5 (0,5 + 0)(0,125) = 16,6406kN
## M
## 1
= 0 + 0,5 (16,6406 + 16,6719)(0,125) = 2,0820kN·m
## Luegolaalturaylainerciaenx
## 1
## :
h(x
## 1
) = 0,20 + 0,06 (0,125) = 0,2075m;I(x
## 1
## ) =
## 0,25 (0,2075)
## 3
## 12
## = 1,861×10
## −4
m
## 4
Elmomentoreducido,conEI= 200×10
## 9
## ×1,861×10
## −4
## = 3,722×10
## 7
## N·m
## 2
## (enlasunidadesde
latabla,conMenkN·m):
## 
## M
## EI
## 
## 1
## =
## 2,0820
## 3,722×10
## 7
## = 5,593×10
## −8
Comoenelpunto0elmomentoesnulo,(M/EI)
## 0
## = 0ylosvaloresprovisionalesdegiroydeexión,
con(15)y(16)yθ
## ′
## 0
## =w
## ′
## 0
## = 0,son
θ
## ′
## 1
## = 0 + 0,5 (5,593×10
## −8
## + 0)(0,125) = 3,496×10
## −9
w
## ′
## 1
## = 0 + 0,5 (3,496×10
## −9
## + 0)(0,125) = 2,185×10
## −10
Paraelgiroinicialsenecesitaladeexiónprovisionalenelap oyoderecho,w
## ′
## (L) = 2,029×10
## −6
(últimaladelatabla),demo doqueb=w
## ′
## (L)/L= 2,029×10
## −6
## /5 = 4,058×10
## −7
yθ
## 0
## =−b.
## Losvalorescorregidosson
θ
## 1
## =θ
## ′
## 1
## −b= 3,496×10
## −9
## −4,058×10
## −7
## =−4,023×10
## −7
w
## 1
## =w
## ′
## 1
## −bx
## 1
## = 2,185×10
## −10
## −4,058×10
## −7
## (0,125) =−5,050×10
## −8
Cadavalorcoincideconlalacorresp ondientedelaTabla8.
## Observaciones
Nota.ElmáximodeM/EInocoincideconelmáximodeM.Enlatabla,M/EIalcanzasumayor
valor(≈2,255E−07)haciax≈1,375m,mientrasqueMesmáximoenx= 2,875m:enesazona
lasecciónesmásdelgadaylacurvaturacrece.Eseeselefectofísicocentraldeunasecciónvariable.
Porotraparte,elvalordeV
## 0
delatabla(16,6719kN)diere0,03    %delanalíticoq
## 2
## L/6 = 16,6667
kN;ladiferenciaeserrordediscretizacióndeltrap ecio,quedecrececomo∆x
## 2
## [3].
5.2Voladizosdesecciónvariable:marcodecálculo(Problemas35y36)
Enlosdosproblemasquesiguenseresuelvenvoladizosdesecciónvariable:unavigatronco cónica
concargaconcentradaenelextremolibre(Problema35)yunavigarectangulardealturavariable
concargauniformeycargaconcentrada(Problema36).Enamb ossepide:
1.determinarenquéseccionestransversalessedesarrollanlosesfuerzosnormalesmáximos;
## 2.establecercuántasvecessonmayoresσ
máx
## ,|f|
máx
y|θ|
máx
queenvigassimilaresdesección
transversalconstante(lamáxima);
## 3.calcularlamáximadeexióndelavigayelgiroenelextremolibre.
Adiferenciadelejemploanterior,aquílasintegralesseresuelvenenformacerrada,conuncambio
devariableadimensional.
## 9

## Notaciónyconvenciones
Elejexsemidedesdeelemp otramientohaciaelextremolibre;Leslalongituddelaviga(denotada
lenlosenunciados).Laco ordenadaadimensionalesα=x/L,con0≤α≤1;enlasintegralesse
usalamismacantidadconelnombreu=x/L,demo doquedu= dx/L.Setraba jaconmagnitudes
(valoresabsolutos):comolascargasactúanhaciaaba jo,ladeexiónyelgirodelextremolibre
tienenelsentidodelacarga.Paranoconfundirlaletraddeldiámetro(Problema35)conel
diferencial,esteúltimoseescrib edx.
Tabla4:Símb olosprincipales
Símb oloSignicado
## V
x
## ,M
x
## Fuerzacortanteymomentoectorenlasecciónx
d
x
## ,h
x
Diámetro(P35)oaltura(P36)delasecciónenx
## A
x
## ,I
x
## Áreaymomentodeinerciadelasecciónenx
σ
x
## Esfuerzonormalmáximo(braextrema)enlasecciónx
σ
## ′
## Esfuerzoadimensional(normalizadoconunaconstante)
θ,δGiroydeexióndelextremolibre
EMó dulodeelasticidad(constante)
Fuerzasinternas:méto dodelassecciones
Secortalavigaenlasecciónxyseestudiaeltramolibre,elquecontienealextremolibre(longitud
L−x).Esetramodeb eestarenequilibrio,demo doqueenlacaracortadaactúanunafuerza
cortanteV
x
yunmomentoM
x
queequilibranlascargasaplicadassobreél:
## V
x
## =
## X
## F
y
## ,   M
x
## =
## X
## M.(30)
Elmomentodeunacargaresp ectoalaseccióneslacargamultiplicadap orsubrazo,queesla
distanciadesupuntodeaplicaciónalasección.
Esfuerzonormalp orexión
EnunaseccióndeinerciaI
x
## ,elesfuerzonormalenunabraaladistanciaydelejeneutroes
σ=M
x
y/I
x
.Esmáximoenlabramásalejada,y=c:
σ
x
## =
## M
x
c
## I
x
## .(31)
ParaunaseccióncirculardediámetroD:c=D/2eI=πD
## 4
/64.Paraunasecciónrectangularde
anchobyalturah:c=h/2eI=bh
## 3
## /12.
## Giroydeexióndelextremolibre
## Unelementodevigadelongituddxgiraunángulodθ=
## M
## EI
dx.Comoelgiroenelemp otramiento
esnulo,elgirodelextremolibreeslasumadeto doslosgiroselementales:
θ=
## Z
## L
## 0
## M
## EI
dx.(32)
Cadagiroelementaldesplazaademáselextremolibreenunacantidadigualadθp orladistancia
quehaydesdeeseelementohastaelextremo,queesL−x(segundoteoremadeláreademomentos
conlatangentehorizontalenelemp otramiento[2]):
δ=
## Z
## L
## 0
(L−x)
## M
## EI
dx.(33)
## 10

ElbrazoesL−xynox.Unacomprobacióninmediata:enunvoladizoprismáticoconcargaPen
elextremo,M=P(L−x)eIconstante,laecuación(33)da
## R
## L
## 0
P(L−x)
## 2
/(EI) dx=PL
## 3
## /(3EI),
queeselvalorcono cido;conxcomobrazoseobtendríalamitad,PL
## 3
## /(6EI).
ComoMtienesiempreelmismosigno,elgirocrecesincambiardesignodesdeelemp otramiento;
p oresoladeexiónmáximadeunvoladizoestáenelextremolibre.
## Vigadereferencia
Lacomparaciónquepidenlosenunciadossehaceconlavigasimilardesecciónconstanteigualala
máxima,esdecir,conlaseccióndelemp otramiento(3denelProblema35,3henelProblema36),
conlasmismascargasylamismalongitud.Porconstrucción,elesfuerzodelavigavariableenel
emp otramientocoincideconeldelavigadereferencia,locualsirvedecomprobación(sección5.5).
Secuenciadetraba jo
Enamb osproblemassesigueelmismoorden:(1)esquemadelaviga,sistemadeco ordenadasy
corteenlasecciónx;(2)fuerzasinternasV
x
yM
x
## ;(3)variacióndelasección(d
x
oh
x
## )ycálculo
deA
x
eI
x
## ;(4)cálculodelesfuerzoσ
x
ynormalizaciónσ
## ′
conα=x/L;(5)derivadadeσ
## ′
para
hallarlaseccióndelesfuerzomáximo;(6)cálculodelgiroθconelcambiodevariableu=x/L;(7)
cálculodeladeexiónδ;(8)comparaciónconlavigadesecciónconstante.
5.3Problema35:vigatronco cónica
Enunciado.Determineencuálesseccionestransversalesdelasvigassedesarrollaránlosesfuerzos
normalesmáximos,ycuántasvecesσ
máx
## ,|f|
máx
y|θ|
máx
sonmayoresqueenvigassimilaresde
seccióntransversalconstante(máxima).Además,calculelamáximadeexióndelavigayelgiro
enelextremolibre.
sección circular: diámetro 3d en el empotramiento y d en el extremo libre
## 3dd
## P
## L
Figura8:EnunciadodelProblema35:voladizotronco cónicodelongitudL,condiámetro3denelemp o-
tramientoydenelextremolibre,ycargaPenelextremolibre.
Datos.Voladizodeseccióncircular,condiámetro3denx= 0ydenx=L,quevaríadeforma
lineal.CargaconcentradaPenelextremolibre.Elmó duloEesconstante.
Paso1:esquemayfuerzasinternas.Secolo caelejexdesdeelemp otramientoysecorta
lavigaenlasecciónx(Fig.9a).EltramolibretienelongitudL−xysobreélsoloactúaP,
aplicadaenelextremolibre,aladistanciaL−xdelasección(Fig.9b).Elequilibriodefuerzasy
demomentosda
## V
x
## =P,   M
x
=P(L−x).(34)
## 11

Elmomentoesmáximoenelemp otramiento,x= 0:
## M
máx
## =PL.(35)
(a) Viga y sistema de coordenadas
sección x-x
x
## L −x
## 3dd
## P
## M
m
## ́
ax
## = PL
## L
(b) Tramo libre en equilibrio
## V
x
## M
x
## P
## V
x
## = P,  M
x
= P(L −x)
## L −x
(c) Sección x-x
d
x
d
x
= d(3 −2x/L)
Figura9:Problema35:(a)viga,co ordenadasycorteenlasecciónx;(b)tramolibreenequilibrioconV
x
yM
x
## ;(c)seccióntransversalxx.
Paso2:variacióndelasección.Eldiámetrovaríalinealmentede3dadalolargodeL,es
decir,disminuye2denlalongitudL:
d
x
## = 3d−
## 2d
## L
x=d
## 
## 3−
## 2x
## L
## 
## .(36)
Comprobación:enx= 0da3dyenx=Ldad.Eláreayelmomentodeinerciadelasección
circulardediámetrod
x
son
## A
x
## =
π
## 4
d
## 2
x
## =
π
## 4
d
## 2
## 
## 3−
## 2x
## L
## 
## 2
## ,(37)
## I
x
## =
π
## 64
d
## 4
x
## =
π
## 64
d
## 4
## 
## 3−
## 2x
## L
## 
## 4
## .(38)
Obsérveseelexp onente4deI
x
:elmomentodeinerciadep endedelacuartap otenciadeldiámetro.
Paso3:cálculodelesfuerzo.Labraextremaestáay=d
x
## /2 =
d
## 2
##  
## 3−
## 2x
## L
## 
.Entonces
σ=
M y
## I
## =
## M
x
d
## 2
## 
## 3−
## 2x
## L
## 
π
## 64
d
## 4
## 
## 3−
## 2x
## L
## 
## 4
## .(39)
Seagrupanlasconstantesylasp otenciasde(3−2x/L):
## constantes:
d
## 2
## ·
## 64
πd
## 4
## =
## 32
πd
## 3
## ;
## 12

p otencias:
## 
## 3−
## 2x
## L
## 
## 1−4
## =
## 
## 3−
## 2x
## L
## 
## −3
## .
## Portanto
σ=
## 32M
x
πd
## 3
## 
## 3−
## 2x
## L
## 
## 3
## =
32P(L−x)
πd
## 3
## 
## 3−
## 2x
## L
## 
## 3
## .(40)
SeextraeLdelnumerador,L−x=L(1−x/L):
σ
x
## =
## 32PL
πd
## 3
## ·
## 1−
x
## L
## 
## 3−
## 2x
## L
## 
## 3
## .(41)
Conα=x/Lsedeneelesfuerzoadimensional,dividiendoentrelaconstante32PL/(πd
## 3
## ):
σ
## ′
## =
σ
x
## 32PL
πd
## 3
## =
## 1−α
## (3−2α)
## 3
## ,0≤α≤1.(42)
LaTabla5ylaFig.10muestranelp erldeesfuerzos.Enelemp otramiento(α= 0)vale1/27,y
enelextremolibre(α= 1)vale0.
Tabla5:Problema35:p erldeesfuerzosσ
## ′
## (α)
α00,250,500,750,901,00
σ
## ′
## 0,03700,04800,06250,07410,05790
## 0.00.20.40.60.81.0
®= x=L
## 0.00
## 0.02
## 0.04
## 0.06
## 0.08
## ¾
## 0
## =
## ¾=
## (32
PL=¼d
## 3
## )
máximo: ®=
## 3
## 4
## ; ¾
## 0
## =
## 2
## 27
empotramiento: ¾
## 0
## =
## 1
## 27
Figura10:Problema35:p erldeesfuerzosσ
## ′
(α).Elesfuerzocrecedesdeelemp otramiento,alcanzasu
máximoenα= 3/4ycaeaceroenelextremolibre.
Paso4:seccióndelesfuerzomáximo.Elp erlnoesmonótono:elmomentodisminuyecon
x(factor1−α),p erolasecciónseadelgazaysumó duloresistentedisminuyeaúnmásrápido.Para
hallarelmáximosederiva(42)conlaregladelpro ducto:
dσ
## ′
dα
## =−(3−2α)
## −3
## + (1−α)(−3)(3−2α)
## −4
## (−2)
## = (3−2α)
## −4
## 
## −(3−2α) + 6(1−α)
## 
## =
## 3−4α
## (3−2α)
## 4
## .(43)
## 13

Laderivadaesp ositivaparaα <3/4ynegativaparaα >3/4,yseanulaen
## 3−4α= 0⇒α=
## 3
## 4
## 
x=
## 3L
## 4
## 
## .(44)
Es,p ortanto,unmáximo.Suvaloresσ
## ′
## =
## 1/4
## (3/2)
## 3
## =
## 1/4
## 27/8
## =
## 2
## 27
## ,dedonde
σ
máx
## =
## 32PL
πd
## 3
## ·
## 2
## 27
## =
## 64PL
27π d
## 3
## ≈0,7545
## PL
d
## 3
## .(45)
Comprobaciónconnúmeros.Enx= 3L/4elmomentoesel25    %delvalorenelemp otramiento,
p eroeldiámetroes1,5d(lamitadde3d)yelmó duloresistente,quevaríaconD
## 3
,eslao ctava
parte:12,5    %.Comoσ∝M/S,elesfuerzoresulta25/12,5 = 2veceseldelemp otramiento,de
acuerdoconσ
## ′
## = 2/27frentea1/27.
Paso5:cálculodelgiro.Sesustituyeen(32)elmomentoM
x
=P(L−x)ylainerciaI
x
## :
θ=
## Z
## L
## 0
P(L−x)
## E
π
## 64
d
## 4
## 
## 3−
## 2x
## L
## 
## 4
dx=
## 64P
## Eπd
## 4
## Z
## L
## 0
## L−x
## 
## 3−
## 2x
## L
## 
## 4
dx.(46)
SesacaLde(L−x)ysecambialavariable:u=x/L,du=  dx/L,conx=  0⇒u=  0y
x=L⇒u= 1:
θ=
## 64PL
## 2
## Eπd
## 4
## Z
## 1
## 0
## 1−u
## (3−2u)
## 4
du.(47)
Laintegralseresuelveconw= 3−2u.Entoncesu=
## 3−w
## 2
## ,1−u=
w−1
## 2
ydu=−
dw
## 2
## ;loslímites
pasandeu= 0,1aw= 3,1,yalinvertirlosdesapareceelsignomenos:
## Z
## 1
## 0
## 1−u
## (3−2u)
## 4
du=
## 1
## 4
## Z
## 3
## 1
w−1
w
## 4
dw=
## 1
## 4
## Z
## 3
## 1
##  
w
## −3
## −w
## −4
## 
dw=
## 1
## 4
## 
## −
## 1
## 2w
## 2
## +
## 1
## 3w
## 3
## 
## 3
## 1
## .(48)
## Seevalúa:enw= 3,−
## 1
## 18
## +
## 1
## 81
## =−
## 7
## 162
## ;enw= 1,−
## 1
## 2
## +
## 1
## 3
## =−
## 27
## 162
.Ladiferenciaes
## 20
## 162
y,conel
factor
## 1
## 4
## ,
## Z
## 1
## 0
## 1−u
## (3−2u)
## 4
du=
## 5
## 162
## .(49)
## Entonces
θ=
## 64·5
## 162
## PL
## 2
## Eπd
## 4
## =
## 160
## 81
## PL
## 2
## Eπd
## 4
## ≈0,6287
## PL
## 2
## Ed
## 4
rad.(50)
LacantidadPL
## 2
/(Ed
## 4
## )esadimensional(fuerza×longitud
## 2
divididaentrefuerza/longitud
## 2
## ×
longitud
## 4
),comocorresp ondeaunánguloenradianes.
Paso6:cálculodeladeexión.Seaplica(33),conelbrazoL−x:
δ=
## Z
## L
## 0
(L−x)
P(L−x)
## E
π
## 64
d
## 4
## 
## 3−
## 2x
## L
## 
## 4
dx=
## 64P
## Eπd
## 4
## Z
## L
## 0
(L−x)
## 2
## 
## 3−
## 2x
## L
## 
## 4
dx.(51)
Conu=x/Lsetiene(L−x)
## 2
## =L
## 2
## (1−u)
## 2
ydx=Ldu:
δ=
## 64PL
## 3
## Eπd
## 4
## Z
## 1
## 0
## (1−u)
## 2
## (3−2u)
## 4
du.(52)
## 14

## Conw= 3−2u,(1−u)
## 2
## =
## (w−1)
## 2
## 4
## :
## Z
## 1
## 0
## (1−u)
## 2
## (3−2u)
## 4
du=
## 1
## 8
## Z
## 3
## 1
## (w−1)
## 2
w
## 4
dw=
## 1
## 8
## Z
## 3
## 1
##  
w
## −2
## −2w
## −3
## +w
## −4
## 
dw=
## 1
## 8
## 
## −
## 1
w
## +
## 1
w
## 2
## −
## 1
## 3w
## 3
## 
## 3
## 1
## .
## (53)
## Enw= 3:−
## 1
## 3
## +
## 1
## 9
## −
## 1
## 81
## =−
## 19
## 81
## ;enw= 1:−1 + 1−
## 1
## 3
## =−
## 27
## 81
.Ladiferenciaes
## 8
## 81
## ,yconelfactor
## 1
## 8
laintegralvale
## 1
## 81
.Entonces
δ
máx
## =
## 64
## 81
## PL
## 3
## Eπd
## 4
## ≈0,2515
## PL
## 3
## Ed
## 4
## .(54)
LasdimensionesdePL
## 3
/(Ed
## 4
)sondelongitud,comocorresp ondeaunadeexión.
Paso7:comparaciónconlavigadesecciónconstante.Lavigadereferenciaesuncilindro
dediámetro3dento dasulongitud,conI
ref
## =
π(3d)
## 4
## 64
## =
## 81πd
## 4
## 64
yM
máx
=PL.Susvalores,con
lasfórmulasdelvoladizoconcargaenelextremo,son:
σ
ref
## =
## 32PL
π(3d)
## 3
## =
## 32PL
## 27πd
## 3
## ,(55)
θ
ref
## =
## PL
## 2
## 2EI
ref
## =
## 32
## 81
## PL
## 2
## Eπd
## 4
## ,(56)
δ
ref
## =
## PL
## 3
## 3EI
ref
## =
## 64
## 243
## PL
## 3
## Eπd
## 4
## .(57)
## Lasrazonesson
σ
máx
σ
ref
## =
## 64/27
## 32/27
## = 2,
δ
máx
δ
ref
## =
## 64/81
## 64/243
## = 3,
θ
θ
ref
## =
## 160/81
## 32/81
## = 5.(58)
ResultadosdelProblema35
## Seccióndelesfuerzomáximo:x=
## 3L
## 4
## ,conσ
máx
## =
## 64PL
## 27πd
## 3
## (2veceseldelavigacon-
stante).
## Deexiónmáxima(extremolibre):δ
máx
## =
## 64
## 81
## PL
## 3
## Eπd
## 4
## ≈0,2515
## PL
## 3
## Ed
## 4
## (3veces).
## Giroenelextremolibre:θ=
## 160
## 81
## PL
## 2
## Eπd
## 4
## ≈0,6287
## PL
## 2
## Ed
## 4
## (5veces).
5.4Problema36:vigadealturavariableconcargauniforme
Enunciado.Determineencuálesseccionestransversalesdelasvigassedesarrollaránlosesfuerzos
normalesmáximos,ycuántasvecesσ
máx
## ,|f|
máx
y|θ|
máx
sonmayoresqueenvigassimilaresde
seccióntransversalconstante(máxima).Además,calculelamáximadeexióndelavigayelgiro
enelextremolibre.
Datosysupuesto.VoladizodelongitudLysecciónrectangulardeanchobconstante(como
muestralagura)yalturaquedisminuyelinealmentede3hah.Cargauniformeqsobreto dala
longitudycargaconcentradaP= 3qLenelextremolibre.
Paso1:esquemayfuerzasinternas.Secortalavigaenlasecciónx(Fig.12).Eltramolibre,
delongitudL−x,sop ortalacargauniformeqsobreesalongitud(resultanteq(L−x),aplicadaen
## 15

q
## 3h
h
P=3qL
## L
sección rectangular de ancho b constante; altura 3h en el empotramiento y h en el extremo libre
Figura11:EnunciadodelProblema36:voladizodesecciónrectangular,conaltura3henelemp otramiento
yhenelextremolibre,cargauniformeqento dalalongitudLycargaconcentradaP= 3qLenelextremo
libre.
elpuntomediodeltramo,a(L−x)/2delasección)ylacargaconcentrada3qLenelextremo,a
ladistanciaL−x.Lasfuerzasinternasson
## V
x
=q(L−x) + 3qL= 4qL−q x=qL
## 
## 4−
x
## L
## 
## ,(59)
## M
x
= 3qL(L−x) +
## 1
## 2
q(L−x)
## 2
=qL
## 2
## 
## 3
## 
## 1−
x
## L
## 
## +
## 1
## 2
## 
## 1−
x
## L
## 
## 2
## 
## .(60)
Enelemp otramiento(x= 0):M
máx
=qL
## 2
##  
## 3 +
## 1
## 2
## 
= 3,5qL
## 2
.Enelextremolibre(x=L):M= 0.
(a) Viga, cargas y sistema de coordenadas
q
sección x-x
x
## L −x
## 3h
h
P = 3qL
sección rectangular, ancho b constante
## L
(b) Tramo libre en equilibrio
q
## V
x
## M
x
3qL
## L −x
(c) Sección x-x
h
x
## =
h
## (3
## −
## 2
x
## /
## L
## )
h
x
b
Figura12:Problema36:(a)viga,cargasycorteenlasecciónx;(b)tramolibreenequilibrioconV
x
y
## M
x
## ;(c)secciónrectangularxx.
Paso2:variacióndelp eralte.Laalturadisminuyelinealmentede3hah,esdecir,2henla
longitudL:
h
x
## = 3h−
## 2h
## L
x=h
## 
## 3−
## 2x
## L
## 
## .(61)
## 16

Comprobación:x= 0da3hyx=Ldah.Elmomentodeinerciadelrectánguloes
## I
x
## =
## 1
## 12
bh
## 3
x
## =
## 1
## 12
bh
## 3
## 
## 3−
## 2x
## L
## 
## 3
## .(62)
Aquíelexp onentees3,p orqueenunrectánguloIvaríaconelcub odelaaltura.
Paso3:cálculodelesfuerzonormal.Conc=h
x
## /2,elesfuerzoextremoes
σ=
## M
x
c
## I
x
## =
## M
x
## (h
x
## /2)
bh
## 3
x
## /12
## =
## 6M
x
bh
## 2
x
## .(63)
## Conh
x
=h(3−2x/L)y(60):
σ=
6qL
## 2
bh
## 2
## ·
## 3
## 
## 1−
x
## L
## 
## +
## 1
## 2
## 
## 1−
x
## L
## 
## 2
## 
## 3−
## 2x
## L
## 
## 2
## .(64)
Sedeneelesfuerzoadimensionaldividiendoentre6qL
## 2
## /(bh
## 2
),conα=x/L:
σ
## ′
## =
σ
6qL
## 2
bh
## 2
## =
## 3(1−α) +
## 1
## 2
## (1−α)
## 2
## (3−2α)
## 2
## .(65)
Sesimplicaelnumeradormultiplicandoydividiendop or2ysacandofactorcomún(1−α):
σ
## ′
## =
## 6(1−α) + (1−α)
## 2
## 2 (3−2α)
## 2
## =
## (1−α)
## 
## 6 + (1−α)
## 
## 2 (3−2α)
## 2
## =
## (1−α)(7−α)
## 2 (3−2α)
## 2
## ,0≤α≤1.(66)
Semantieneelcuadradodeldenominadorento daslaslíneas.Enelemp otramientoσ
## ′
## (0) =
## 7
## 2·9
## =
## 7
## 18
yenelextremolibreσ
## ′
(1) = 0(Tabla6yFig.13).
Tabla6:Problema36:p erldeesfuerzosσ
## ′
## (α)
α00,20,40,60,81,0
σ
## ′
## 0,38890,40240,40910,39510,31630
Paso4:seccióndelesfuerzomáximo.Seescrib eσ
## ′
=N/DconN=  (1−α)(7−α)  =
## 7−8α+α
## 2
yD= 2(3−2α)
## 2
,demo doqueN
## ′
=−8 + 2αyD
## ′
=−8(3−2α).Porlaregladel
co ciente:
dσ
## ′
dα
## =
## N
## ′
## D−ND
## ′
## D
## 2
## =
## (3−2α)
## 
## 2(−8 + 2α)(3−2α) + 8(7−8α+α
## 2
## )
## 
## 4(3−2α)
## 4
## =
## (3−2α)(8−20α)
## 4(3−2α)
## 4
## =
## 2−5α
## (3−2α)
## 3
## .(67)
## Elcorchetesesimplicóasí:2(−8 + 2α)(3−2α) =−48 + 44α−8α
## 2
## ,quesumadoa56−64α+ 8α
## 2
da8−20α.Laderivadaseanulaen
## 2−5α= 0⇒α=
## 2
## 5
(x= 0,4L),(68)
## 17

## 0.00.20.40.60.81.0
®= x=L
## 0.0
## 0.1
## 0.2
## 0.3
## 0.4
## 0.5
## ¾
## 0
## =
## ¾=
## (6
qL
## 2
## =bh
## 2
## )
máximo: ®=
## 2
## 5
## ; ¾
## 0
## =
## 9
## 22
empotramiento: ¾
## 0
## =
## 7
## 18
Figura13:Problema36:p erldeesfuerzosσ
## ′
(α).Elmáximoestáenα= 2/5yesap enasmayorqueel
valorenelemp otramiento.
ycambiadep ositivaanegativa,demo doqueesunmáximo.Enesepunto
σ
## ′
## =
## (0,6)(6,6)
## 2 (2,2)
## 2
## =
## 3,96
## 9,68
## =
## 9
## 22
## ,(69)
yp ortanto
σ
máx
## =
6qL
## 2
bh
## 2
## ·
## 9
## 22
## =
27qL
## 2
## 11bh
## 2
## ≈2,455
qL
## 2
bh
## 2
## .(70)
Lavigadereferencia(altura3hconstante)tienesuesfuerzomáximoenelemp otramiento:σ
ref
## =
6 (3,5qL
## 2
## )
b(3h)
## 2
## =
7qL
## 2
## 3bh
## 2
## ≈2,333
qL
## 2
bh
## 2
## ,quecoincideconσ
## ′
(0) = 7/18.Larazónes
σ
máx
σ
ref
## =
## 27/11
## 7/3
## =
## 81
## 77
## ≈1,05.(71)
Paso5:cálculodelgiro.Sesustituyen(60)y(62)en(32):
θ=
## Z
## L
## 0
qL
## 2
## 
## 3
## 
## 1−
x
## L
## 
## +
## 1
## 2
## 
## 1−
x
## L
## 
## 2
## 
## E
## 1
## 12
bh
## 3
## 
## 3−
## 2x
## L
## 
## 3
dx.(72)
Conu=x/Lydx=Ldu:
θ=
12qL
## 3
E bh
## 3
## Z
## 1
## 0
## 3(1−u) +
## 1
## 2
## (1−u)
## 2
## (3−2u)
## 3
du.(73)
## Almeterelfactor12enelnumerador,12
## 
## 3(1−u) +
## 1
## 2
## (1−u)
## 2
## 
## = 6
## 
## 6(1−u) + (1−u)
## 2
## 
## ,queda
θ=
6qL
## 3
E bh
## 3
## Z
## 1
## 0
## 6(1−u) + (1−u)
## 2
## (3−2u)
## 3
du,6(1−u) + (1−u)
## 2
## = (1−u)(7−u).(74)
Seconservaelcub odeldenominador,queprovienede(62).Paraintegrarseusaw=  3−2u:
## 1−u=
w−1
## 2
## ,7−u=
w+11
## 2
ydu=−
dw
## 2
,conlímitesw= 3aw= 1.Entonces(1−u)(7−u) =
## (w−1)(w+11)
## 4
## =
w
## 2
## +10w−11
## 4
y
## Z
## 1
## 0
## (1−u)(7−u)
## (3−2u)
## 3
du=
## 1
## 8
## Z
## 3
## 1
w
## 2
## + 10w−11
w
## 3
dw=
## 1
## 8
## Z
## 3
## 1
## 
## 1
w
## +
## 10
w
## 2
## −
## 11
w
## 3
## 
dw=
## 1
## 8
## 
lnw−
## 10
w
## +
## 11
## 2w
## 2
## 
## 3
## 1
## .
## (75)
## 18

## Enw= 3:ln 3−
## 10
## 3
## +
## 11
## 18
= ln 3−
## 49
## 18
.Enw= 1:−10+
## 11
## 2
## =−
## 81
## 18
.Ladiferenciaesln 3+
## 32
## 18
= ln 3+
## 16
## 9
## ,
yconelfactor
## 1
## 8
laintegralvale
ln 3
## 8
## +
## 2
## 9
.Apareceellogaritmonaturalp orqueelintegrandocontiene
untérmino1/w.Entonces
θ= 6
## 
ln 3
## 8
## +
## 2
## 9
## 
qL
## 3
## Ebh
## 3
## =
## 
## 3
## 4
ln 3 +
## 4
## 3
## 
qL
## 3
## Ebh
## 3
## ≈2,157
qL
## 3
## Ebh
## 3
rad.(76)
Paso6:cálculodeladeexión.Conelmismopro cedimientoseobtieneladeexiónaplicando
(33),conelbrazoL−x=L(1−u):
δ=
6qL
## 4
E bh
## 3
## Z
## 1
## 0
## (1−u)
## 2
## (7−u)
## (3−2u)
## 3
du.(77)
## Conw= 3−2u,(1−u)
## 2
## (7−u) =
## (w−1)
## 2
## (w+11)
## 8
ydu=
dw
## 2
(conloslímitesyainvertidos).Como
## (w−1)
## 2
## (w+ 11) =w
## 3
## + 9w
## 2
## −21w+ 11:
## Z
## 1
## 0
## (1−u)
## 2
## (7−u)
## (3−2u)
## 3
du=
## 1
## 16
## Z
## 3
## 1
## 
## 1 +
## 9
w
## −
## 21
w
## 2
## +
## 11
w
## 3
## 
dw=
## 1
## 16
## 
w+ 9 lnw+
## 21
w
## −
## 11
## 2w
## 2
## 
## 3
## 1
## .(78)
Enw=  3:3 + 9 ln 3 + 7−
## 11
## 18
## =
## 169
## 18
+ 9 ln 3.Enw=  1:1 + 21−
## 11
## 2
## =
## 297
## 18
.Ladiferenciaes
9 ln 3−
## 128
## 18
= 9 ln 3−
## 64
## 9
## ,yconelfactor
## 1
## 16
laintegralvale
## 9
## 16
ln 3−
## 4
## 9
.Entonces
δ
máx
## = 6
## 
## 9
## 16
ln 3−
## 4
## 9
## 
qL
## 4
## Ebh
## 3
## =
## 
## 27
## 8
ln 3−
## 8
## 3
## 
qL
## 4
## Ebh
## 3
## ≈1,041
qL
## 4
## Ebh
## 3
## .(79)
Paso7:comparaciónconlavigadesecciónconstante.Lavigadereferenciaesrectangular
dealtura3hconstante,conI
ref
## =
b(3h)
## 3
## 12
## =
## 9bh
## 3
## 4
.Sesup erp onenlosefectosdeP= 3qLydeq
conlasfórmulasdelvoladizo:
θ
ref
## =
## PL
## 2
## 2EI
ref
## +
qL
## 3
## 6EI
ref
## =
## 
## 3
## 2
## +
## 1
## 6
## 
qL
## 3
## EI
ref
## =
## 20
## 27
qL
## 3
## Ebh
## 3
## ,(80)
δ
ref
## =
## PL
## 3
## 3EI
ref
## +
qL
## 4
## 8EI
ref
## =
## 
## 1 +
## 1
## 8
## 
qL
## 4
## EI
ref
## =
## 1
## 2
qL
## 4
## Ebh
## 3
## .(81)
## Lasrazonesson
θ
θ
ref
## =
## 27
## 20
## 
## 3
## 4
ln 3 +
## 4
## 3
## 
## ≈2,91,
δ
máx
δ
ref
## = 2
## 
## 27
## 8
ln 3−
## 8
## 3
## 
## ≈2,08.(82)
ResultadosdelProblema36
Seccióndelesfuerzomáximo:x= 0,4L,conσ
máx
## =
27qL
## 2
## 11bh
## 2
## (≈1,05veceseldelaviga
constante).
## Deexiónmáxima(extremolibre):δ
máx
## =
## 
## 27
## 8
ln 3−
## 8
## 3
## 
qL
## 4
## Ebh
## 3
## ≈1,041
qL
## 4
## Ebh
## 3
## (≈2,08
veces).
## Giroenelextremolibre:θ=
## 
## 3
## 4
ln 3 +
## 4
## 3
## 
qL
## 3
## Ebh
## 3
## ≈2,157
qL
## 3
## Ebh
## 3
## (≈2,91veces).
## 19

5.5Vericaciónyerroresfrecuentes(Problemas35y36)
## Vericacionesrealizadas
1.Integraciónnuméricadirecta.Seevaluaronnuméricamentelasintegralesdelgiroydela
deexióndeamb osproblemas.Losresultadoscoincidenconlosvaloresexactoshastalasexta
cifra:160/81 = 1,975309y64/81 = 0,790123(Problema35);2,157293y1,041150(Problema
## 36).
2.Máximos.Elmáximodeσ
## ′
calculadonuméricamentecaeenα= 0,75(valor0,07407 = 2/27)
enelProblema35yenα= 0,40(valor0,40909 = 9/22)enelProblema36.
3.Pruebadelemp otramiento.Enα= 0lavigavariabletienelasecciónmáxima,demo do
quesuesfuerzodeb ecoincidirconeldelavigadereferencia.Así,σ
## ′
(0)deb eser1/27en
elProblema35(p orqueσ
ref
## =
## 32PL
## 27πd
## 3
)y7/18enelProblema36(p orqueσ
ref
## =
7qL
## 2
## 3bh
## 2
y
## 6·
## 7
## 18
## =
## 7
## 3
).Amb osvaloressecumplen.
4.Pruebadelbrazo.Lafórmula(33)repro ducePL
## 3
/(3EI)enlavigaprismática.
## Erroresfrecuentes
Perderunexponente.Enlaseccióncircular,I∝(3−2α)
## 4
yS=I/c∝(3−2α)
## 3
,p orloqueσ
## ′
llevaexp onente3ylasintegralesdeθyδllevanexp onente4eneldenominador.Enlasección
rectangular,I∝(3−2α)
## 3
yS∝(3−2α)
## 2
## :σ
## ′
llevaexp onente2ylasintegralesllevanexp onente
3.Perderunexp onentealsimplicarpro duceunp erldeesfuerzossinmáximointerioryvalores
deθyδvariasvecesmayoresqueloscorrectos.
Usarxcomobrazoenladeexión.Elbrazoesladistanciadelasecciónalextremolibre,L−x.
## Normalizarconunaconstanteequivocada.σ
## ′
deb evalerexactamenteσ
ref
divididop orlaconstante
denormalizaciónenα= 0(pruebadelemp otramiento).
## Olvidarlasdimensiones.θesadimensionalyδtienedimensióndelongitud;sinosalen,hayun
error.
## Resumencomparativo
Tabla7:ResultadosdelosProblemas35y36yrazónresp ectoalavigadesecciónconstante
MagnitudP35:valorRazónP36:valorRazón
## Seccióndeσ
máx
x=
## 3
## 4
Lx= 0,4L
σ
máx
## 64PL
## 27πd
## 3
## 2
27qL
## 2
## 11bh
## 2
## 1,05
δ
máx
## 0,2515
## PL
## 3
## Ed
## 4
## 31,041
qL
## 4
## Ebh
## 3
## 2,08
θ0,6287
## PL
## 2
## Ed
## 4
## 52,157
qL
## 3
## Ebh
## 3
## 2,91
6Conclusiones
Cadaintegracióndelacadenaq→V→M→θ→wintro duceunaconstantequedeb e
jarseconlascondicionesdeap oyo.
## 20

ConEIvariable,elcambioesencialesdividirMentreEI(x)puntoapunto;laregladel
trap eciop ermiteresolverelproblemaconunaho jadecálculo.Lacorrecciónb=
## 1
## L
## R
θdx
equivaleaimp onerw(L) = 0.
Elejemplodelavigasimplementeap oyadaconvergeaw
máx
## ≈0,505mmenx≈2,22,25m;
deb evigilarselacoherenciadeunidades(factor10
## 3
enlascolumnasdelatabla).
Elméto dográcoconescalasconducealamismaintegral,conlacondiciónE
z
## =E
x
## E
y
e.
Enlosvoladizos,elesfuerzonormalmáximonoestáenelemp otramiento:enelProblema
35aparecea3L/4yduplicaelvalordelavigacilíndricadereferencia;enelProblema36
aparecea0,4Lyexcedeap enasenun5    %alvalordelemp otramiento,p orquelaaltura
variableacompañabienalmomentoector.
Ladeexiónyelgirodelextremolibreaumentanmuchomás(3y5vecesenelcono,2,08y
2,91vecesenlavigarectangular),loquemuestraquealigerarunavigareducesup esop ero
p enalizasobreto dosurigidez.
Elpro cedimientodelosvoladizosessiempreelmismoysecompruebacondospruebas
simples:queelesfuerzoenelemp otramientocoincidaconeldelavigadereferenciayque
lasdimensionesdelosresultadosseancorrectas.
## Referencias
[1]E.Cap cha,Elementosdesecciónvariable,Notasdeclase,ResistenciadeMaterialesI I,Fac-
ultaddeIngenieríaMecánica,UniversidadNacionaldeIngeniería,ciclo2025-I.
[2]F.P.Beer,E.R.JohnstonJr.,J.T.DeWolfyD.F.Mazurek,MechanicsofMaterials,McGraw-
HillEducation.
[3]R.L.BurdenyJ.D.Faires,NumericalAnalysis,9.ªed.Cengage,2011.
ATabladelejemplo
Columnasdelatabladelejemploensusunidadesoriginales:xenm,qenkN/m,VenkN,Men
kN·m,henm,Ienm
## 4
;M/EI,θ
## ′
## ,w
## ′
## ,θywenlasunidadesmixtasdescritasenlasección5.1.
## Aquíθ
## ′
yw
## ′
sonelgiroyladeexiónprovisionales(conθ
## 0
## = 0),yθywlosvalorescorregidos.
## 21

Tabla8:Tabladelejemplo(n= 40tramosde∆x= 0,125m)
x/LxqVMhIM/EIθ
## ′
w
## ′
θw
0,0000,0000,00016,67190,00000,20000,0001670,000E+000,000E+000,000E+00−4,058E−070,000E+00
0,0250,1250,50016,64062,08200,20750,0001865,593E−083,496E−092,185E−10−4,023E−07−5,050E−08
0,0500,2501,00016,54694,15620,21500,0002071,004E−071,326E−081,266E−09−3,925E−07−1,002E−07
0,0750,3751,50016,39066,21480,22250,0002291,354E−072,800E−083,845E−09−3,778E−07−1,483E−07
0,1000,5002,00016,17198,25000,23000,0002531,627E−074,663E−088,510E−09−3,591E−07−1,944E−07
0,1250,6252,50015,890610,25390,23750,0002791,837E−076,829E−081,569E−08−3,375E−07−2,379E−07
0,1500,7503,00015,546912,21880,24500,0003061,994E−079,223E−082,572E−08−3,135E−07−2,786E−07
0,1750,8753,50015,140614,13670,25250,0003352,108E−071,179E−073,886E−08−2,879E−07−3,162E−07
0,2001,0004,00014,671916,00000,26000,0003662,185E−071,447E−075,527E−08−2,611E−07−3,505E−07
0,2251,1254,50014,140617,80080,26750,0003992,232E−071,723E−077,508E−08−2,335E−07−3,814E−07
0,2501,2505,00013,546919,53120,27500,0004332,254E−072,003E−079,837E−08−2,054E−07−4,088E−07
0,2751,3755,50012,890621,18360,28250,0004702,255E−072,285E−071,252E−07−1,773E−07−4,328E−07
0,3001,5006,00012,171922,75000,29000,0005082,239E−072,566E−071,555E−07−1,492E−07−4,532E−07
0,3251,6256,50011,390624,22270,29750,0005492,208E−072,844E−071,893E−07−1,214E−07−4,701E−07
0,3501,7507,00010,546925,59380,30500,0005912,165E−073,117E−072,266E−07−9,404E−08−4,835E−07
0,3751,8757,5009,640626,85550,31250,0006362,112E−073,385E−072,672E−07−6,731E−08−4,936E−07
0,4002,0008,0008,671928,00000,32000,0006832,051E−073,645E−073,111E−07−4,130E−08−5,004E−07
0,4252,1258,5007,640629,01950,32750,0007321,983E−073,897E−073,583E−07−1,609E−08−5,040E−07
0,4502,2509,0006,546929,90620,33500,0007831,909E−074,140E−074,085E−078,238E−09−5,045E−07
0,4752,3759,5005,390630,65230,34250,0008371,831E−074,374E−074,617E−073,161E−08−5,020E−07
0,5002,50010,0004,171931,25000,35000,0008931,749E−074,598E−075,178E−075,399E−08−4,966E−07
0,5252,62510,5002,890631,69140,35750,0009521,665E−074,811E−075,766E−077,533E−08−4,886E−07
0,5502,75011,0001,546931,96880,36500,0010131,578E−075,014E−076,380E−079,559E−08−4,779E−07
0,5752,87511,5000,140632,07420,37250,0010771,489E−075,205E−077,019E−071,148E−07−4,647E−07
0,6003,00012,000−1,328132,00000,38000,0011431,400E−075,386E−077,680E−071,328E−07−4,493E−07
0,6253,12512,500−2,859431,73830,38750,0012121,309E−075,555E−078,364E−071,497E−07−4,316E−07
0,6503,25013,000−4,453131,28120,39500,0012841,218E−075,713E−079,069E−071,655E−07−4,119E−07
0,6753,37513,500−6,109430,62110,40250,0013581,127E−075,860E−079,792E−071,802E−07−3,903E−07
0,7003,50014,000−7,828129,75000,41000,0014361,036E−075,995E−071,053E−061,937E−07−3,669E−07
0,7253,62514,500−9,609428,66020,41750,0015169,452E−086,119E−071,129E−062,061E−07−3,419E−07
0,7503,75015,000−11,453127,34380,42500,0015998,549E−086,231E−071,206E−062,174E−07−3,155E−07
0,7753,87515,500−13,359425,79300,43250,0016857,652E−086,332E−071,285E−062,275E−07−2,877E−07
0,8004,00016,000−15,328124,00000,44000,0017756,762E−086,423E−071,364E−062,365E−07−2,587E−07
0,8254,12516,500−17,359421,95700,44750,0018675,880E−086,502E−071,445E−062,444E−07−2,286E−07
0,8504,25017,000−19,453119,65620,45500,0019625,008E−086,570E−071,527E−062,512E−07−1,976E−07
0,8754,37517,500−21,609417,08980,46250,0020614,146E−086,627E−071,609E−062,569E−07−1,659E−07
0,9004,50018,000−23,828114,25000,47000,0021633,294E−086,673E−071,692E−062,616E−07−1,335E−07
0,9254,62518,500−26,109411,12890,47750,0022682,453E−086,709E−071,776E−062,652E−07−1,005E−07
0,9504,75019,000−28,45317,71880,48500,0023771,624E−086,735E−071,860E−062,677E−07−6,724E−08
0,9754,87519,500−30,85944,01170,49250,0024898,060E−096,750E−071,944E−062,692E−07−3,368E−08
1,0005,00020,000−33,32810,00000,50000,0026040,000E+006,755E−072,029E−062,697E−07≈0
## 22