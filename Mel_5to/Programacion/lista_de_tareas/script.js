document.getElementById("agregar_tarea").onclick = () => {
    let input = document.getElementById("tarea")
    let texto = input.value.trim();

    if (!texto)return;

    document.getElementById("Lista").innerHTML += `<li>${texto}<button onclick = this.parentNode.remove()>eliminar</button></li>`;

    input.value = "";
};

document.getElementById("Lista").addEventListener("click", function(){
    document.getElementById("tarea").value = "Lista";
})