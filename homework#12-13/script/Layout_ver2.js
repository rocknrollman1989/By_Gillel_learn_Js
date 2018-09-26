let realOnlineSizeScreen
let screenSizeShow = document.createElement('div');
    screenSizeShow.className = 'Size-of-screen';
    
    document.body.appendChild(screenSizeShow);

(function screenSeen(){
    let screenWidht = innerWidth ;
    let screenHeight = innerHeight;
    var realOnlineSizeScreen = `${screenWidht} x ${screenHeight}`;
    screenSizeShow.innerHTML  = realOnlineSizeScreen;
   
    }());

function changeScreen(){
    let screenWidht = innerWidth ;
    let screenHeight = innerHeight;
    
    realOnlineSizeScreen = `${screenWidht} x ${screenHeight}`;
    console.log(realOnlineSizeScreen);
    screenSizeShow.innerHTML=realOnlineSizeScreen;
}

  (function timerForScreen(){
  let time;
  window.onresize = function(){
    if (time)
      clearTimeout(time);
    time = setTimeout(function(){
      changeScreen();
    },1000);
  }
  }());
  

