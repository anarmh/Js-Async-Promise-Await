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
// getStudentsByFilter("E")


//  function getStudentsByFilter(str){
//     setTimeout(() => {
        
//         let result=students.filter(m=>m.name.includes(str))
//         console.log(result);
//     }, 2000);
//  }
 


function getStudents(){
    setTimeout(() => {
        let str="";
       students.forEach(stu => {
        
        str+=`<li class="list-group-item">
        <span>${stu.name}-</span>
        <span>${stu.surname}</span>
        <span>${stu.age}</span>
        </li> `
        document.querySelector("ul").innerHTML=str;
       });
    }, 3000);
    
}


function createStudent(student){

        return new Promise((resolved,rejected)=>{
            setTimeout(() => {
                students.push(student);
                
                let err=true;

                if(!err){
                    resolved(students);
                }
                else{
                    rejected("something is wrong");
                }

            }, 2000);
        })
  
}
createStudent({name:"Atilla",surname:"Rehimov",age:19}).then(response=> {
    
    console.log(response);
   }).catch(err=>{
    console.log(err);
   })
  
   
  
