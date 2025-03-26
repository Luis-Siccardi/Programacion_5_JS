document.getElementById("taskInput").setAttribute("placeholder", "Escribe una tarea...");

function addTask() {
    const taskText = document.getElementById("taskInput").value;
    if (taskText === "") return;
    
    const taskContainer = document.getElementById("taskContainer");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    
    const taskSpan = document.createElement("span");
    taskSpan.innerHTML = taskText;
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.addEventListener("click", function() {
        taskDiv.remove();
    });
    
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteButton);
    taskContainer.appendChild(taskDiv);
    
    document.getElementById("taskInput").value = "";
}