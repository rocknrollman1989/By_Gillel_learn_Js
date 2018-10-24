
function fibonacci(n){
let searchNumber = [];
searchNumber[0] = 0;
searchNumber[1] = 1;
    for(i=2; i<=n; i++){
        searchNumber[i] = (+searchNumber[i-1]+searchNumber[i-2]);
    }
return console.log(`Наше искомое число ${searchNumber[n]}`);
}
fibonacci(40);


function multipply(){
    let ressult;
        for(i=0; i<arguments.length; i++){
        ressult *= arguments[i];
}
    return console.log(ressult);
}

function ourInterestingRessult(someFunc){
    return someFunc.apply(this, [].slice.call(arguments));
}
ourInterestingRessult(multipply, [1, 2, 3]);

// function mul() {
//     var resultMul = 1;
//     for (var i = 0; i < arguments.length; i++) {
//     resultMul *= arguments[i];
//     }
//     console.log(resultMul);
//   }  

// function applyAll(func) {
//     return func.apply(this, [].slice.call(arguments, 1));
//   }

// applyAll(sum, 1, 2, 3, 4, 5); 
// applyAll(mul, 2, 3, 4); 