function winLetra(x){
    let back = document.querySelector(".win");
    back.style.display = "block";

    let p1 = document.createElement("p");
    let text1 = document.createTextNode("YOU WON");
    p1.appendChild(text1);
    let p2 = document.createElement("p");
    let text2 = document.createTextNode("THE LETTER");
    p2.appendChild(text2);
    let p3 = document.createElement("p");
    let text3 = document.createTextNode(x);
    p3.appendChild(text3);

    let image1 = new Image();
    back.appendChild(image1);

    image1.onload = function(){
        back.appendChild(p1);
        back.appendChild(p2);
        back.appendChild(p3);
    };


    image1.src = "images/paper-claro.png";
}