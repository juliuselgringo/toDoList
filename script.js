const newTaskBtn = document.getElementById("new-task");
const displayCreation = document.querySelector(".display-creation");
const newTaskDisplay = document.getElementById("new-task-display");
const newTaskInput = document.getElementById("new-task-input");
const tasksDisplay = document.querySelector(".tasks-display")
const addNewTaskBtn = document.getElementById("add-new-task-btn");
const tasksDisplayBtn = document.getElementById("tasks-display-btn")

// Tableau des tâches
let tasksArray = JSON.parse(localStorage.getItem("data")) || [];


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
    recordTasks();
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
        task.style.marginTop = "1em";
        task.style.border = "2px solid black"
        tasksDisplay.appendChild(task);
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.id = taskIn;
        delBtn.style.borderRadius = "100%";
        delBtn.style.width = "1.5em";
        delBtn.style.backgroundColor = "orange";
        delBtn.style.marginLeft = "1em";
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
            recordTasks();
        }
    });
}



// Enregitrement des tâches dans localStorage
function recordTasks(){
    localStorage.setItem("data", JSON.stringify(tasksArray));
}