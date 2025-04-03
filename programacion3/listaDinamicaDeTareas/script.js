document.getElementById("agregarBtn").addEventListener("click", function () {
    const input = document.getElementById("tareaInput");
    const tareaTexto = input.value.trim();

    if (tareaTexto === "") return;

    const li = document.createElement("li");
    li.textContent = tareaTexto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(botonEliminar);
    document.getElementById("listaTarea").appendChild(li);

    input.value = "";
});
