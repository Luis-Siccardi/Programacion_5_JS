const input = document.getElementById("tareas")
const button = document.querySelector("button")

function saludo() {
    alert(input.value)
}

button.addEventListener("click", saludo)
