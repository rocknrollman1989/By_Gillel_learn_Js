let sliderWrapper = document.createElement('div');
sliderWrapper.className = 'slider-wrapper';
document.body.appendChild(sliderWrapper);

let slidePicture = document.createElement('div');
slidePicture.className = 'slider-slide'
sliderWrapper.appendChild(slidePicture);

let ourPicture = document.createElement('img');
ourPicture.className = 'slider-img'
ourPicture.alt = 'somePicture';
slidePicture.appendChild(ourPicture);

let navigationSlider = document.createElement('div');
navigationSlider.className = 'nav-for-slides';
sliderWrapper.appendChild(navigationSlider);

let arrowLeft = document.createElement('img');
arrowLeft.className = 'arr-left';
arrowLeft.src = '../homework 17_ slider/static/left.png'
arrowLeft.addEventListener('click', turnLeftSlide);
navigationSlider.appendChild(arrowLeft);

let stopPlay = document.createElement('img');
stopPlay.className = 'arr-stop';
stopPlay.bool = false;
stopPlay.src = '../homework 17_ slider/static/stop.png';
stopPlay.addEventListener('click', playStop);
navigationSlider.appendChild(stopPlay);

let arrowRight = document.createElement('img');
arrowRight.className = 'arr-right';
arrowRight.src = '../homework 17_ slider/static/right.png'
arrowRight.addEventListener('click', turnRightSlide);
navigationSlider.appendChild(arrowRight);

let slide = [];
    slide[0] =  '../homework 17_ slider/static/vinyl_6.jpg'
    slide[1] =  '../homework 17_ slider/static/vinyl_5.jpg'
    slide[2] =  '../homework 17_ slider/static/vinyl_4.jpg'
    slide[3] =  '../homework 17_ slider/static/vinyl_3.jpg'
    slide[4] =  '../homework 17_ slider/static/vinyl_2.jpg'
    slide[5] =  '../homework 17_ slider/static/vinyl_1.jpg'

let i=0;
let timerId;
ourPicture.src = slide [i];

console.log(i)

function sliderSircle(){

        timerId = setInterval(function(){
            if(i==slide.length-1){
            i=0
            ourPicture.src = slide[i];
            // console.log(i);
            }

        else{i = i+1;
        ourPicture.src = slide[i];
        // console.log(i);
    }
        
    },4000)
}
sliderSircle()

function turnRightSlide(){
clearTimeout(timerId);
    if(i==slide.length-1){
        // console.log(i);
        i=0;
        ourPicture.src = slide[i];
    }

    else{i=i+1;
    ourPicture.src = slide[i];
    // console.log(i)
}

}

function turnLeftSlide(){
clearTimeout(timerId);
        if(i==0){
            i = slide.length-1
            ourPicture.src = slide[i];
        }
        else{i=i-1
        ourPicture.src = slide[i];
        // console.log(i)
        }
}

function playStop(){
  if(stopPlay.bool === false){
    stopPlay.className = 'arr-play';
    stopPlay.src = '../homework 17_ slider/static/play.png';
    clearTimeout(timerId);
    stopPlay.bool = true;
    }
    else{stopPlay.className = 'arr-stop';
    stopPlay.bool = false;
    stopPlay.src = '../homework 17_ slider/static/stop.png';
    sliderSircle()}

}


