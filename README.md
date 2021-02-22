# Covid19DatabaseVisualisering

Vi skal arbejde med det underliggende data der ligger under visualiseringen af covid-19, [(CSSE), Johns Hopkins University Hospital](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

Det kan gøres statisk som Hopkins eller dynamisk som her, [The race](https://www.youtube.com/watch?v=lWzabvOStDo)


### øvelse
I skal undersøge informationen på websitet.
* Lav en liste med de informationer I kan finde,(lande, antal smittede, ).
* Beskriv hvordan informaitonerne bliver repræsenteret.
* Beskriv interaktionen, hvordan vælger brugeren og hvilke informationer kommer der.


## Tre-lags-arkitektur, (kilde [iftek](http://iftek.dk/leksikon:tre-lags-arkitektur))
I en trelagsarkitur indeles et program i tre lag, hvilket er er nyttigt i implementeringen af programmer, da de tre lag så vidt mulig holdes adskilte og dermed er hele programmet lettere at overskue.

**Præsentationslag:** Det øverste lag der håndterer modtagelse og præsentation af data. Dette lag er kendetegnet ved at være ”tæt” på brugeren af programmet.

**Logiklag:** Det midterste lag der håndterer udvekslingen af data mellem præsentationslaget og datalaget.

**Datalag:** Det nederste lag der opbevarer og håndterer data. Dette lag er også kendetegnet ved at være ”tæt” på computeren.

**Datalaget** er her en database som er lagt offentligt tilgængelig på Github

 [github.com antal dødsfald](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv)

[githob.com antal smittede](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv)

**Logiklaget** behandler data.

![dataeksempel](images/database1.png)

eks.
pseudokode til valg af Færøerne:
```
Hvis mus klik med koordinaterne (-6.92,61) vis data fra række 94
fra datasæt `github.com antal dødsfald` og `github.com antal smittede`
```

I **Præsentationslaget** bliver resultatet af logiklaget vist.
eks.

![faeroeerne](images/database2.png)
![graf](images/database3.png)

### Øvelse
* Find Spanien i datasættet, man kan søge og undersøg hvad der er i datalaget.
* Skriv speudokode til at vælge spanien fra venstre kolonne på websiden.
* Hvilke informationer vises i *præsentationslaget*?


## Github datastruktur
Github ordner sin data i en biblioteksstruktur med 'repositor' som overmappe og subrepositories som undermapper.

Master repositori for covid-19 datamaterialer er [github covid-19](https://github.com/CSSEGISandData/COVID-19).

Master repositori har en `README.md` fil hvor repositoriet bliver forklaret.

### Øvelse
*   Undersøg mappestrukturen for  [github covid-19](https://github.com/CSSEGISandData/COVID-19).
* Læs `README.md` filen.
* Hvornår er subrepositories sidst opdateret.
* Hvornår er datasættet time_series_covid19_deaths_global.csv sidst opdateret og hvordan er det opdateret?


## Github csv datasets
CSV, comma separated values, data er en simpel struktur hvor værdier bliver adskilt af komma. Det bruges i regneark og til simpel overførsel af data. Github viser filerne som et regneark, men mulighed for at søge i det.

De forskellige datasæt eks `antal smittede` og `antal døde` kan ses som en database. For at kunne trække værdier fra forskellige datasæt skal hver række i datasættet have et unikt navn, kaldet en **nøgle**.

### Databases elemente
* **nøgle**, unik identifikation.
* **Entiteter**, data som er konstant, persons navn, firma, bil.
* **Attributter**, data som knytter sig til Entiteterne.
* **Relationer**, relationer mellem entiteter.


### Øvelse
* Angiv nøgle, Entiteter og Attributter for datasættet [covid-19 death](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv#L8)
* Overvej problemer i forhold til at medtage flere regioner eller lande.
* Beskriv hvilken information tabellens første række, header, angiver.

Løsning, **nøgle**, rækkenummer i tabellen, **Entiteter**, lande eller regioner, **Attributter**, koordinater og antal smittede

Vi får brug for data rent i csv format, Det kan gøres ved `Raw` knappen.


# Værktøj til programmering
## Atom
Vi bruger Atom til at kode vores JS filer og kører den i browseren. Hvordan man laver ```index.html``` filen og opsætningen af teletype er beskrevet på siden, [https://github.com/mpsteenstrup/Billedmanipulation](https://github.com/mpsteenstrup/Billedmanipulation).

## P5js
Vi bruger biblioteket P5js,

* [https://p5js.org/](https://p5js.org/)
* [Introduktion med en del små programmer](https://github.com/mpsteenstrup/GCP4)
* [Kreativ Kodning, Kristian Wicnmann](https://www.youtube.com/channel/UCRSqTiVe7Rho95hNtd3hJBQ/videos), kode på [github.com/kwichmann/Kreativ-Kodning](https://github.com/kwichmann/Kreativ-Kodning).
* [P5js Table reference](https://p5js.org/reference/#/p5.Table)

## Teddavis online værktøj
Onlineværktøjet [https://teddavis.org/p5live/](https://teddavis.org/p5live/) gør det muligt at skrive kode sammen på forskellige computere.
[kort introduktionsvideo](https://youtu.be/_zipXWWdM-o)

Det er også muligt at bruge Arom og Teletype, hvis I har det bedre med det.

### SHORTCUTS til p5live (virker i Chrome)
* CTRL + enter » run code
* CTRL + E » editor toggle
* CTRL + M » menu toggle
* CTRL + - » decrease fontsize
* CTRL + + » increase fontsize
* CMD  + A » mark all code
* CMD  + C » copy code

### opsætning p5live
* I settings skal I fjerne 'Live Coding', så programmet ikke automatisk kører jeres kode. Hvis I er i gang med at lave en løkke kan det få programmet til at gå ned.
* Programmet kører i browseren og den letteste måde at gemme er at markere alt teksten og kopiere den over i en tekst editor på computeren.


## HelloWorld med P5js
Som altid er det godt at kunne køre et ```HelloWorld```script.
### Øvelse
* Download JSfiler folderen og åben den som projekt i Atom.
* Ret ```<script src="JSfiler/generalFilterSharpening.js"></script> ``` så det er ```HelloWorld.js``` filen som bruges.
* Brug Atom liveserver til at se resultatet, det virker vist ikke med Prewiew HTML.

## Indlæsning af data

Vi starter med js filen [ExploreData.js](javaScript/ExploreData.js).

### Example
[videoløsning](https://youtu.be/sfg6oYdRS5I)
* Finder javaScript consollen i browseren.
* Undersøger data.
* Printer antallet af rækker og kolonner.
* Finder data på Italien.


### Øvelse
Prøv selv.
* Find javaScript consollen i browseren.
* Undersøg data for antallet af smittede (linket er øverst).
* Print antallet af rækker og kolonner.
* Ser det ud til at være samme struktur som det andet datasæt.
* Find data på Spanien.

## Iteration over data
Eksempel på iteration over data for Italien. [iterateData.js](javaScript/iterateData.js)

### Øvelse
* Kopier koden over i p5live og kør den.
* Besktiv hvad I ser.
* Beskriv hvad `frameRate(100/count);` gør.
* Hvorfor starter variablen `count` ved 4?
* Tilføj Spanien ved siden af.

## datavisualisering
Eksempel op visualisering af antallet af smittede i Italien.
[dataVisualisering.js](javaScript/dataVisualisering.js)

### Øvelse
* Kopier koden over i p5live og kør den.
* Besktiv hvad I ser.
* Hvad i koden er nyt i forhold til `iterateData.js` filen.
* Tilføj Spanien, igen.

Det er også muligt at bruge placeringsdata, Long (longitude) og Lat (latitude).

[dataVisualiseringLocation.js](javaScript/dataVisualiseringLocation.js)

### Øvelse
* Kopier koden over i p5live og kør den, i genstarter med musseklik.
Problemerne med at få den helt rigtige placering skyldes at projektionen af en rund sfære på et flat kort ikke er triviel.
* Prøv at flyt eller stræk kortet for at forbedre det.
  - Kan man gøre det så placeringen bliver helt korrekt?
* Beskriv det nye i koden.
* Giv de steder som vokser mest en anden farve.

# Selvstændigt projekt 3 moduler.

I disse coronatider er information om smitte og smittespredning vigtig.

I skal lave en visualisering af covid-19 smittespredningen.

visualiseringen **kan** indeholde
* Udvikling over tid.
* Geografisk udbredelse.
* De forskellige attributter, antal døde, antal smittede og antallet som er kommet sig.
* Brugerinteraktion, eks. udvælgning af lande eller attributter.

I skal redegøre for datastrukturen og hvordan I behandler data.

Visualiseringen og redegørelsen skal præsenteres i jeres portfoie.

# Elevernes visualiseringer kan ses her
[Visualiseringer](https://mpsteenstrup.github.io/Covid19DatabaseTutorial/elevproduktioner/elevproduktioner.html)
