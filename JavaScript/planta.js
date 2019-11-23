function mouseOverImage(quadrado) {
    quadrado = document.querySelector("#planta1").getSVGDocument().querySelector("rect");
    quadrado.addEventListener('mouseover', function() {
        quadrado.setAttribute("fill", "red");
    });
    quadrado.addEventListener('mouseout', function() {
        quadrado.setAttribute("fill", "green");
    });
}
