
var firstNumb = prompt('введите число 1',22222 );
var secondNumb = prompt('введите число 2',1234 );

if(isNaN(firstNumb)||isNaN(secondNumb)||(firstNumb== ' ')||(secondNumb== ' ')){
    alert('ВВедите число, без букв')
}
if(firstNumb<0||secondNumb<0){
    alert('Число должно быть положительным');
}

    else  sumArray();
//приведение к корректному числу - ответу
function finalSum(arrSum){
    for(var i=1; i<arrSum.length; i++){
        if(arrSum[i]>9){
            arrSum[i-1]=arrSum[i-1]+1;
            arrSum[i]=arrSum[i]-10;
            
        }
        // console.log(arrSum);
    }
    alert(arrSum.join('') )
    console.log(arrSum);
}

//сумма >1 массив
function sumFirst(arrFirst, arrSec){
    let arrSum = [];
    for(var i=0; i<arrFirst.length; i++){
            arrSum[arrFirst.length-1-i] =(+arrFirst[arrFirst.length-1-i]||+'0')+((+arrSec[arrSec.length-1-i])||+'0'); 
    } 
    // console.log(arrSum);
    finalSum(arrSum)
}
//сумма >2 массив
function sumSec(arrFirst, arrSec){
    let arrSum = [];
    for(var i=0; i<arrSec.length; i++){
            arrSum[arrSec.length-1-i] = (+arrFirst[arrFirst.length-1-i]||+'0')+((+arrSec[arrSec.length-1-i])||+'0'); 
    } 
    // console.log(arrSum);
    finalSum(arrSum)
}

function sumArray(){
    let arrFirst = firstNumb.split('') ;
    let arrSec  = secondNumb.split('');

    (arrFirst.length>=arrSec.length)? sumFirst(arrFirst, arrSec) : sumSec(arrFirst, arrSec);
    

}