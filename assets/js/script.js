let menuVisible =false
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    }else{
        document.getElementById("nav").classList="responsivo";
        menuVisible=true  
    }
}function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false
}

function efectoHabilidades(){
var habilidades =document.getElementById("habilidades");
var distancia_habilidades = windows.innrHeight = habilidades.getBoundingClientRect().top;
if(distancia_habilidades >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("pyhton");
    habilidades[2].classList.add("htmlcss");
    habilidades[3].classList.add("django");
    habilidades[4].classList.add("express");
    habilidades[5].classList.add("sql");
    habilidades[2].classList.add("comunicacion");
    habilidades[3].classList.add("trabajoequipo");
    habilidades[4].classList.add("creatividad");
    habilidades[5].classList.add("dedicacion");
}

}
windows.onscroll = function(){
    efectoHabilidades();
    
}