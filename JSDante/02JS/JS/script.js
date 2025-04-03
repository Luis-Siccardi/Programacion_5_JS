function agregar() {
    let li = document.createElement("li");
    document.getElementById("lista").appendChild(li);
    li.innerHTML =  document.getElementById("tarea").value + ' <button class="eliminar">Eliminar</button>';
    
    li.querySelector(".eliminar").addEventListener("click", () => li.remove());
}