document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search-input");
    const botonAgregar = document.getElementById("Agregar");
    const lista = document.createElement("ul"); 
    document.body.appendChild(lista); 

    botonAgregar.addEventListener("click", function (event) {
        event.preventDefault(); 
        const texto = input.value.trim();
        if (texto !== "") {
            const nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = texto;
            
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.style.backgroundColor = "red"; 
            botonEliminar.style.color = "white";
            botonEliminar.style.marginLeft = "10px";
            
            botonEliminar.addEventListener("click", function () {
                lista.removeChild(nuevoElemento);
            });
            
            nuevoElemento.appendChild(botonEliminar);
            lista.appendChild(nuevoElemento);
            input.value = ""; 
        }
    });
});
