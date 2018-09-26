
let blockWithTableDecor  = document.createElement('div');
blockWithTableDecor.className = 'Decor-Of-Table';
document.body.appendChild(blockWithTableDecor);

let myTabbleForm  =document.createElement('form');
myTabbleForm.name = 'createTabble';
blockWithTableDecor.appendChild(myTabbleForm);

    let inputValueOne = document.createElement('input');
    inputValueOne.className = "Input-value";
    inputValueOne.id = "valOne";
    inputValueOne.type = "text";
    inputValueOne.placeholder = "введите кол-во горизонтальных ячеек плиз";
    myTabbleForm.appendChild(inputValueOne);

    let inputValueTwo = document.createElement('input');
    inputValueTwo.className = "Input-value";
    inputValueTwo.id = "valTwo";
    inputValueTwo.type = "text";
    inputValueTwo.placeholder = "введите кол-во вертикальных ячеек плиз";
    myTabbleForm.appendChild(inputValueTwo);
   
    let inputValueSub = document.createElement('input');
    inputValueSub.className = "Input-Sub";
    inputValueSub.value = "Давай Генерь!";
    inputValueSub.type = "button";
    inputValueSub.onclick = createTabble;
    myTabbleForm.appendChild(inputValueSub);

    let allertMessage =  document.createElement('span');
        allertMessage.className = "Alert-alert";

let tableInsert = document.createElement('table');
tableInsert.className = "tabble-decoration";
blockWithTableDecor.appendChild(tableInsert);

    // let rowOfTheTable = document.createElement('tr');
    // // tableInsert.appendChild(rowOfTheTable);

    // let columnOfTheRow = document.createElement('td');
    // // rowOfTheTable.appendChild(columnOfTheRow);



function createTabble(){
tableInsert.innerHTML = '';
//    console.log("Запустилось?");
let numbRow = document.getElementById("valOne").value;
let numbColl = document.getElementById("valTwo").value;
allertMessage.innerHTML = '';


        if(isNaN(numbRow)||isNaN(numbColl)) {

            allertMessage.innerHTML = 'Введите числовое значение!'
            myTabbleForm.appendChild(allertMessage);
        //    alert('не так');
        document.getElementById("valOne").value = "";
        document.getElementById("valTwo").value = "";
        }

// console.log(numbRow);
// console.log(numbColl);

for(var i=0;i<numbRow;i++){
    // console.log(numbRow);
    
    let rowOfTheTable = document.createElement('tr');
    tableInsert.appendChild(rowOfTheTable);
        for(var j=0;j<numbColl;j++){
    //     console.log(numbColl)
    let columnOfTheRow = document.createElement('td');
    rowOfTheTable.appendChild(columnOfTheRow);
    columnOfTheRow.rowNum = i+1;
    columnOfTheRow.colNum = j+1;

    // console.log(columnOfTheRow.rowNum, columnOfTheRow.colNum);
    columnOfTheRow.onclick = createNumberOfRow
    function createNumberOfRow(){
        let numberNumber;
        numberNumber = document.createTextNode(`Номер строки ${columnOfTheRow.rowNum}; номер рядка ${columnOfTheRow.colNum}`);
        columnOfTheRow.appendChild(numberNumber);
            }
        }
    }
}


