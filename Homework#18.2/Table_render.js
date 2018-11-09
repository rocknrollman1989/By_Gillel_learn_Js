let conteinerTabble = document.createElement('div');
conteinerTabble.className = 'Container-Wrapper-For-Tabble';
document.body.appendChild(conteinerTabble);

    let infoSaveBlock = document.createElement('div');
    infoSaveBlock.className = 'Container-Wrapper-input';
    conteinerTabble.appendChild(infoSaveBlock);

        let infoTextInformation = document.createElement('p');
        infoTextInformation.textContent = 'Введите данные студентика'
        infoSaveBlock.appendChild(infoTextInformation);

        let ourFormForStudent = document.createElement('form');
        infoSaveBlock.appendChild(ourFormForStudent);

        let attention = document.createElement('p');
        attention.innerHTML = ''
        infoSaveBlock.appendChild(attention);

            let inputNameStudennt = document.createElement('input');
            inputNameStudennt.type = 'text';
            inputNameStudennt.id = 'nameOfStudent';
            // inputNameStudennt.value = 'хрен';
            inputNameStudennt.oninput  = function(){document.getElementById('nameOfStudent').value.length<2?
            attention.innerHTML = 'Имя меньше  2-х символов. Этого не может быть!': checkInfo() }
            inputNameStudennt.placeholder = 'введите имя студента';
            ourFormForStudent.appendChild(inputNameStudennt);

            let inputSecondNameStudennt = document.createElement('input');
            inputSecondNameStudennt.type = 'text';
            // inputSecondNameStudennt.value = 'с горы';
            inputSecondNameStudennt.oninput  = function(){document.getElementById('SecondName').value.length<2?
            attention.innerHTML = 'Имя меньше  2-х символов. Этого не может быть!': checkInfo() };
            inputSecondNameStudennt.id = 'SecondName';
            inputSecondNameStudennt.placeholder = 'ВВедите фамилию'
            ourFormForStudent.appendChild(inputSecondNameStudennt);

            
            let inputYearOfBegginingStudennt = document.createElement('input');
            inputYearOfBegginingStudennt.type = 'text';
            inputYearOfBegginingStudennt.id = 'YearStart';
            // inputYearOfBegginingStudennt.value = '1900'
            inputYearOfBegginingStudennt.oninput  = function(){document.getElementById('YearStart').value.length<4?
            attention.innerHTML = 'Серьезно? Год должен быть полным, 4-х цифренным': checkInfo() };
            inputYearOfBegginingStudennt.placeholder = 'Когда поступил'
            ourFormForStudent.appendChild(inputYearOfBegginingStudennt);

            
            let inputYearOfEndingStudennt = document.createElement('input');
            inputYearOfEndingStudennt.type = 'text';
            inputYearOfEndingStudennt.id = 'YearEnd';
            // inputYearOfEndingStudennt.value = '1990'
            inputYearOfEndingStudennt.oninput  = function(){document.getElementById('YearEnd').value.length<4?
            attention.innerHTML = 'Серьезно? Год должен быть полным, 4-х цифренным': checkInfo() };
            inputYearOfEndingStudennt.placeholder = 'Когда закончил'
            ourFormForStudent.appendChild(inputYearOfEndingStudennt);

            
            let inputMoreInfoStudennt = document.createElement('input');
            inputMoreInfoStudennt.type = 'text';
            inputMoreInfoStudennt.id = 'Info';
            // inputMoreInfoStudennt.value = 'да ни за что'
            inputMoreInfoStudennt.placeholder = 'за что отличился, доп инфо'
            ourFormForStudent.appendChild(inputMoreInfoStudennt);

            let inputSaveInfoStudennt = document.createElement('input');
            inputSaveInfoStudennt.type = 'button';
            inputSaveInfoStudennt.id = 'saveInfo';
            inputSaveInfoStudennt.value = 'SAVE';
            inputSaveInfoStudennt.style.color = 'red'
            // inputSaveInfoStudennt.addEventListener('click', null)
            // inputSaveInfoStudennt.i = './icons/favicon_delete.ico'
            ourFormForStudent.appendChild(inputSaveInfoStudennt);


