 

var priceBuy, sellOnlyToday, result, orderFruit;
var dnoComment;

function multiply(){
    orderFruit = document.getElementById('orderFruit').value;
        
    priceBuy = document.getElementById('priceBuy').value;
    priceBuy = parseInt (priceBuy, 10);
    sellOnlyToday = document.getElementById ('sellOnlyToday').value;
    sellOnlyToday =  parseInt (sellOnlyToday, 10);
    result = priceBuy+(priceBuy*(sellOnlyToday/100));
    dnoComment = (result<=priceBuy)? '\n Благотворительность? Жить за что будешь...': '\n Заработаешь хоть на пиво...' ;
    document.getElementById('out').innerHTML = orderFruit +' ' + result + ' гривен' + dnoComment;
}