var firstNumb = prompt('введите число 1', );
var secondNumb = prompt('введите число 2', );

if(isNaN(firstNumb)||isNaN(secondNumb)||(firstNumb== '')||(secondNumb== '')){
    alert('ВВедите число, без букв')
}
if(firstNumb<0||secondNumb<0){
    alert('Число должно быть положительным');
}

else{
let minLength;
let arrSum = [];
let arrFirst = firstNumb.split('') ;
let arrSec  = secondNumb.split('');

    if (firstNumb.length>secondNumb.length){
         minLength = firstNumb.length-secondNumb.length;
    }
    else{
         minLength = secondNumb.length-firstNumb.length  ;
    }



alert(minLength);
// alert(arrFirst);
// alert(arrSec);
}