let ourTabbleStudentInfo = document.createElement('table');
ourTabbleStudentInfo.className = 'tabble'
conteinerTabble.appendChild(ourTabbleStudentInfo);

    let ourTabblePlaces = document.createElement('tr');
    ourTabbleStudentInfo.appendChild(ourTabblePlaces);

        // let ourPositionStudent = document.createElement('th');
        // ourPositionStudent.textContent = '№ студента'
        // ourTabblePlaces.appendChild(ourPositionStudent);

        let ourNameOFStudent = document.createElement('th');
        ourNameOFStudent.textContent = 'Имя студента'
        ourTabblePlaces.appendChild(ourNameOFStudent);

        let ourSecondNameOfStudent = document.createElement('th');
        ourSecondNameOfStudent.textContent = 'Фамилия студента'
        ourTabblePlaces.appendChild(ourSecondNameOfStudent);

        let ourBegginOfStudent = document.createElement('th');
        ourBegginOfStudent.textContent = 'Год поступления студента'
        ourTabblePlaces.appendChild(ourBegginOfStudent);

        let ourEndOfStudent = document.createElement('th');
        ourEndOfStudent.textContent = 'Год выпуска студента'
        ourTabblePlaces.appendChild(ourEndOfStudent);

        let ourSpecialInfoStudent = document.createElement('th');
        ourSpecialInfoStudent.textContent = 'Доп Инфо студента'
        ourTabblePlaces.appendChild(ourSpecialInfoStudent);

    //tr,th/td
// обьект с человекостудентами
let Student = {
    
    ourStudent: function(firstName, secondName, begin, end, info){
        this.firstName = firstName;
        this.secondName = secondName;
        this.begin = begin;
        this.end = end;
        this.info = info;
        return createInfoObject(this);
    },
    check: function(){
        console.log(this);
    }
};

let ourStudents = [];
let positionStudent = [];

ourStudents[0] = Object.create(Student).ourStudent('Джон', 'Сноу', '1999', '2004', 'Молодчина и король');
ourStudents[1] = Object.create(Student).ourStudent('Люк', 'Скайуокер', '2004', '2009', 'Неудачник, просравший руку');
ourStudents[2] = Object.create(Student).ourStudent('Питер', 'Саган', '2000', '2005', 'Красавчик, чемпион велогонок');


function checkInfo(){

    // console.log('!!!');
    attention.innerHTML = '';

    if (document.getElementById('nameOfStudent').value.length>=2 &&
    document.getElementById('SecondName').value.length>=2 && 
    document.getElementById('YearStart').value.length>=4 &&
    document.getElementById('YearEnd').value.length>=4){
            // console.log('Wrong');
            inputSaveInfoStudennt.style.color = 'black';
            inputSaveInfoStudennt.addEventListener('click', readInfoAboutStudent);
            }

   else return
   
}


function readInfoAboutStudent(){
    
    Student.firstName = document.getElementById('nameOfStudent').value;
    Student.secondName = document.getElementById('SecondName').value;
    Student.begin = document.getElementById('YearStart').value;
    Student.end = document.getElementById('YearEnd').value;
    Student.info = document.getElementById('Info').value;

    ourStudents[ourStudents.length] = Object.create(Student).ourStudent(Student.firstName, Student.secondName, Student.begin, Student.end, Student.info);;

    document.getElementById('nameOfStudent').value = '';
    document.getElementById('SecondName').value = '';
    document.getElementById('YearStart').value = '';
    document.getElementById('YearEnd').value = '';
    document.getElementById('Info').value = '';

    return 
}

