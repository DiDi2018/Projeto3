function winLetra(x){
    let win = document.querySelector(".win");
    win.style.display = "flex";
    let div = document.querySelector(".win div");

    let p1 = document.createElement("p");
    let text1 = document.createTextNode("YOU WON THE LETTER");
    p1.appendChild(text1);
    let p3 = document.createElement("p");
    let text3 = document.createTextNode(x);
    p3.appendChild(text3);

    let image1 = new Image();
    win.appendChild(image1);

    image1.onload = function(){
        div.appendChild(p1);
        div.appendChild(p3);
    };


    image1.src = "images/paper_claro.png";
}