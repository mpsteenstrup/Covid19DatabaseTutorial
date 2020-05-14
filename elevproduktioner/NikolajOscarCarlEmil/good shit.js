let img, table;
var total=0;
var count = 0
var harGjortGennemsigtig = false

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
  img = loadImage('https://sst.23video.com/60650859/61791275/439823803c732eeca6f5a3f3aa428444/large/corona-nyt-sadan-skal-vi-lege-thumbnail.jpg/thumbnail.jpg');

}

function setup() {
  createCanvas(720,720);
  summeretsyge()
  image(img,0,0);
  print(total);
  noStroke();
}

function draw(){
if (img) {
if (!harGjortGennemsigtig) {
  gennemsigtig()
  harGjortGennemsigtig = true
}


  if (count < total/100) {
      count += 10
      coronafun()

}
}
}






function summeretsyge(){
   j=table.getColumnCount()-1
   for (i=0;i<table.getRowCount();i++){
   total = total +  table.getNum(i,j);
   }
 }


function gennemsigtig(){
  for (let i=0; i<720; i++){
    for (let j=0; j<720; j++){
          let holder = img.get(i,j)
          set(i,j,[holder[0],holder[1],holder[2],0])
    }
  }
  updatePixels();
}

function coronafun(){

    for (let i=0; i<10; i++){
     let a = random(720)
     let b = random(720)
     let holder1 = img.get(a,b)
       set(a,b,[holder1[0],holder1[1],holder1[2],255])
     }
    updatePixels();

}
