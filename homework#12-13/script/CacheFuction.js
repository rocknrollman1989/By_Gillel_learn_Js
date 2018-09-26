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

        
        var cachedResault;
        var numvar1,numvar2;
        
         function chek(){
           
                        let complexFunction = function(num1, num2){
                            numvar1 = num1;
                            numvar2 = num2;
                
                            cachedResault = +numvar1 + +numvar2;
                            CacheInsert.innerHTML = `занес в кэш ${cachedResault}`;
                        }


            let num1 = document.getElementById("One").value;
            let num2 = document.getElementById("Two").value;

            num1===numvar1&num2===numvar2?
            CacheInsert.innerHTML = `взял из кэша ${cachedResault}`:
            complexFunction(num1, num2);
        
           
            
            // complexFunction(numvar1, numvar2);
        }
        
        
        
        