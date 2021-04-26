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
  textSize(40);
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

  maksimum = [0,0,0,0,0];
  lande = ['','','','',''];

  for (let j = 0; j<5; j++){

  for (let i = 0; i<table.getColumnCount(); i++){
    if (parseInt(table.getColumn(count)[i])>=maksimum[0]){
      maksimum[0] = parseInt(table.getColumn(count)[i]);
      lande[0] = table.getColumn(1)[i];
      console.log(table.getColumn(count)[i]);
    }
  if (parseInt(table.getColumn(count)[i])>maksimum[j] && parseInt(table.getColumn(count)[i])<maksimum[j-1]){
      maksimum[j] = parseInt(table.getColumn(count)[i]);
      lande[j] = table.getColumn(1)[i];
    }
}

}

  for (let i = 0; i <5; i++){
    text(lande[i], 100,100+i*160);
    text(maksimum[i],100,160+i*160);
  }

/*  confirmed = table.getColumn(count);*/


  count += 1;
  if (count>table.getColumnCount()-1){
    count = table.getColumnCount()-1;
  }
}
function mousePressed(){
  count=5;
}
