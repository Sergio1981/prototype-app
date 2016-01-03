var btn = document.getElementById("envia");
var load = document.getElementById("loader-small");
var loadBig = document.getElementById("loader-big");

btn.addEventListener("click", function(){
    load.style.display = "block";
    loadBig.style.display = "block";
    alert("Olá amigos!");
    load.style.display = "none";
    loadBig.style.display = "none";
});