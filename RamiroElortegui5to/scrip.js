// cuando se aprieta el boton agruegar se cumple la funcion 
document.getElementById("agregar").onclick = function() {
// obtiene el valor del input 
    const tarea = document.getElementById("tarea").value;
   // si el input esta vacio no hace nathing 
    if (!tarea) return;
 // crea un nuevo elemento li para la lista 
    const li = document.createElement("li");
    // agrega la tarea y un boton "eliminar" adentro a la lista
    li.innerHTML = `${tarea} <button onclick="this.parentNode.remove()">Eliminar</button>`;
    //agrega el li dentro del ul con una id de listaDeTarea
    document.getElementById("listaTareas").appendChild(li);
    // limpia el input  despues de agregar la tarea 
    document.getElementById("tarea").value = "";
};

