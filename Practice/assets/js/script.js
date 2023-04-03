"use strict";

let students=[
    {
        name:"Anar",
        surname:"Huseynov",
        age:36

    },
    {
        name:"Elnar",
        surname:"Huseynli",
        age:25

    },
    {
        name:"Tunar",
        surname:"Huseynli",
        age:26

    },
    
]
getStudentsByFilter("E")

getStudents()

function getStudents(){
    setTimeout(() => {
        console.log(students);
    }, 3000);
    
}

 function getStudentsByFilter(str){
    setTimeout(() => {
        
        let result=students.filter(m=>m.name.includes(str))
        console.log(result);
    }, 2000);
 }
 