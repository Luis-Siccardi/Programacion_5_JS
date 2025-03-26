// Cuando se hace clic en el botón con id "agregar", se ejecuta esta función
document.getElementById("agregar").onclick = function() {
    
    // Obtiene el valor que el usuario escribió en el input con id "tarea"
    const tarea = document.getElementById("tarea").value;
    if (tarea) {
        
        // Agrega la tarea dentro de la lista <ul> como un nuevo <li>
        // += significa que se suma el nuevo <li> al contenido existente
        document.getElementById("listaTareas").innerHTML += "<li>" + tarea + "</li>";
        
        // Limpia el input después de agregar la tarea
        document.getElementById("tarea").value = "";
    }
};
