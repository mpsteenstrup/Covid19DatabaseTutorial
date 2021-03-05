## The plan
Duration: 6 lessons times 90 minutes
Plan,
* 2 lessons introduction, exercises from github.
* 3-4 lessons group work, 2-3 persons per group.
* 1-2 lessons presentation.

## Wisit the class
* 15/4, 12:10-13:40
* 26/4, 13:55-15:25
* 28/4 3, 12:10-13:40

Central European Time (CET)

## Contact
Mads Peter H. Steenstrup,
mps@rysensteen.dk

# Covid19 Database Visualisation

We are working with the covid-19 data from Jonh's Hopkins University.

The focus is to make a visualisation of the data that is either dynamic or contain some user interaction.

two examples
* [(CSSE), Johns Hopkins University Hospital](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
* [The race](https://www.youtube.com/watch?v=lWzabvOStDo).

### Exercise
Investigate the dashboard from Johns Hopkins, by
* Making a list of the informations available.
* Describe how it is presented.
* Describe the interaction part.



## Project description
After a year of corona-closedown the only recreation is to follow the development in the covid-19 spread. The media is desperat to provide new visualisations to their leaders. They have hired you to develop this product.

You have to make a program that
* Use data from John Hopkins databasen.
* Is dynamic or interactive.
* The program have to be accesable online, ex. on Github.

You have to consider
* Whether your program is informative or entertaining.
* How your design choices reflect on that.
* How well it is implementet.

## Three layer architecture (source [iftek](http://iftek.dk/leksikon:tre-lags-arkitektur))
In a three layer architecture a program is divided in to three layers.
*Data*, often consisting of a database.
** Logic **, calculations based on the data layer.
** Presentation **, the layer that the users see.

The datalayer is public accesable data on Github.

[github.com antal dødsfald](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv)

[githob.com antal smittede](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv)

**Logic**
![dataeksempel](/images/database1.png)

ex.
Pseudocode to get Faroe Islands
```
If mouse clicked at coordinates (-6.92,61) show row 94 from dataset `github.com number of confirmed`
```

The presentation layer,

![faeroeerne](/images/database2.png)
![graf](/images/database3.png)

### Exercise
* Find Spanien in the dataset.
* Write pseudokode to get data from Spain.
* Describe what information is presented in the presentation layer.

## Github data structure
Github arranges its data in a library structure with 'repository' as main folder and subrepositories as subfolders.

Master repository for covid-19 dataset is [github covid-19](https://github.com/CSSEGISandData/COVID-19).

Master repository has a `README.md` file.

### Exercise
*   Investigate the folder structure for  [github covid-19](https://github.com/CSSEGISandData/COVID-19).
* Read the `README.md` file.
* When is the subrepositories updated.
* Then is the time_series_covid19_deaths_global.csv updated?


## Github csv dataset
CSV, comma separated values, data is a simple structure where values ​​are separated by commas. It is used in spreadsheets and for simple data transfer. Github displays the files as a spreadsheet, with the ability to search it. If you need the clean data, you must press the **RAW** button. It is also the URL you will need to retrieve data later.

The different data sets eg `number of infected` and` number of dead` can be seen as a database. In order to be able to extract values ​​from different data sets, each row in the data set must have a unique name, called a **key**.

### The elements of the database
* ** key **, unique identification.
* ** Entities **, data that is constant, person's name, company, car.
* ** Attributes **, data associated with the Entities.
* ** Relationships **, relationships between entities.

### Exercise
* Specify key, Entities and Attributes for the dataset [covid-19 death](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_Global).
* Consider issues related to including multiple regions or countries.
* Describe what information the first row of the table, header, indicates.

Solution, ** key **, row number in the table, **Entities**, countries or regions, ** Attributes **, coordinates and number of infected.

# Programmering
## Atom

We use Atom to encode our JS files and run it in the browser. How to make the ```index.html``` file and the teletype setup is described on the page, [https://github.com/mpsteenstrup/Billedmanipulation](https://github.com/mpsteenstrup/Billedmanipulation).

## P5js
We use the library P5js
* [https://p5js.org/](https://p5js.org/)
* [Introduktion med en del små programmer](https://github.com/mpsteenstrup/GCP4)
* [Kreativ Kodning, Kristian Wicnmann](https://www.youtube.com/channel/UCRSqTiVe7Rho95hNtd3hJBQ/videos),
* Code on [github.com/kwichmann/Kreativ-Kodning](https://github.com/kwichmann/Kreativ-Kodning).
* [P5js Table reference](https://p5js.org/reference/#/p5.Table)

## HelloWorld, P5js
As always, it's good to be able to run a ```HelloWorld``` script.

### Exercise
* Download the JSfiler folder and open it as a project in Atom.
* Open ```HelloWorld.html```and ```HelloWorld.js``` and start **HTML Preview**.
* You should see a red circle.
* Try to change the code and see what happens. For example, make the red circle follow the mouse with `` ellipse (mouseX, mouseY, 200,200) `` `
* Examine the ```.html``` file and find the line where P5js is loaded and where ```HelloWorld.js``` are loaded.
* Use **P5js** references to change so that the background constantly overwrites the circle, possibly. slightly transparent.

## Loading data

We start with the js file [ExploreData.js](/javaScript/ExploreData.js),there is also a ```ExploreData.html```file.

### Exercise
* See the program in preview.
* Find out how the program writes what you see.
* Consider what ```table.columns``` does.
* Find data on Spain.

### Exercise
* Note that data is loaded first in ```function preload ()```, ready to be used.
* Right now we are loading the number of dead, change it so we are loading the number of infected.

## Iterate dataset
Example of iteration over data for Italy, [iterateData.js](/javaScript/iterateData.js)

### Exercise
* Create a ```.html``` file to run ```itererData.js```, or change the one you used just before.
* What do you see.
* Describe what `frameRate (100 / count);` does.
* Why does the variable `count` start at 4?
* Add Spain next to it.

## Data visualization
Example visualization of the number of infected in Italy, [dataVisualisering.js](/javaScript/dataVisualisering.js).

### Exercise
* Run the program
* What do you see.
* What is new in the code in relation to the `iterateData.js` file.
* Add Spain, again.

It is also possible to use location data, Long (longitude) and Lat (latitude), [dataVisualiseringLocation.js](/javaScript/dataVisualiseringLocation.js)

### Exercise
* Copy the code into p5live and run it, restart with mouse click.

The problems with getting the right placement are due to the fact that the projection of a round sphere on a flat map is not trivial.
* Try moving or stretching the card to improve it.
  - Can you do it so that the location is completely correct?
* Describe what is new in the code.
* Give the places that grow the most a different color.

# The students' visualizations can be seen here
[Visualiseringer](https://mpsteenstrup.github.io/Covid19DatabaseTutorial/elevproduktioner/elevproduktioner.html)



## Teddavis online
 [https://teddavis.org/p5live/](https://teddavis.org/p5live/) allows you to write code together on different computers.
[short introductory video](https://youtu.be/_zipXWWdM-o)

### SHORTCUTS to p5live (works in Chrome)
* CTRL + enter » run code
* CTRL + E » editor toggle
* CTRL + M » menu toggle
* CTRL + - » decrease fontsize
* CTRL + + » increase fontsize
* CMD  + A » mark all code
* CMD  + C » copy code

### Setup p5live
* In settings you must remove 'Live Coding' so that the program does not automatically run your code. If you are in the process of making a loop, it may cause the program to crash.
* The program runs in the browser and the easiest way to save is to select all the text and copy it to a text editor on the computer.
