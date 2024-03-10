
// const txt1=document.getElementById('firstname')
// const txt2=document.getElementById('lastname')
// const age=document.getElementById('age')
// const roll=document.getElementById('rollno')
// const dob=document.getElementById('date')
// const btn=document.getElementById('btn')
// const txt1=$('#firstname').val();
// const txt2=$('#lastname').val();
// const age=$('#age').val();
// const roll=$('rollno').val();
// const dib=$('#date').val();
// const btn=document.getElementById('btn')

// function fun(){
//     const details=[("The firstName is : "+txt1),("The lastName is : "+txt2), ("The Age is : "+age),("The Roll Number is : "+roll),("The Date of Birth is : "+date)]
//     alert(details.join("\n"));
// }
// btn.addEventListener('click',fun);
// window.onload = function(){
//     alert("document is loading")
//     }
// window.addEventListener('DOMContentLoaded',(event) => {
//     //your code here
// });
   
// function test(){
//     alert("test is here");
//     var Firstname=$("firstname")
//     // let firstname=Firstname.value
//     Firstname[0].css("color","red")
//     greet(Firstname[0].value);
//     function greet(yourname){
//         alert("hello" ${yourname} )
//     }

// };
// $(function()){
//     alert("hello this is jquery");
// }
let students = [];

    function createStudent() {
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const age = document.getElementById('age').value;
        const rollNo = document.getElementById('rollno').value;
        const dob = document.getElementById('date').value;
        const hobbies = document.getElementById('hobby').value.split(',').map(item => item.trim());
        if (firstName === "") {
            document.getElementById('firstnameError').innerText = "First name is required";
            return;
        }
        if (lastName === "") {
            document.getElementById('lastnameError').innerText = "Last name is required";
            return;
        }
        if (age === "" && age<0 && age>100) {
            document.getElementById('ageError').innerText = "Age is required";
            return;
        }
        if (rollNo === "") {
            document.getElementById('rollnoError').innerText = "roll number is required";
            return;
        }
        if (dob === "") {
            document.getElementById('dateError').innerText = "date of birth is required";
            return;
        }
        const student = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            rollNo: rollNo,
            dob: dob,
            hobbies: hobbies
        };

        students.push(student);
        // alert(students[0]['rollNo'],JSON.stringify(students))
    }

    function getStudentDetails() {
        const rollNo = document.getElementById('rollnoinput').value;
        let student = null;
        // alert(JSON.stringify(students))
        for(let i=0;i<students.length;i++){
            if (students[i]['rollNo'] ===rollNo){
                student=students[i];
                break;
            }
        }
        // alert(JSON.stringify(student))

        if (student) {
            let studentInfo =` Student Details:\n\n`;
        studentInfo += `First Name: ${student.firstName}\n`;
        studentInfo += `Last Name: ${student.lastName}\n`;
        studentInfo += `Age: ${student.age}\n`;
        studentInfo += `Roll Number: ${student.rollNo}\n`;
        studentInfo += `Date of Birth: ${student.dob}\n`;
        studentInfo += `Hobbies: ${student.hobbies.join(', ')}\n`;

        alert(studentInfo);
    } else {
        alert("Student not found!");
    }
    }