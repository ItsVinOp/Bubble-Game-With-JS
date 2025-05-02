var timer = 60;

var score = 0;           //you didnt set score value then it will not increase

var hitrn = 0;  //global var acc anywhere

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;     //its necessary to put # or . according to id/class
}


function getNewHit(){
  hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitrn  //`${hitrn}` var store
}

function makeBubble(){

var clutter = "";

  for (i=1;i<=102;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
  }
  
  document.querySelector("#pbtm").innerHTML= clutter;

}


function runTimer(){
 var timerInt = setInterval(function(){
  if(timer > 0){
    timer--;
    document.querySelector("#timerSave").textContent = timer;
  }
  else{
    clearInterval(timerInt);
    document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`;  //bug time 0 game not stop so "" #pbtm white
  }
  },1000);
   


}


document.querySelector("#pbtm").addEventListener(
  "click",function(dets){
   var clickednum = (Number(dets.target.textContent));
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
  }
); //bubble ke parent pr event lsitener white
 
runTimer();
makeBubble();
getNewHit();
// increaseScore();

