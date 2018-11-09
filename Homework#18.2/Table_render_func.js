
let Student = {};
Student.firstName = '';
Student.secondName = '';
Student.begin = '';
Student.end = '';
Student.info = '';
Student.remove = function(){};

let ourStudent = [];

function createInfoObject(){
    Student.firstName = 'Вася';
    Student.secondName = 'Пупкин';
    Student.begin = '1999';
    Student.end = '2002';
    Student.info = 'Ниче так';
    
    ourStudent[ourStudent.length] = Object.create(Student);
    ourStudent.length+1;

    // console.log(ourStudent[1]);
    let ourTabblePlaces = document.createElement('tr');
    ourTabbleStudentInfo.appendChild(ourTabblePlaces);

        let ourPositionStudent = document.createElement('td');
        ourPositionStudent.textContent = ourStudent.length;
        ourTabblePlaces.appendChild(ourPositionStudent);

        let ourNameOFStudent = document.createElement('td');
        ourNameOFStudent.textContent =  Student.firstName
        ourTabblePlaces.appendChild(ourNameOFStudent);

        let ourSecondNameOfStudent = document.createElement('td');
        ourSecondNameOfStudent.textContent = Student.secondName
        ourTabblePlaces.appendChild(ourSecondNameOfStudent);

        let ourBegginOfStudent = document.createElement('td');
        ourBegginOfStudent.textContent = Student.begin
        ourTabblePlaces.appendChild(ourBegginOfStudent);

        let ourEndOfStudent = document.createElement('td');
        ourEndOfStudent.textContent = Student.end
        ourTabblePlaces.appendChild(ourEndOfStudent);

        let ourSpecialInfoStudent = document.createElement('td');
        ourSpecialInfoStudent.textContent = Student.info
        ourTabblePlaces.appendChild(ourSpecialInfoStudent);

}
createInfoObject();

console.log(ourStudent)

createInfoObject()
createInfoObject()
console.log(ourStudent)