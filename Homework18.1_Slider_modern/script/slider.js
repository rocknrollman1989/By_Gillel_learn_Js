
let slideWidht = document.querySelectorAll(' .slider-wrapper img');

let sliderWrapperStop = document.getElementsByClassName('slider-wrapper');
sliderWrapperStop[0].addEventListener('mouseover', stopAutoPlay);
sliderWrapperStop[0].addEventListener('mouseout', playStop);

let movieRight = document.getElementsByClassName('arrow-right');
movieRight[0].addEventListener('click', goSlidesRight);
movieRight[0].addEventListener('click', stopAutoPlay);

let movieLeft = document.getElementsByClassName('arrow-left');
movieLeft[0].addEventListener('click', goSlidesLeft);
movieLeft[0].addEventListener('click', stopAutoPlay);

let stopPlay = document.getElementsByClassName('stop-play-btn');
stopPlay[0].addEventListener('click', playStop);
stopPlay[0].go = 'weGo';
stopPlay[0].style.background = "url('./static/stop.png') no-repeat";

// let bigImageForUs = document.getElementsByClassName('slide-show');
// bigImageForUs[0].addEventListener('click', bigPicture)

sliderOurElements = Array.prototype.slice.call(slideWidht); //переводим в массив для работы с дом элем.






let goAutoLeftSlider = setInterval(goSlidesRight,5000); // авто-старт

function goSlidesRight(){
    sliderOurElements[sliderOurElements.length] = sliderOurElements[sliderOurElements.length - 1] ;
    let cloneImg = [];
    cloneImg[0] = sliderOurElements[sliderOurElements.length - 1].src;

    // console.log(cloneImg[0]);
    // console.log(sliderOurElements);

        for(i=sliderOurElements.length-2; 0<i; i--){
            sliderOurElements[i].src = sliderOurElements[i-1].src; 
        }
        sliderOurElements[0].src = cloneImg[0];
        
    sliderOurElements.pop()
 }  

function goSlidesLeft(){
    sliderOurElements[sliderOurElements.length] = sliderOurElements[sliderOurElements.length - 1] ;
    let cloneImg = [];
    cloneImg[0] = sliderOurElements[0].src;

        for(i=0; i<sliderOurElements.length-2; i++){
            sliderOurElements[i].src = sliderOurElements[i+1].src; 

        }
        sliderOurElements[sliderOurElements.length - 1].src = cloneImg[0];
        sliderOurElements.pop()
 }  

function stopAutoPlay(){
    clearInterval(goAutoLeftSlider);
    
    stopPlay[0].go = 'weStop'
    // console.log(stopPlay[0].go);
    stopPlay[0].style.background = "url('./static/play.png') no-repeat";
}
function playStop(){
    if(stopPlay[0].go == 'weStop'){
        goAutoLeftSlider = setInterval(goSlidesRight,5000);
        stopPlay[0].style.background = "url('./static/stop.png') no-repeat";
        stopPlay[0].go = 'weGo';
        // console.log(stopPlay[0].go)
        return
    }
    if(stopPlay[0].go == 'weGo'){
        return stopAutoPlay()
        // console.log(stopPlay[0].go)
    }
}

// sliderOurElements[0].addEventListener('click', function(){alert(sliderOurElements[0].src)})
// function bigPicture(){
    
//     bigImageForUs[0].style.position = 'absolute';
//     bigImageForUs[0].style.top = '10%';
//     bigImageForUs[0].style.left = '10%';
//     bigImageForUs[0].style.width = '120%';
//     bigImageForUs[0].style.height = '120%';
    
// }
