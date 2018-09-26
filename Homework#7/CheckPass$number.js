alert('Привет админ. Добро пожаловать!');
let origPass = prompt('Введи пароль, друг!, от 6 до 20 символов', 'mzma407');

(function checkOrigPass(){
    let regSymb = /^0-9-A-Z-a-z-А-Я-а-я]+$/;

    (origPass ==='')?
    alert('Заполните пароль!'):

    (origPass.length<6)?
    alert('Меньше 6 символов!'):

    (origPass.length>20)?
    alert('Больше 20 символов!'):

    regSymb.test(origPass)?
    alert('Допустимы буквы и цифры!'):

    compPass();
    

}());

    function compPass(){
       let secPass =  prompt('Подтвердите пароль!', 'mzma407' );
       (origPass === secPass)?checkNumb():alert('Пароли не совпадают!, еще раз попробуйте');
    }

    

    function checkNumb(){
        let number = prompt(`Данная примитивная программа поможет нам разобрать числа. 
        Четное ли оно, простое ли оно, кратно '10' ли. посему, введи число дружек`,  );
        if(isNaN(number)){alert('введите число, а не буквы!')};
       let evenNumber = (number%2==0?'true, число четное': 'false, число нечетное');
       let multipless = (number%10==0?'true, число кратное 10': 'false, число не кратое 10');
       let primeNember = (number<2?'true, число простое': checkPrime());
            function checkPrime(){
                var i=2; i<number; i++;
               return (number%i==0)?'true, число простое':'false, число не так просто, как думается:)'

            };

            
        alert(`${number},  ${evenNumber}; ${multipless}; ${primeNember} `);  
    };

    


  