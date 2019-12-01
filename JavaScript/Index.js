//var div =document.querySelector("#popup");

var nrImagem = 0;
var imagens = [];
var refrescar = 1;

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/index/fundo1.png";
imagens[1] = "images/index/fundo.png";


function rodarImagens() {
    document.querySelector("#fundo").src = imagens[nrImagem++];

    if (nrImagem >= imagens.length)
        nrImagem = 0;

    setTimeout("rodarImagens()", refrescar * 1000);
}
rodarImagens();

//ISTO É O QUÊ MESMO? NÃO ESTÁ A FUNCIONAR MAS NAO QUIS ELIMINAR PQ NAO SEI O Q É, ASS: MARIA SOARES
dragElement(document.getElementById("popup"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



