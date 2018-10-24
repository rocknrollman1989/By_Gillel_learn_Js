let ourMathOperation = {
    number: 10,
    summ: function(){
        this.number = this.number + 10;
        return ourMathOperation
    },
    summ2: function(){
        this.number = this.number + 10;
        return ourMathOperation
    },
    minus: function(){
        this.number = this.number -40;
        return ourMathOperation
    },
    mult: function(){
        this.number = this.number*50;
        return ourMathOperation
    },
    res: function(){
        return console.log(this.number);
    }
}
ourMathOperation.summ().summ2().minus().mult().res();


for(i=0;i<10;i++){
    setTimeout(function(){
      console.log(10-(--i));
    }, 10)
  }

  for(i=0;i<=10;i++){
    (function(i){
       setTimeout(function(){
      console.log(i);
      }, 10)
    })(i);
  }