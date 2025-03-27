function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let tareaTexto = input.value.trim(); //elimina espacios en blanco 
    
    if (tareaTexto === "") return; //si el input estar vacio no agrega nada 
    
    let lista = document.getElementById("listaTareas"); //obtiene la lista de tareas 
    let nuevaTarea = document.createElement("li"); //crea un elemento li par ala lista de tareas
    nuevaTarea.textContent = tareaTexto;
    
    let botonEliminar = document.createElement("button"); //crea un boton para eliminar cada tarea 
    botonEliminar.textContent = "Eliminar Tarea";

    botonEliminar.onclick = function() { //
        lista.removeChild(nuevaTarea);
    };
    
    nuevaTarea.appendChild(botonEliminar); //agrega el boton al elemento de la tarea 
    lista.appendChild(nuevaTarea); //agrega la tarea nueva a la lista 
    input.value = ""; //limpia el imput 
}

document.getElementById("tareaInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
});