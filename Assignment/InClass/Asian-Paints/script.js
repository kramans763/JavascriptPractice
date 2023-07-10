const inputId=document.getElementById("wall_id");
const colorInput=document.getElementById("wall_color");
const applyBtn=document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");

const wallList=document.querySelectorAll(".block");

// listner
applyBtn.addEventListener("click", (event)=>{
    const id =inputId.value;
    const color = colorInput.value;

    const wallElement=document.getElementById(id);
    wallElement.style.backgroundColor=color;   
})

resetBtn.addEventListener("click",(e)=>{
    const wallListArray=Array.from(wallList);
    wallListArray.forEach(wall=> wall.style.backgroundColor="transparent");
})