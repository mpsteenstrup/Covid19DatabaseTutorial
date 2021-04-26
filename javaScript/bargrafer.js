/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let img;
let count=5;
timedelay = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');

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
  frameRate(4);
  background(0,100,200);


  max = 0;
  max2 = 0;
  land = '';
  land2 = '';
  for (let i = 0; i<table.getColumnCount(); i++){
    if (parseInt(table.getColumn(count)[i])>max){
      max = parseInt(table.getColumn(count)[i]);
      land = table.getColumn(1)[i];
    }
    if (parseInt(table.getColumn(count)[i])>max2 && parseInt(table.getColumn(count)[i])<max){
        max2 = parseInt(table.getColumn(count)[i])
        land2 = table.getColumn(1)[i];
    }
  }
  text(land, 100,150);
  text(max,100,250);
  text(land2, 100,350);
  text(max2,100,450);

/*  confirmed = table.getColumn(count);*/


  count += 1;
  if (count>table.getColumnCount()-1){
    count = table.getColumnCount()-1;
  }
}
function mousePressed(){
  count=5;
}
