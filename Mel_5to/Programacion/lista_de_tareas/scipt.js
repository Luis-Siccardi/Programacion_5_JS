document.getElementById("agregar_tarea").onclick = () => {
    let input = document.getElementById("tarea").texto = input.value.trim();

    if (!texto)return;

    document.getElementById("Lista").innerHTML += "<li>S{texto}<button onclick = this.parentNode.remove()>eliminar</button></li>";

    input.value = "";
}