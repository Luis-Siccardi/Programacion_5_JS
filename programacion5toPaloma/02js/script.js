document.getElementById("agregarBtn").onclick = () => {
    let input = document.getElementById("tareaInput"), texto = input.value.trim(); // Obtiene el input y su contenido
    if (!texto) return; // Si el input está vacío, no hace nada
    
    // Agrega la tarea a la lista con un botón para eliminarla
    document.getElementById("listaTareas").innerHTML += `<li>${texto} <button onclick='this.parentNode.remove()'>Eliminar</button></li>`;
    
    input.value = ""; // Limpia el input después de agregar la tarea
}
