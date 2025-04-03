function agregar () {
    let li = document.createElement("li");
    document.getElementById("lista").appendChild(li);
    li.innerHTML = document.getElementById("tarea").value + '<button src="eliminarTarea">Eliminar Tarea</button>';
    li.querySelector(".eliminarTarea").addEventListener("click", () => li.remove()); 
}