document.getElementById("rojo").addEventListener("click", function() {
    document.getElementById("cuadrado").style.backgroundColor = "red";
});

document.getElementById("verde").addEventListener("click", function() {
    document.getElementById("cuadrado").style.backgroundColor = "green";
});

document.getElementById("azul").addEventListener("click", function() {
    document.getElementById("cuadrado").style.backgroundColor = "blue";
});
const button = document.querySelector("button");
function action(){
    alert("hello")
}
button.addEventListener("click",action);