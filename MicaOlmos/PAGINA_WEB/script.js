document.getElementById("buttonr").addEventListener("click", function(){
    document.getElementById("colorBox").style.backgroundColor = "red";
});

document.getElementById("buttong").addEventListener("click", function(){
    document.getElementById("colorBox").style.backgroundColor ="green";
});

document.getElementById("buttonb").addEventListener("click", function(){
    document.getElementById("colorBox").style.backgroundColor ="blue";
});

document.getElementById("colorBox").addEventListener("click", function(){
    document.getElementById("colorBox").style.backgroundColor = "grey";
});
