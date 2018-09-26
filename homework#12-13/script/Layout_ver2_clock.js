(function createClockRetro(){
    let housinngOfClock = document.createElement('div');
    housinngOfClock.className = "Housing-of-Clock";
    document.body.appendChild(housinngOfClock);

    let screenOfClock = document.createElement('div');
    screenOfClock.className = "Screen-Of-Clock";
    housinngOfClock.appendChild(screenOfClock);

    let dateDayM = document.createElement('p');
    dateDayM.className = "Date-n-month";
    screenOfClock.appendChild(dateDayM);

        let nowDay = document.createElement('span');
        dateDayM.appendChild(nowDay);
        let nowDayN = document.createElement('span');
        dateDayM.appendChild(nowDayN);
        let nowMonth = document.createElement('span');
        dateDayM.appendChild(nowMonth);
        

    let timeToKnow = document.createElement('p');
    timeToKnow.className = "Time-to-Know";
    screenOfClock.appendChild(timeToKnow);

        let nowHour = document.createElement('span');
        timeToKnow.appendChild(nowHour);
        let nowMin = document.createElement('span');
        timeToKnow.appendChild(nowMin);
        let nowSec = document.createElement('span');
        timeToKnow.appendChild(nowSec);




startCl()

function startCl(){
    let timeId;
    timeId = setInterval(clockOnPage, 1000);
    clockOnPage()
};

function clockOnPage(){
let time = new Date();

    let hour = time.getHours();
    if(hour<10){
        hour= '0'+ time.getHours();
    }
    timeToKnow.children[0].innerHTML = `${hour}`;
    


    let min = time.getMinutes();
    if(min<10){
        min= '0'+ time.getMinutes();
    }
    timeToKnow.children[1].innerHTML = ` : ${min}`;
    


    let sec = time.getSeconds();
    if(sec<10){
        sec= '0'+ time.getSeconds();
    }
    timeToKnow.children[2].innerHTML = ` : ${sec}`;


    let day = (time.getDay()===0)? 'ВС':
    (time.getDay()===1)? 'ПН':
    (time.getDay()===2)? 'ВТ':
    (time.getDay()===3)? 'СР':
    (time.getDay()===4)? 'ЧТ':
    (time.getDay()===5)? 'ПТ':
     'СБ';
    
    dateDayM.children[0].innerHTML = `${day} --- `;

    let dayN = time.getDate();
    
    dateDayM.children[1].innerHTML = `${dayN} --- `;

    let month = (time.getMonth()===0)? 'ЯНВАРЬ':
    (time.getMonth()===1)? 'ФЕВРАЛЬ':
    (time.getMonth()===2)? 'МАРТ':
    (time.getMonth()===3)? 'АПРЕЛЬ':
    (time.getMonth()===4)? 'МАЙ':
    (time.getMonth()===5)? 'ИЮНЬ':
    (time.getMonth()===6)? 'ИЮЛЬ':
    (time.getMonth()===7)? 'АВГУСТ':
    (time.getMonth()===8)? 'СЕНТЯБРЬ':
    (time.getMonth()===9)? 'ОКТЯБРЬ':
    (time.getMonth()===10)? 'НОЯБРЬ':
     'ДЕКАБРЬ!';
    
    dateDayM.children[2].innerHTML = `${month}`;
}


}());



