let tryToLearnCache  = document.createElement('div');
tryToLearnCache.className = 'Decor-Of-Cache';
document.body.appendChild(tryToLearnCache);

let  tryToLearnCacheInfo = document.createElement('div');
// tryToLearnCacheInfo = document.createTextNode('Опробуем фунцию кэширования. Введите числовые значения.');
tryToLearnCacheInfo.className = 'createCache';
tryToLearnCache.appendChild(tryToLearnCacheInfo);

    let inputValueOneCache = document.createElement('input');
    inputValueOneCache.className = "Input-value";
    inputValueOneCache.id = "One";
    inputValueOneCache.type = "text";
    inputValueOneCache.placeholder = "введите данные для кэша 1";
    tryToLearnCacheInfo.appendChild(inputValueOneCache);

    let inputValueTwoCache = document.createElement('input');
    inputValueTwoCache.className = "Input-value";
    inputValueTwoCache.id = "Two";
    inputValueTwoCache.type = "text";
    inputValueTwoCache.placeholder = "введите данные для кэша 2";
    tryToLearnCacheInfo.appendChild(inputValueTwoCache);
   
    let inputValueCache = document.createElement('input');
    inputValueCache.className = "Input-Sub";
    inputValueCache.value = "Считай";
    inputValueCache.type = "button";
    inputValueCache.onclick = chek;
    tryToLearnCacheInfo.appendChild(inputValueCache);

    let allertMessageCache =  document.createElement('span');
        allertMessageCache.className = "Alert-alert";

    
        let CacheInsert = document.createElement('p');
        CacheInsert.className = "CacheOut";
        tryToLearnCache.appendChild(CacheInsert);

        
    function chek(){
        let firstValue = document.getElementById("One").value;
        let secondValue = document.getElementById("Two").value;
        

       let complexFunc = function(firstValue, secondValue){
        return firstValue+secondValue;
             
       }

       function cash(func){

           let ourObj = {
            firstMemory: firstValue,
            secondMemory: secondValue,
            checkCash: function(){
                if(firstValue!=this.firstMemory||this.secondMemory&&secondValue!=this.firstMemory||this.secondMemory){
                    this.firstMemory==firstValue;
                    this.secondMemory==secondValue;
                    console.log('111')
                    
                }
            }
           };

           ourObj.checkCash();
        //    ourObj.ressault = ressault;
            // ourObj.firstValue = firstValue;
            // ourObj.secondValue = secondValue;
            // ourObj.ressault = func;

        //    console.log(func)
          
            return func ;
       }

       let cacheFunction = cash(complexFunc);
    //    console.log(cacheFunction);
    //    CacheInsert.innerHTML = 

       console.log(cacheFunction(firstValue, secondValue))
        
    }