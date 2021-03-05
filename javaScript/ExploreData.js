/*
Indlæsning af dataset fra URL og print karakteristika.
Se consolen i Chrome View->Developer->JavaScript console.
Der kommer nogen fejlmeddelser som I skal se bort fra.
*/

let table;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
}

function setup() {
  createCanvas(600,600);

  textSize(32);
  text('datasæt',10,30);
  text('rows: ' + table.getRowCount(), 10, 60);
  text('columns ' + table.getColumnCount(), 10, 90);
  Italy = table.findRow('Italy','Country/Region');
  text(Italy.arr[129],10,120);
  textSize(10);
  text(table.columns,10,150);
}
