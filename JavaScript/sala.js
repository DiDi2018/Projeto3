let gato = document.querySelector(".sala:first-child");

gato.addEventListener("mouseover", function(){
    gato.src = "images/sala/gato_cor.png"
});

gato.addEventListener("mouseout", function(){
    gato.src = "images/sala/gato.png"
});