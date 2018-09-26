

var  result;

function multiply(){
   let orderFruit = document.getElementById('orderFruit').value;
        
   let priceBuy = document.getElementById('priceBuy').value;
    priceBuy = parseFloat (priceBuy, 10);
   let sellOnlyToday = document.getElementById ('sellOnlyToday').value;
    sellOnlyToday =  parseFloat (sellOnlyToday, 10);
        if(isNaN(sellOnlyToday)){
        result = "Что - то пошло не так"
        alert('ВВедите число! в пункте "Сколько нацениваем?"')
        document.getElementById('out').innerHTML = result;
        }
        if(isNaN(priceBuy)){
            result = "Что - то пошло не так"
            alert('ВВедите число! в пункте "Почем взял?"')
            document.getElementById('out').innerHTML = result;
        }
        else {
            result = priceBuy+(priceBuy*(sellOnlyToday/100));
            result = result.toFixed(2)
            let  dnoComment = (result<=priceBuy)? ' Благотворительность? Жить за что будешь...': ' Заработаешь хоть на пиво...' ;
            let wantToKnow= (`${orderFruit} 
             ${result} гривен ${dnoComment}`);
          document.getElementById('out').innerHTML = wantToKnow;
        };
    }
    
    
   
}