const newTaskBtn = document.getElementById("new-task");
const displayCreation = document.querySelector(".display-creation");
const newTaskDisplay = document.getElementById("new-task-display");
const newTaskInput = document.getElementById("new-task-input");
const tasksDisplay = document.querySelector(".tasks-display")
const addNewTaskBtn = document.getElementById("add-new-task-btn");
const tasksDisplayBtn = document.getElementById("tasks-display-btn")

// Tableau des tâches
let tasksArray = [];

// Affichage saisie nouvelle tâche
newTaskBtn.addEventListener("click", newTaskDisplayFct);

function newTaskDisplayFct(){
    tasksDisplay.innerHTML = "";
    newTaskInput.value = "";
    newTaskDisplay.classList.toggle("hidden");
}

// Ajout d'une nouvelle tâche
addNewTaskBtn.addEventListener("click", addNewTaskFct);

function addNewTaskFct(){
    tasksArray.unshift(newTaskInput.value);
    newTaskDisplayFct();
    lastTaskDisplay();
}

// Affichage de la dernière tâche
function lastTaskDisplay(){
    tasksDisplay.innerHTML = "";
    const task = document.createElement("p");
        task.textContent = tasksArray[0];
        tasksDisplay.appendChild(task);
}


// Affichage des tâches
tasksDisplayBtn.addEventListener("click", taskDisplayFct)

function taskDisplayFct(){
    tasksDisplay.innerHTML = "";
    tasksArray.forEach((taskIn) => {
        const task = document.createElement("p");
        task.textContent = taskIn;
        tasksDisplay.appendChild(task);
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.id = taskIn;
        task.appendChild(delBtn);
        
        // Supprimer une tâche
    
        delBtn.addEventListener("click", deleteTaskFct);

        function deleteTaskFct(){
            delBtn.parentElement.remove();
            tasksArray.forEach((taskIn, key) => {
                if (taskIn === delBtn.id){
                    tasksArray.splice(key,1)
                }        
            })
            console.log(tasksArray)
        }
    });
}



// Enregitrement des tâches dans localStorage
