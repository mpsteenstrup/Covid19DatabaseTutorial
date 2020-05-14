let runde=0, points=0, c, x, table, antalDage, doede, smittede, max, maxs, skalerxs, skalerys, width=800, height=400;

function preload(){
    tabledoede = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
    tablesmittede = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv', 'header');
}

function setup(){
    createCanvas(width,height);
    background(150);
    navne=[]
    land()
    buttons()
  
  //
  max=0;
  maxs=0;
  doede = [];
  smittede = [];
  
  //tager antal af dage startende fra 0, det er ikke nødvendigt at specificere om det er døde eller smittede man tager fra da de har samme antal kolonner
  antalDage = tabledoede.getColumnCount() - 4;
  antalDages = tablesmittede.getColumnCount()-4;
  //
  
}

let w=Math.floor(Math.random()*4)+1;

function tjek1(){
    if (w===1){
      background(0,255,0)
      vandt()
    }else{
      background(255,0,0)
      tabt()
    }    
}
function tjek2(){
    if (w===2){
      background(0,255,0)
      vandt()
    }else{
      background(255,0,0)
      tabt()
    }    
}
function tjek3(){
    if (w===3){
      background(0,255,0)
      vandt()
    }else{
      background(255,0,0)
      tabt()
    }    
}
function tjek4(){
    if (w===4){
      background(0,255,0)
      vandt()
    }else{
      background(255,0,0)
      tabt()
    }    
}

function vandt(){
  points++
  runde++
  console.log(points)
  next(1)
}

function tabt(){
  runde++
  console.log(points)
  next(0)
}

function next(s){
  textSize(30)
  if (s===1){
    text('Du vandt!',(width/2)-60,25)
  }else{
    text('Du tabte!',(width/2)-60,25)
  }
  k1.hide()
  k2.hide()
  k3.hide()
  k4.hide()
  k5=createButton('Næste Runde!')
  k5.position((width/2)-125,45)
  k5.size(250)
  k5.mousePressed(start)
}

function start(){
  background(150);
  if (runde===10){
    k5.hide()
    textSize(30)
    text('Du fik '+str(points)+'/10!',(width/2)-80,25)
    k6=createButton('Spil igen!')
    k6.position((width/2)-125,35)
    k6.size(250)
    k6.mousePressed(restart)
  }else{
    w=Math.floor(Math.random()*4)+1
    k5.hide()
    navne=[]
    land()
    buttons()
}
}

function restart(){
  k6.hide()
  runde=0
  points=0
  start()
}

function land(){
    x=Math.floor(random(0,tabledoede.getRowCount()));
    y=tabledoede.rows[x]
  
    if (y.arr[0]!==""){
      land()
    }else{
      c=y.arr[1]
      console.log(y.arr[1])
    }
}

function buttons(){
        textSize(24)
        fill('red')
        text('💀 •',50,height-25)
        fill('black')
        text(' ☣ •',50,height-50)
        
        k1=createButton(navn(1))
        k1.position((width-525)/2,30)
        k1.mousePressed(tjek1)
        k1.size(250)
        k2=createButton(navn(2))
        k2.position((width-525)/2,60)
        k2.mousePressed(tjek2)
        k2.size(250)
        k3=createButton(navn(3))
        k3.position(((width-525)/2)+275,30)
        k3.mousePressed(tjek3)
        k3.size(250)
        k4=createButton(navn(4))
        k4.position(((width-525)/2)+275,60)
        k4.mousePressed(tjek4)
        k4.size(250)
        textSize(32)
        text('Patient Zero: '+zero(c),(width/2)-150,25)
}

function zero(country){
  z=tablesmittede.findRow(country,'Country/Region')
  for (let i=4; i<tablesmittede.getColumnCount();i++){
    if(z.arr[i]!=='0'){
      var date = new Date(2020,0,22)
      date.setDate(date.getDate()+i-4)
      let dato=(date.getMonth()+1) + "-" + date.getDate() + "-" + date.getFullYear()
      return dato
    }
  }
}

function navn(i){
    if (i===w){
      return c
    }else{
      var qx=Math.floor(random(0,tabledoede.getRowCount()));
      var qy=tabledoede.rows[qx]
      var landet=qy.arr[1]
      
      if (navne.includes(landet) || landet==c){
          navn(i)
      }else{
        navne.push(landet)
        return landet
      }     
}
}


//
function draw () {
  
  //vælger en række som der arbejdes videre med og gemmer den i variablen "række"
  var raekke = tabledoede.rows[x];
  var raekkes = tablesmittede.rows[x];  

  //sætter max-værdien til 0 for at kunne tjekke om der er værdier over denne
  for (var i = 4; i < tabledoede.getColumnCount(); i++) {
    var d = raekke.getNum(i); // antal doede på i'te dag
    
    //sørger for, at hvis der er værdier større end max bliver den max værdi
    if (d > max) {
      max = d;
    }
    //sætter antal døde ind i det tomme array
    doede.push(d);
  }
  
  for (var j = 4; j < tablesmittede.getColumnCount(); j++) {
    var ds = raekkes.getNum(j); //antal smittede på j'te dag
    
    //sørger for at hvis der er værdier større end max bliver den max værdi
    if (ds > maxs) {
      maxs = ds;
    }
    //sætter antal smittede ind i det tomme array
    smittede.push(ds);
  }
  
 //skalere akserne så man får en graf der ligner noget man kan bruge til noget
  skalerys = height / maxs;
  skalerxs = width / antalDages;
  
  //døde
  for(var dag = 1; dag < antalDage; dag++) {
    //tegner linjer mellem dagen før til nuværende dag og skalerer
    line((dag - 1)*skalerxs, (maxs - doede[dag - 1])*skalerys, dag*skalerxs, (maxs - doede[dag])*skalerys);
    //vælger farven af grafen - så kan man sammenligne
    stroke(255,0,0);
  }
  
  //smittede
  for(var dags = 1; dags < antalDages; dags++) {
    //tegner linjer mellem dagen før til nuværende dag
    line((dags - 1)*skalerxs, (maxs - smittede[dags - 1])*skalerys, dags*skalerxs, (maxs - smittede[dags])*skalerys);
    stroke(0,0,0);
  }
  
}