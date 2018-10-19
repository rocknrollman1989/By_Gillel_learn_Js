var number = prompt(`Данная примитивная программа поможет нам разобрать числа. 
Четное ли оно, простое ли оно, кратно '10' ли. посему, введи число дружек`,  );

    function checkNumber(){
       let evenNumber = (number%2==0?'true, число четное': 'false, число нечетное');
       let multipless = (number%10==0?'true, число кратное 10': 'false, число не кратое 10');
       let primeNember = (number<2?'true, число простое': checkPrime());
            function checkPrime(){
                var i=2; i<number; i++;
               return (number%i==0)?'true, число простое':'false, число не так просто, как думается:)'

            };

            
        alert(`${number},  ${evenNumber}; ${multipless}; ${primeNember} `);  
    };

    isNaN(number)?alert('введите число, а не буквы!'): checkNumber();


  
