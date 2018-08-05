
function runGame(){
    let interestingArr;
    let firstPartOfArr;
    let secondPartOfArr;
    let wordForTest = document.getElementById('word').value;
        (wordForTest.length<=10)? 
        (document.getElementById('resault').innerHTML = wordForTest.split('')):
        interestingArr = wordForTest.split('');
    firstPartOfArr = interestingArr.slice(0,7);
    secondPartOfArr = interestingArr.slice(10);
    document.getElementById('resault').innerHTML = ` ${firstPartOfArr} И вторая часть.... тадам! ${secondPartOfArr}`
};