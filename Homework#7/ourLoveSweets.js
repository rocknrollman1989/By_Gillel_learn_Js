alert(`Добрый день, странник. В этой проге мы попробуем расчитать колличество пироженок, которые
мы можем приготовить исходя из колличества ингридиентов. А пироженки наши любимые... 'картошка'`);

alert(`Вот рецепт, бро: печенье (песочное) – 300 г, молоко – 200 мл, сахар – 125 г,
сливочное масло – 80 г, какао – 30 гр., орехи (грецкие) – по желанию,
сахарная пудра или кокосовая стружка для украшения.`);

let ourIngridientBiscuit = parseInt(prompt(`Введите кол-во печенек:), в граммах плиз`, '300 грамм'));
let ourIngridientMilk = parseInt(prompt(`Введите кол-во молока, в мл плиз`, '200 грамм'));
let ourIngridientSugar = parseInt(prompt(`Введите кол-во сахара, в гр плиз`, '125 грамм'));
let ourIngridientButter = parseInt(prompt(`Введите кол-во масла, в гр плиз`, '80 грамм'));
let ourIngridientCocoa = parseInt(prompt(`Введите кол-во какао, в граммах`, '30 грам'));

    if(isNaN(ourIngridientBiscuit)||isNaN(ourIngridientMilk)||isNaN(ourIngridientSugar)||isNaN(ourIngridientButter)
    ||isNaN(ourIngridientCocoa) === true){
        alert(`Кажется вы ввели данные не числовые`)
    };
// обьект с рецептом
let ourNeededIngridients={
    firstIngridientBiscuit: 300,
    secondIngridientMilk: 200,
    thirdIngridientSugar: 125,
    fourthIngridientButter: 80,
    fifthIngridientCocoa: 3,
                            };

let ourIngridientsNedeed = {};
// с-во обьекта с ф-цией вывода результата. Вычесление по меньшему кол-ву
    ourIngridientsNedeed.cook = function(){
    let ourPortion = Math.min(this.ourIngridientBiscuit, this.ourIngridientMilk, this.ourIngridientSugar, this.ourIngridientButter, this.ourIngridientCocoa);
    return alert(`Вы можете приготовить любимой картошечки ${parseInt(ourPortion)} порций`)
    }
// проверка на наличие
function letsCook(){
    ourNeededIngridients.firstIngridientBiscuit<=ourIngridientBiscuit?
    ourIngridientsNedeed.ourIngridientBiscuit=ourIngridientBiscuit/ourNeededIngridients.firstIngridientBiscuit:
    alert('Боюсь, нам не хватит печенек даже на одну порцию!');

    ourNeededIngridients.secondIngridientMilk<=ourIngridientMilk?
    ourIngridientsNedeed.ourIngridientMilk=ourIngridientMilk/ourNeededIngridients.secondIngridientMilk:
     alert('Боюсь, нам не хватит молока даже на одну порцию!');

    ourNeededIngridients.thirdIngridientSugar<=ourIngridientSugar?
    ourIngridientsNedeed.ourIngridientSugar=ourIngridientSugar/ourNeededIngridients.thirdIngridientSugar:
    alert('Боюсь, нам не хватит сахара даже на одну порцию!');

    ourNeededIngridients.fourthIngridientButter<=ourIngridientButter?
    ourIngridientsNedeed.ourIngridientButter=ourIngridientButter/ourNeededIngridients.fourthIngridientButter:
    alert('Боюсь, нам не хватит масла даже на одну порцию!');

    ourNeededIngridients.fifthIngridientCocoa<=ourIngridientCocoa?
    ourIngridientsNedeed.ourIngridientCocoa=ourIngridientCocoa/ourNeededIngridients.fifthIngridientCocoa:
    alert('Боюсь, нам не хватит какао даже на одну порцию!');


    console.log(ourNeededIngridients);
    console.log(ourIngridientsNedeed);
    ourIngridientsNedeed.cook();
}


letsCook();
