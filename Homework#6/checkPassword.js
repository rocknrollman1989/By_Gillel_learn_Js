alert(`Привет, дорогой друг. Давай с тобой создадим пароль.
он должен быть не более 20-ти символов. Больше на мою перфокарту не залезет,да и вряд ли твой мозг запомнит, ты ж не дельфин.:) .
 Но учти, что он должен содержать как буквы, так и цифры. И быть не короче 6 символов. И без этих ваших ',', '.', '!', ';'. И чтоб без пробелов! 
Ты же не хочешь, что бы его сломал любой дядя ПУ. Поехали! `);

let yourPoorMind = prompt('Введите пароль, ну пожалуйста!', 'someOne2guy');

function checkLenghtPass(){

        (yourPoorMind==='')?
        alert('Fantasy not detected! Alert'):

        (yourPoorMind.length<6)?
        alert('Не, ну мы же вроде договорились... меньше 6 символов!'):

        (yourPoorMind.length>20)?
        alert('Не, ну мы же вроде договорились... чертовски больше 20 символов!'):chekANumber()
};       
    function chekANumber() {
    let ourChekElements = [];
    ourChekElements =  yourPoorMind.split('');
    
    
        for(var i=0; i<ourChekElements.length; i++){
            if(isNaN(ourChekElements[i])==false){
               return checkSumbol(ourChekElements);
    
                }
            }
    return alert('Net Chisel!');
    }


function checkSumbol(ourChekElements){
    let sumbolDefeat = [' ' , '`','~','.',', ', '/','|','\\','!','#','$','&'];

        for(var i=0; i<ourChekElements.length; i++){
            for(var j=0; j<sumbolDefeat.length; j++){
                if(ourChekElements[i]==sumbolDefeat[j]){
                   return alert('Кажется,есть лишний символ');
                }
            }
        }
       return alert('Отличный пароль, Вы молодец!');
}


checkLenghtPass();



