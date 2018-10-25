let firstDiv = document.createElement('div')
firstDiv.textContent = 'my Div';
document.body.appendChild(firstDiv);

let secondDiv = document.createElement('div')
secondDiv.textContent = 'my Div';
document.body.appendChild(secondDiv);

let thirdDiv = document.createElement('div')
thirdDiv.textContent = 'my Div';
document.body.appendChild(thirdDiv);

let unList = document.createElement('ul')
unList.style.textDecoration = 'none'
thirdDiv.appendChild(unList);

    let firstLi = document.createElement('li')
    firstLi.textContent = 'red'
    firstLi.style.backgroundColor = 'red'
    unList.appendChild(firstLi);

    let secondLi = document.createElement('li')
    secondLi.textContent = 'yellow'
    secondLi.style.backgroundColor = 'yellow'
    unList.appendChild(secondLi);

    let ThirdLi = document.createElement('li')
    ThirdLi.textContent = 'grey'
    ThirdLi.style.backgroundColor = 'grey'
    unList.appendChild(ThirdLi);

    let fourhtLi = document.createElement('li')
    fourhtLi.textContent = 'green'
    fourhtLi.style.backgroundColor = 'green'
    unList.appendChild(fourhtLi);


let lenghtOurChild = document.body.childNodes.length
console.log(lenghtOurChild);

    for(i=0; i<lenghtOurChild;i++){
        console.log(document.body.childNodes[i]);
    }

    /* Вывело 5 элементов для Body. Ибо Ul является вложенным в Div. Первый элемент #text# конечно нежданчик, но 
    вполне обьясним: у Document есть "дети" в данном случае это Docktype. чтобы добраться до каждого вложенного нужно 
    еще пару циклов для родителей. В принципе, так можно добратся до самого Document  */