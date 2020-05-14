/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let img;
let count=5;
timedelay = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');

    table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
  img = createImg('https://github.com/mpsteenstrup/Covid19DatabaseTutorial/blob/master/images/map.jpg?raw=true');
  img.hide();

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  textSize(60);
  fill(200);
  frameRate(10);
  noStroke();
}

function draw(){
  frameRate(20/log(count));
  background(0,100,200);
  image(img,400-360,400-360*0.84,360*2,440);

  text(table.columns[count],550,150);
  lat = table.getColumn('Lat');
  long = table.getColumn('Long');
  confirmed = table.getColumn(count);

  for (i=0;i<table.getRowCount();i++){
      ellipse(400+long[i]*2,400-lat[i]*2,log(confirmed[i]),log(confirmed[i]));
  }

  count += 1;
  if (count>table.getColumnCount()-1){
    count = table.getColumnCount()-1;
  }
}
function mousePressed(){
  count=5;
}
