document.getElementById("rojo").addEventListener("click", function(){
document.getElementById("cuadradogris").style.background = "red";
});
document.getElementById("verde").addEventListener("click", function(){
document.getElementById("cuadradogris").style.background = "green";
});
document.getElementById("azul").addEventListener("click", function(){
document.getElementById("cuadradogris").style.background = "blue";
});

const button = document.queryselector("button") ;
function action () {
    alert ("hello") ;
};
button .addEventlistener ("click",action);