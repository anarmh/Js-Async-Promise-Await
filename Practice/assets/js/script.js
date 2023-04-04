"use strict";

// let students=[
//     {
//         name:"Anar",
//         surname:"Huseynov",
//         age:36

//     },
//     {
//         name:"Elnar",
//         surname:"Huseynli",
//         age:25

//     },
//     {
//         name:"Tunar",
//         surname:"Huseynli",
//         age:26

//     },
    
// ]
// getStudentsByFilter("E")


//  function getStudentsByFilter(str){
//     setTimeout(() => {
        
//         let result=students.filter(m=>m.name.includes(str))
//         console.log(result);
//     }, 2000);
//  }
 


// function getStudents(){
//     setTimeout(() => {
//         let str="";
//        students.forEach(stu => {
        
//         str+=`<li class="list-group-item">
//         <span>${stu.name}-</span>
//         <span>${stu.surname}</span>
//         <span>${stu.age}</span>
//         </li> `
//         document.querySelector("ul").innerHTML=str;
//        });
//     }, 3000);
    
// }


// function createStudent(student){

//         return new Promise((resolved,rejected)=>{
//             setTimeout(() => {
//                 students.push(student);
                
//                 let err=true;

//                 if(!err){
//                     resolved(students);
//                 }
//                 else{
//                     rejected("something is wrong");
//                 }

//             }, 2000);
//         })
  
// }
// createStudent({name:"Atilla",surname:"Rehimov",age:19}).then(response=> {
    
//     console.log(response);
//    }).catch(err=>{
//     console.log(err);
//    })
  
  


    //   function getAllPosts(){

    //     fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then(response => response.json())
    //     .then(posts =>{
    //         let str="";
    //         posts.forEach(post => {
               
    //             str+=`
    //             <tr data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //             <td>${post.id}</td>
    //             <td>${post.postId}</td>
    //             <td>${post.name}</td>
    //             <td>${post.email}</td>
    //             <td>${post.body}</td>
    //           </tr>`

    //         });
    //         document.querySelector("tbody").innerHTML=str

    //     })
  
    //   }
   
    //  getAllPosts()

   
    //  setTimeout(() => {
    //     let elems=document.querySelectorAll("tbody tr");
    //     elems.forEach(elem => {
    //         elem.addEventListener("click",function(){
    //             let id=parseInt(this.getAttribute("data-id"));
    //             fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    //              .then(response => response.json())
    //             .then(json => {

    //                 document.querySelector(".modal-header h5").innerText=json.name;
    //                 document.querySelector(".modal-body").innerText=json.body;
                
    //             })
           
               
    //         })
    //     });
    //  }, 2000);


    // async function getPosts(){

    //     let data=await fetch(`https://jsonplaceholder.typicode.com/comments`);
    //     let response=await data.json()
    //     console.log(response);
    // }
  
    // getPosts()



    // $(function(){
    //     $.ajax({url: "https://jsonplaceholder.typicode.com/comments", success: function(result){
    //         console.log(result);
    //        }});
    // })

    let btn=document.querySelector(".btn-primary")
    
    btn.addEventListener("click",function(){
        fetch(`https://jsonplaceholder.typicode.com/comments/`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })

    })
      
    