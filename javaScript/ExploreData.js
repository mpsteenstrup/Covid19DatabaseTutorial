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
  print(table);
  tilSenere();
}

function tilSenere(){
  print('antal rækker: ' + table.getRowCount());
  print('antal søjler: ' + table.getColumnCount());  print(table.columns[5]);
  Italy = table.findRow('Italy','Country/Region');
  print(Italy);
  print(Italy.arr[22]);
}
