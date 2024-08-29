//selectors
const todoBtn=document.querySelector(".todo_button");
const todoInput=document.querySelector(".todo_input");
const todolist=document.querySelector(".todo_list");

//event Listeners
todoBtn.addEventListener("click",addTask);
// todolist.addEventListener("click",checkOrdelete);
//functions


function addTask(e){
    e.preventDefault(); //to prevent the form from submitting
    
    //create li
     const todoli =document.createElement("li");
     todoli.classList.add("todo");

    //create div
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo-item');

    //add input value to div 
    tododiv.innerText=todoInput.value;


    //create button complete
     const completeBtn=document.createElement('button');
     completeBtn.classList.add('complete_btn');
     completeBtn.innerHTML='<i class="fa-solid fa-check"></i>';

    //create button trash
    const trashBtn=document.createElement('button');
    trashBtn.classList.add('trash_btn');
    trashBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    const buttonsdiv=document.createElement('div');

    //add div+button1+button2-->li
    todoli.appendChild(tododiv);
    buttonsdiv.appendChild(completeBtn);
    buttonsdiv.appendChild(trashBtn);
    todoli.appendChild(buttonsdiv);
    //add li to ul
     todolist.appendChild(todoli);
    
     //remove input value 
     todoInput.value="";
     const complete_btn=document.getElementsByClassName("complete_btn")
const todo_item=document.getElementsByClassName("todo-item")
const trash_btn=document.getElementsByClassName("trash_btn")
const todoo=document.getElementsByClassName("todo")
     for (let index = 0; index < complete_btn.length; index++) {
        complete_btn[index].addEventListener("click",function(){
            todo_item[index].style.textDecoration="line-through"
        })
        trash_btn[index].addEventListener("click",function(){
            todoo[index].style.display="none"
        })
        
        
    }

}
// function checkOrdelete(e){
//     const item=e.target;

//     if(item.classList[0]==='complete_btn'){
//         const todo =item.parentElement;
//         todo.classList.toggle("completed");
        
//     }
//     if(item.classList[0]==='trash_btn'){
//         const todo =item.parentElement;
//         todo.classList.toggle("fall");
//         todo.addEventListener('transitionend',()=>{
//             todo.remove();
          
//         });
        
//     }
// }

// let prices=[10,13,15,16]
// let pluss=document.getElementsByClassName("plus")
// let moinss=document.getElementByClassName("moins")
// let totalprice=document.getElementById("total")    
// let valuee=document.getElementsByClassName("value")
//   console.log(pluss)
// for(let i=0;i<prices.length;i++){
//     plus[i].addEventListener("click",function(){
//         valuee[i].value=Number(valuee[i].value)+1
//         totalprice.value=(totalprice.value)+prices[i]
//     })
//     moins[i].addEventListener("click",function(){
//         if(Number(valuee[i].value>0)){
//             valuee[i].value=Number(valuee[i].value)-1
//             totalprice.value=Number(totalprice.value)-prices[i]
//         }
//     })
// }
let plus_btn=document.getElementsByClassName("plus")
let moins_btn=document.getElementsByClassName("moins")
let totalprice=document.getElementById("total")
let valuee=document.getElementsByClassName("value")
let prices=[10,13,15,16]
for(let i=0;i<prices.length;i++){
    plus_btn[i].addEventListener("click",function(){
        valuee[i].value=Number(valuee[i].value)+1
        totalprice.value=Number(totalprice.value)+prices[i]
    })
    moins_btn[i].addEventListener("click",function(){
        if(Number(valuee[i].value>0)){
            valuee[i].value=Number(valuee[i].value)-1
            totalprice.value=Number(totalprice.value)-prices[i]
        }
    })
}
