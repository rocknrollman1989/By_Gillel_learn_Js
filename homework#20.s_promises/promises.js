let changeClass = document.getElementById('begin');
changeClass.addEventListener('click' , beginPro)


ourTimerAnimated = document.getElementsByClassName('status');

let animGo = document.getElementById('anim');
animGo.addEventListener("transitionend", goGoGo);

ourStatusLoad = document.getElementById('waiter');
ourStatusLoad.innerHTML= '100%'

let stopLoader = document.getElementById('stop');
// stopLoader.addEventListener('click', stopLoad);

function beginPro(){

// let PartyBegin = new Promise(function(resolve, reject){ 

    changeClass.removeEventListener('click' ,beginPro);
    ourTimerAnimated[0].className = 'status active';
    let i = 0;

        let preLoad = setInterval(function(){
            i++;

            if(i==100){
            clearInterval(preLoad);
            changeClass.addEventListener('click' ,beginPro);
            alertDone()
            return ourStatusLoad.innerHTML = 'done!';
        }
        ourStatusLoad.innerHTML= `${100-i}%`;
    }, 40)

    // })
    // .then(alertDone)
    //     // .then(chanceToAlert);
            
};

function alertDone(){
    
    let alert = setInterval(function(){

        if(ourTimerAnimated[0].className === 'status'){
            ourTimerAnimated[0].className = 'status alert';
            return
        }
       else ourTimerAnimated[0].className = 'status';
    },350);

    setTimeout(function(){
        clearInterval(alert);
        ourTimerAnimated[0].className = 'status'
        console.log('пока работает');
    }, 3000);

}

function goGoGo(){
    console.log('!!!');
    let background = document.getElementsByClassName('info');
    let imageRepeat = document.getElementsByTagName('img');

    let PartyBegin = new Promise(function(resolve, reject){ 
        setTimeout(function(){
            console.log('жара');
            
            background[0].style.display = 'none';
            resolve();
        }(),1000)
    return  PartyBegin
    })
    .then(() => setTimeout(function(){background[0].style.display = ' flex'}, 1000))
        .then(() =>setTimeout(function(){imageRepeat[0].src = 'https://i.ytimg.com/vi/ecaRgbySjrE/hqdefault.jpg', console.log(imageRepeat)},5000 ))
            .then(()=> setTimeout(function(){imageRepeat[0].src = 'https://cs8.pikabu.ru/post_img/big/2017/07/27/10/1501177948171867336.jpg',console.log(imageRepeat)},10000))
            .then (()=>{console.log(PartyBegin)});
}
