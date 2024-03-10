
const txt1=document.getElementById('firstname')
const txt2=document.getElementById('lastname')
const age=document.getElementById('age')
const roll=document.getElementById('rollno')
const dob=document.getElementById('date')
const btn=document.getElementById('btn')

function fun(){
    const details=[("The firstName is : "+txt1.value),("The lastName is : "+txt2.value), ("The Age is : "+age.value),("The Roll Number is : "+roll.value),("The Date of Birth is : "+date.value)]
    alert(details.join("\n"));
}
btn.addEventListener('click',fun);
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