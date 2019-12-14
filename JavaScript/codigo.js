var tv = document.getElementById("code");
var audio_ruido = document.getElementById("audio2");

//RUIDO
/*function mudar() {
    setTimeout(ruidar, 1000);
    setTimeout(desafio, 4000);
}
*/
function ruido() {
    document.getElementById("ruido").style.display = "block";
    audio_ruido.play();
    gritos.pause();
    setTimeout(function () {
        window.location.href = "codigo.html";
    },1000);
}
/*
function desafio() {
    tv.src = "images/corredor/tv.png";
    audio_ruido.pause();
    gritos.pause();
}*/


var letras= ['V','E','L','D','T','W','U','A','J','K','I']

window.onload = function () {

    var alphabet = ['V','E','L','D','T','W','U','A','J','K','I'];

    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var space;              // Number of spaces in word '-'

    // create alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    // Create geusses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // OnClick Function
    check = function () {
        list.onclick = function () {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function () {
        categories = [
            ["VELDT"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [ ];

        space = 0;
        result();
        canvas();
    }

    play();

}


