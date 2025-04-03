document.getElementById("taskInput").setAttribute("placeholder", "Escribe una tarea...");

function addTask() {
    const taskText = document.getElementById("taskInput").value;
    if (taskText === "") return;

    const taskContainer = document.getElementById("taskContainer");
   
    let taskList = taskContainer.querySelector("ul");
    if (!taskList) {
        taskList = document.createElement("ul");
        taskContainer.appendChild(taskList);
    }

   
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

  
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    document.getElementById("taskInput").value = "";
}
