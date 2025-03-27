const botonSaludar = document.querySelector("button");
function action () {
    alert("Hello!");
};
botonSaludar.addEventListener("click", action);

document.getElementById("botonRojo").addEventListener("click", function() { 
    document.getElementById("Cuadrado").style.backgroundColor="red";
});


document.getElementById("botonVerde").addEventListener("click", function() { 
    document.getElementById("Cuadrado").style.backgroundColor="green";
});

document.getElementById("botonAzul").addEventListener("click", function() { 
    document.getElementById("Cuadrado").style.backgroundColor="blue";
});