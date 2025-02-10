const newTaskBtn = document.getElementById("newTask");
const displayCreation = document.querySelector(".displayCreation");
const newTaskDisplay = document.getElementById("newTaskDisplay")

newTaskBtn.addEventListener("click", newTaskFct);

function newTaskFct(){
    const newTaskInput = document.createElement("input");
    newTaskInput.type = "text";
    newTaskInput.id = "newTaskInput";
    newTaskDisplay.appendChild(newTaskInput);
}
    

