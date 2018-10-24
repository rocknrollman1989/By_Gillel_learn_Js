let dateBeginSearch = '10.08.18';
let dateEndSearch = `12.10.18`;
dateBeginSearch  = dateBeginSearch.split('.').join('');
dateEndSearch = dateEndSearch.split('.').join('');

let dateSearchOne = '01.08.18';
let dateTwoSearch = `31.10.18`;
dateSearchOne  = dateSearchOne.split('.').join('');
dateTwoSearch = dateTwoSearch.split('.').join('');

let universityStudents=[];

let student1 = {
  firstName: 'Ilya',
  secondName: 'Volkov',
  dateBegin: 240818,
  dateEnd: 201018,
  dataSearch: function(){
      return this;
  }
}

let student2 = {
  firstName: 'vasia',
  secondName: 'vasevich',
  dateBegin: 250818,
  dateEnd: 151018,
  dataSearch: function(){
      return this;
  }
}

let student3 = {
  firstName: 'Valera',
  secondName: 'Bunchuk',
  dateBegin: 220818,
  dateEnd: 091018,
  dataSearch: function(){
      return this;
  }
}
let student4 = {
  firstName: 'Ivan',
  secondName: 'Ivanovich',
  dateBegin: 210818,
  dateEnd: 111018,
  dataSearch: function(){
      return this;
  }
}
let student5 = {
  firstName: 'Bredd',
  secondName: 'Pitt',
  dateBegin: 300818,
  dateEnd: 301018,
  dataSearch: function(){
      return this;
  }
}
let student6 = {
  firstName: 'Uncle',
  secondName: 'Polurimus',
  dateBegin: 290818,
  dateEnd: 111018,
  dataSearch: function(){
      return this;
  }
}
universityStudents[0] = student1;
universityStudents[1] = student2;
universityStudents[2] = student3;
universityStudents[3] = student4;
universityStudents[4] = student5;
universityStudents[5] = student6;

function checkTheStudents(search1, search2){
  for(i=0;i<universityStudents.length;i++){
    if(search1<=universityStudents[i].dateBegin &&  search2>=universityStudents[i].dateEnd){
      console.log(universityStudents[i].dataSearch())
    }
  }
}

function checkTheStudentsMore(search1, search2){

// console.log(maxDateBegin)
  let ourMaxStudent = [];
  for(i=0;i<universityStudents.length;i++){
    if(search1<=universityStudents[i].dateBegin &&  search2>=universityStudents[i].dateEnd){
      ourMaxStudent [i] = universityStudents[i];
    }
    // console.log(ourMaxStudent[i]);
  }
  let maxDateBegin, minDateEnd;
  maxDateBegin = ourMaxStudent[0].dateBegin;
  minDateEnd = ourMaxStudent[0].dateEnd;
    
    for(i=0;i<ourMaxStudent.length;i++){
      if(maxDateBegin<ourMaxStudent[i].dateBegin){
        maxDateBegin = ourMaxStudent[i].dateBegin;
      }
      // console.log(maxDateBegin);
    }
    for(i=0;i<ourMaxStudent.length;i++){
      if(minDateEnd>ourMaxStudent[i].dateEnd){
        minDateEnd = ourMaxStudent[i].dateEnd;
      }
      // console.log(maxDateBegin);
    }
    let students = 0;
    for(i=0;i<universityStudents.length;i++){
      
      if(maxDateBegin>=universityStudents[i].dateBegin && minDateEnd<=universityStudents[i].dateEnd){
         students++;
      }
    
    }
// console.log(maxDateBegin, minDateEnd);
console.log(`у нас училось ${students} человек`)
}
checkTheStudents(dateBeginSearch, dateEndSearch);
checkTheStudentsMore(dateSearchOne, dateTwoSearch);


// console.log(dateEndSearch);
// console.log(universityStudents[1].dataSearch());