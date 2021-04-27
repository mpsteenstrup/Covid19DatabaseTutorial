/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let count=4;
/*
Starter ved fire da det er den fjerde kolonne
*/

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  Italy = table.findRow('Italy','Country/Region');
  Spain = table.findRow('Spain','Country/Region');
  Denmark = table.getRow(106);
  Sweden = table.findRow('Sweden','Country/Region');
  China = sumChina();
  US = table.findRow('US','Country/Region');
  head = table.columns;
  textSize(30);
}

function draw(){
  frameRate(100/count);
  background(0,100,200);
  text(Italy.arr[count],300,150);
  text('Italy:',150,150);
  text(Spain.arr[count],300,200);
  text('Spain:',150,200);
  text(Denmark.arr[count],300,250);
  text('Denmark:',150,250);
  text(Sweden.arr[count],300,300);
  text('Sweden:',150,300);
  text(China[count],300,350);
  text('China:',150,350);
  text(US.arr[count],300,400);
  text('US:',150,400);
  text(head[count],600,100);

  count +=1;
  if (count>table.getColumnCount()-1){
    count = 4;
  }
}

function sumChina(){
  China = [];
  for (let j = 4;j<table.getColumnCount();j++){
    ChinaSum = 0
    for (let i=60; i<94; i++){
    ChinaSum += parseInt(table.getRow(i).arr[j]);
    }
  China.push(ChinaSum);
  }
  return China;
}