function createInfoObject(Student){
   

    // ourStudentS.length+1;
    // массив для исчисления
    // positionStudent[ourStudents.length] = ourStudents.length

    let ourTabblePlaces = document.createElement('tr');
    // ourTabblePlaces.id = ourStudents.length;
    ourTabbleStudentInfo.appendChild(ourTabblePlaces);

        // let ourPositionStudent = document.createElement('td');
        // ourPositionStudent.innerHTML = positionStudent[ourStudents.length];
        // ourTabblePlaces.appendChild(ourPositionStudent);

        let ourNameOFStudent = document.createElement('td');
        ourNameOFStudent.innerHTML =  Student.firstName
        ourTabblePlaces.appendChild(ourNameOFStudent);

        let ourSecondNameOfStudent = document.createElement('td');
        ourSecondNameOfStudent.innerHTML = Student.secondName
        ourTabblePlaces.appendChild(ourSecondNameOfStudent);

        let ourBegginOfStudent = document.createElement('td');
        ourBegginOfStudent.innerHTML = Student.begin
        ourTabblePlaces.appendChild(ourBegginOfStudent);

        let ourEndOfStudent = document.createElement('td');
        ourEndOfStudent.innerHTML = Student.end
        ourTabblePlaces.appendChild(ourEndOfStudent);

        let ourSpecialInfoStudent = document.createElement('td');
        ourSpecialInfoStudent.innerHTML = Student.info
        ourTabblePlaces.appendChild(ourSpecialInfoStudent);

        let deleteOurStudent = document.createElement('input');
        deleteOurStudent.type = 'button';
        deleteOurStudent.value = 'Грохнуть пацака!'
        deleteOurStudent.addEventListener('click', deleteStudent)
        ourTabblePlaces.appendChild(deleteOurStudent);

        let redactOurStudent = document.createElement('input');
        redactOurStudent.type = 'button';
        redactOurStudent.value = 'Редактировать в Чатланца'
        redactOurStudent.addEventListener('click', RedactStudent)
        ourTabblePlaces.appendChild(redactOurStudent);
      
        function deleteStudent(){
            // console.log(ourTabblePlaces);
            let remove = ourTabbleStudentInfo.removeChild(ourTabblePlaces);
            let delStudent = ourStudents.splice(document.getElementsByTagName('td'), 1);
            // console.log(ourStudent);
        }
        //Redaction student
        function RedactStudent(){
            console.log(Student);
            redactOurStudent.removeEventListener('click', RedactStudent );
            ourNameOFStudent.innerHTML = '';
            ourSecondNameOfStudent.innerHTML = '';
            ourBegginOfStudent.innerHTML = '';
            ourEndOfStudent.innerHTML = '';
            ourSpecialInfoStudent.innerHTML = '';

            let redactInputNameStudennt = document.createElement('input');
            redactInputNameStudennt.type = 'text';
            redactInputNameStudennt.id = 'nameOfStudentRed';
            redactInputNameStudennt.value = Student.firstName;
            redactInputNameStudennt.placeholder = 'введите имя студента';
            ourNameOFStudent.appendChild(redactInputNameStudennt);

            let redactInputSecondNameStudennt = document.createElement('input');
            redactInputSecondNameStudennt.type = 'text';
            redactInputSecondNameStudennt.value = Student.secondName;
            redactInputSecondNameStudennt.id = 'SecondNameRed';
            redactInputSecondNameStudennt.placeholder = 'ВВедите фамилию'
            ourSecondNameOfStudent.appendChild(redactInputSecondNameStudennt);

            let redactInputYearOfBegginingStudennt = document.createElement('input');
            redactInputYearOfBegginingStudennt.type = 'text';
            redactInputYearOfBegginingStudennt.id = 'YearStartRed';
            redactInputYearOfBegginingStudennt.value = Student.begin;
            redactInputYearOfBegginingStudennt.placeholder = 'Когда поступил'
            ourBegginOfStudent.appendChild(redactInputYearOfBegginingStudennt);

            let redactinputYearOfEndingStudennt = document.createElement('input');
            redactinputYearOfEndingStudennt.type = 'text';
            redactinputYearOfEndingStudennt.id = 'YearEndRed';
            redactinputYearOfEndingStudennt.value = Student.end;
            redactinputYearOfEndingStudennt.placeholder = 'Когда закончил'
            ourEndOfStudent.appendChild(redactinputYearOfEndingStudennt);

            let redactInputMoreInfoStudennt = document.createElement('input');
            redactInputMoreInfoStudennt.type = 'text';
            redactInputMoreInfoStudennt.id = 'InfoRed';
            redactInputMoreInfoStudennt.value = Student.info;
            redactInputMoreInfoStudennt.placeholder = 'за что отличился, доп инфо'
            ourSpecialInfoStudent.appendChild(redactInputMoreInfoStudennt);

            redactOurStudent.value = 'превратить в Чатланца'

            redactOurStudent.addEventListener('click', Nredact);

            function Nredact(){
                console.log('!!!');
                
                Student.firstName = document.getElementById('nameOfStudentRed').value;
                Student.secondName = document.getElementById('SecondNameRed').value;
                Student.begin = document.getElementById('YearStartRed').value;
                Student.end = document.getElementById('YearEndRed').value;
                Student.info = document.getElementById('InfoRed').value;
                
                let remove1 = ourNameOFStudent.removeChild(redactInputNameStudennt);
                let remove2 =ourSecondNameOfStudent.removeChild(redactInputSecondNameStudennt);
                let remove3 = ourBegginOfStudent.removeChild(redactInputYearOfBegginingStudennt);
                let remove4 = ourEndOfStudent.removeChild(redactinputYearOfEndingStudennt);
                let remove5 = ourSpecialInfoStudent.removeChild(redactInputMoreInfoStudennt);

                ourNameOFStudent.innerHTML = Student.firstName;
                ourSecondNameOfStudent.innerHTML = Student.secondName;
                ourBegginOfStudent.innerHTML = Student.begin;
                ourEndOfStudent.innerHTML = Student.end;
                ourSpecialInfoStudent.innerHTML = Student.info;

                redactOurStudent.value = 'Редактировать в Чатланца';
                redactOurStudent.removeEventListener('click', Nredact);
                redactOurStudent.addEventListener('click', RedactStudent)
                return function(){
                    ourNameOFStudent.innerHTML = Student.firstName;
                    ourSecondNameOfStudent.innerHTML = Student.secondName;
                    ourBegginOfStudent.innerHTML = Student.begin;
                    ourEndOfStudent.innerHTML = Student.end;
                    ourSpecialInfoStudent.innerHTML = Student.info;
                }
            }

        }
        // console.log(ourStudents);
        inputSaveInfoStudennt.style.color = 'red';
        inputSaveInfoStudennt.removeEventListener('click', readInfoAboutStudent);
}


