const inputEle=document.querySelector(".todo-input");
const addTodoButton =document.querySelector(".todo-button");
const ulList=document.querySelector(".todo-list");
// listner
addTodoButton.addEventListener('click', addTodoDiv);

// function
function addTodoDiv(event){
   event.preventDefault();

   const todoName=inputEle.value;

   const todoDiv=document.createElement('div');
   
   //list creation
   const newTodoList= document.createElement('li');
   newTodoList.innerText=todoName;
   newTodoList.classList.add("todo-item");
   todoDiv.appendChild(newTodoList);

   //complete button
   const completeButton=document.createElement("button");
   completeButton.innerText="Completed";
   completeButton.classList.add("complete-btn");
   completeButton.onclick=markAsCheck;
   todoDiv.appendChild(completeButton);

   //delete Button

   const dltBtn=document.createElement("button");
   dltBtn.innerText="Deleted";
   dltBtn.classList.add("trash-btn");
   dltBtn.onclick=deletList;
   todoDiv.appendChild(dltBtn);

   ulList.appendChild(todoDiv);
}

function deletList(event){
    const parentEle=event.target.parentElement;
    parentEle.remove();
}

function markAsCheck(event){
    const parentEle=event.target.parentElement;
    const todoListForMark=parentEle.firstChild;
    todoListForMark.classList.add("completed");
}