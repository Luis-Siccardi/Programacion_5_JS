function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let tareaTexto = input.value.trim();
    
    if (tareaTexto === "") return;
    
    let li = document.createElement("li");
    let botonEliminar = document.createElement("button");
    
    li.textContent = tareaTexto;
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { li.remove(); };
    
    li.appendChild(botonEliminar);
    document.getElementById("listaTareas").appendChild(li);
    
    input.value = "";
}