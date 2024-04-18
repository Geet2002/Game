var timer = 60;
var score = 0;
var hitrn;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i <= 60; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1><h2>Your score is ${score}</h2>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitrn)
    {
        getNewHit();
        makeBubble();
        increaseScore()
    }
})

getNewHit();
runTimer();
makeBubble();