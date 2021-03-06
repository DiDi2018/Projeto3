function winLetra(x){
    let canvas = document.getElementById("defaultCanvas0");
    if(canvas != null){
        canvas.parentNode.removeChild(canvas);
    }

    let win = document.querySelector(".win");
    win.style.display = "flex";
    let div = document.querySelector(".win div");
    let image2 = document.querySelector(".win img:first-of-type");

    let p1 = document.createElement("p");
    let text1 = document.createTextNode("YOU WON THE LETTER");
    p1.appendChild(text1);
    let p3 = document.createElement("p");
    if(x === 'v'){
        p3.style.fontStyle = "italic";
    }
    else if (x === 'E'){
        p3.style.fontWeight = "lighter";
    }
    else if (x === 'T'){
        p3.style.fontWeight = "bold";
    }
    let text3 = document.createTextNode(x);
    p3.appendChild(text3);

    let image1 = new Image();
    win.appendChild(image1);

    image1.onload = function(){
        div.appendChild(p1);
        div.appendChild(p3);
        image2.style.display = "block";
    };

    image1.src = "images/paper_claro.png";
}