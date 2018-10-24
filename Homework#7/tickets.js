alert(`Время поиграть! представим себе, что вы стоите у кассы и хотите попасть в театр. 
У вас в кошельке купюры номиналом 100, 50 и 25(!) грн. Ну представьте)). Билет стоит 25 грн.
Задача - что бы кассир поднял свой зад и пошел менять деньги, из-за отсутсвия возможности дать сдачу.`);
let ourStartTicet = 0;
let cashbox = {
    tickets: prompt('Сколько билетов в кассе?', '2'),
    chetvertak: prompt('сколько купюр в 25 грн?','1'),
    poltinnik: prompt('Сколько купюр в 50 грн?', '1'),
    stolnik: prompt('сколько купюр в 100 грн?', '1'),
    
        checkOurCache: function(){

            if(ourStartTicet==0){
                ourStartTicet = this.tickets;
                
            }

            if(this.tickets == 0){
                alert(`Все билеты рапроданы, вы проиграли! театр заработал ${ourStartTicet*25} грн`);
                return;
            } 
            
            if(cashbox.poltinnik == 0 || cashbox.chetvertak == 0){
                return finalBattle()
            }

        else setYourMoney();
        }
}

function finalBattle(){

    let goToMoney = confirm('У меня закончились деньги. Не могу дать сдачи. Будет без сдачи?');
            if(goToMoney==false){
                alert(" Вы победили злобную кассиршу! Поздравляем!");
                return  ;
            };

        alert(" Вы проиграли злобной кассирше! Идите менять деньги!");
        return ; 
    
};

// console.log(cashbox);
function setYourMoney(){
let yourMoney = prompt('Вы даете деньги за билет. Какая купюра: 100, 50 или 25?', "100");
    if(yourMoney !=25 && yourMoney !=50 && yourMoney !=100){
        alert('Такой купюры в нашем государстве еще не напечатали:(');
        return setYourMoney();
    }
// console.log(yourMoney);
letPlayGame(yourMoney);
}

function letPlayGame(yourMoney){
    if(yourMoney==25){
        cashbox.tickets--;
        cashbox.chetvertak++
        alert('Вот билет, спасибо, что без сдачи');
        cashbox.checkOurCache();
    }
    if(yourMoney==50){
        cashbox.chetvertak == 0? finalBattle(): null;

        cashbox.tickets--;
        cashbox.chetvertak--;
        cashbox.poltinnik++;
        alert('Вот билет, и 25 грн');
        cashbox.checkOurCache();
    }
    if(yourMoney==100){
        alert('A меньше нет? - ворчит кассирша');
        cashbox.poltinnik == 0? finalBattle(): null;
        cashbox.chetvertak == 0? finalBattle(): null;
        cashbox.tickets--;
        cashbox.chetvertak--;
        cashbox.poltinnik--;
        cashbox.stolnik++;
        alert('Вот билет, и 75 грн');
        cashbox.checkOurCache();
    }

console.log(cashbox)
}
cashbox.checkOurCache();