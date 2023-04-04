


let btn=document.querySelector(".btn-primary")
    
btn.addEventListener("click",function(){
    fetch(`https://jsonplaceholder.typicode.com/comments/`)
    .then(response => response.json())
    .then(posts => {
        let str="";
               posts.forEach(post => {
                   
                   str+=`
                   <tr data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   <td>${post.id}</td>
                 <td>${post.postId}</td>
                     <td>${post.name}</td>
                    <td>${post.email}</td>
                   <td>${post.body}</td>
                  </tr>`
    
                });
        document.querySelector("tbody").innerHTML=str
    
    })

})
  