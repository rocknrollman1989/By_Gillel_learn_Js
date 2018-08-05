
var PriceOfTheProduct;

function makingAPrice(){
    let nameOfTheProduct = document.getElementById ('orderFruit').value;
        if(nameOfTheProduct==""){
            alert('Что продавать будем?')
            nameOfTheProduct = "Нечего продать, магаз закрылся на радость всем)"

        };
        
    let priceBuy = document.getElementById('priceBuy').value;
        if(priceBuy == ""){
            alert('Где - то потерялась цена...')
            PriceOfTheProduct = "Что - то пошло не так"
        };

        if(isNaN(priceBuy)){
            PriceOfTheProduct = "Что - то пошло не так"
            alert('Где - то потерялась цена... Зачем буквы вводить? ')
            }; 
       

    let sellOnlyToday = document.getElementById('sellOnlyToday').value;
        if(isNaN(sellOnlyToday)){
            sellOnlyToday = 0;
        }
        else if(sellOnlyToday==0){
            sellOnlyToday = 0;
        };
        
    PriceOfTheProduct = (priceBuy - (priceBuy*(sellOnlyToday/100)));
        

    PriceOfTheProduct = PriceOfTheProduct.toFixed(2);

    document.getElementById('out').innerHTML = `${nameOfTheProduct}`;
    document.getElementById('outPrice').innerHTML = `${PriceOfTheProduct}`;
    }

    /////// second task

    