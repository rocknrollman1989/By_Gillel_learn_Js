let loveTimer = document.createElement('div');
loveTimer.id = 'ourLoveTimer';
document.body.appendChild(loveTimer);

let ourLoveComment = document.createElement('span');
ourLoveComment.className = 'comment-to-timer';
ourLoveComment.innerText = `Приветствую заблудший в паутине Странник!
Ты тратишь свое время на наш сайт уже `;
loveTimer.appendChild(ourLoveComment);

let ourLoveSec = document.createElement('span');
ourLoveSec.className = 'Love-sec';
ourLoveSec.innerHTML = '00'
loveTimer.appendChild(ourLoveSec);

let ourLoveMin = document.createElement('span');
ourLoveMin.className  = 'Love-min';
ourLoveMin.innerHTML =` : 00`;
loveTimer.appendChild(ourLoveMin);

let ourLoveHour = document.createElement('span');
ourLoveHour.className = 'Love-hour';
ourLoveHour.innerHTML =` : 00`;
loveTimer.appendChild(ourLoveHour);


let sec, min, hour;
sec = 0; 
min = 0;
hour = 0; 
let realSec = 0;
let realHour = 0;
let realMin = 0;

function timer(){
   
        sec++;
       
            (sec<10? realSec = '0' + sec: realSec = sec);
        
        if(sec === 60){
        sec=0;
        realSec = '0' + sec;
        min++;
        }

        (min<10? realMin  = '0'+ min : realMin = min);
            
        if(min === 60){
        min=0;
        realMin = '0' +sec ;
        hour++;
        }

        hour<10? realHour = '0'+ hour: realHour  = hour;
        
        ourLoveSec.innerHTML = realSec;
        ourLoveMin.innerHTML =` : ${realMin}`;
        ourLoveHour.innerHTML =` : ${realHour}`;
        console.log(realSec, realMin, realHour);
  
    }
   
    let runTimer = setInterval(timer, 1000 );
   
    function timerAgain(){
      return  runTimer = setInterval(timer, 1000);
    }

    function stopTimer(){
        clearInterval(runTimer);
    }


    let timerPaused = document.getElementById('ourLoveTimer');
    timerPaused.addEventListener('mouseover', stopTimer);
    timerPaused.addEventListener('mouseout', timerAgain );
   
    
    function clearOurTimer(){
    sec = 0; 
    min = 0;
    hour = 0; 
    realSec = 0;
    realHour = 0;
    realMin = 0;
    }

    document.onkeydown = function timerReset(key){
        // console.log(key.keyCode);
        key.keyCode == '27'?  clearOurTimer() : null;


    }

