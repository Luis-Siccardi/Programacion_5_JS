const button = document.getElementById("agregarBtn"); // obtiene el botón "añadir tarea"
const lista = document.getElementById("listaTareas"); // obtiene la lista donde se guardan las tareas
const input = document.getElementById("tareaInput"); // obtiene el input

function agregarTarea(texto) {
    const li = document.createElement("li"); // creo un <li>
    li.textContent = texto; // le pongo el texto de la tarea

    const botonBorrar = document.createElement("button"); 
    botonBorrar.textContent = "x";
    botonBorrar.style.marginLeft = "10px"; // espaciado

    botonBorrar.addEventListener("click", function () {
        lista.removeChild(li); // se borra
    });

    li.appendChild(botonBorrar); // agrego el botón al <li>
    lista.appendChild(li); // agrego el <li> a la lista
}

button.addEventListener("click", function () {
    if (input.value) { // si no está vacío
        agregarTarea(input.value); // usa la función para agregar la tarea con botón de eliminar
        input.value = ""; // limpia el input
    }
});

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value) { // si apretas enter y el input no está vacío
        agregarTarea(input.value); // usa la función para agregar la tarea con botón de eliminar
        input.value = ""; // limpia el input
    }
});
