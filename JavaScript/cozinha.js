var carta=  document.getElementById('carta');
var monstro1 = document.getElementById("monstro1"); // works
var monstro2 = document.getElementById("monstro2"); // works
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var psicologo=document.getElementById('psicologo');
let apresentacao = document.getElementById("apresentacao");
let smile=document.getElementById("smile");
let count1=false;
let count2=false;
let count3=false;
let count4=false;


//TEXTO LYDIA
 let text1Lydia = "This room has the best instruments that you could ever dream of. You will never ever have to worry about dinner anymore, as soon as you get home you’ll have warm food on the table. Go ahead and take a look!";
 let i1 = 0;
 let speed = 50;
 let lydia= document.querySelector(".lydia");

     function aparecerTexto(){
         if (i1 < text1Lydia.length){
             document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
             i1++;
             setTimeout(aparecerTexto, speed);
         }

     /*}

     function desaparecerTexto() {

      if (i1 >= text1Lydia.length - 1) {
             text1Lydia.replace(text1Lydia, '');

         }   */

     apresentacao.play();

 }
 aparecerTexto();
 //desaparecerTexto();


//MOSTRAR A CARTA

    carta.addEventListener("click", ShowLetter);
    function ShowLetter() {
           if(apresentacao.paused) {
               n = new Date();
               y = n.getFullYear();
               m = n.getMonth() + 1;
               d = n.getDate();
               document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
               document.getElementById("texto").style.display = "block";
               audio2.pause();
               audio2.currentTime = 0;
               monstro2.src = "images/cozinha/Monstro2.png";
               audio1.pause();
               audio1.currentTime = 0;
               monstro1.src = "images/cozinha/Monstro1.png";
               psicologo.play();

                count1 = true;

                if (count1 && count2 && count3) {
                    lydiaSmile();
                }


           }
    }


//SAIR DA CARTA

    let cruz = document.getElementById("cruz");

    function sair() {
        document.getElementById('texto').style.display = "none";
        psicologo.pause();
        psicologo.currentTime = 0;
    }

    cruz.addEventListener("click", sair);
    document.addEventListener("click", fecharfora);

    function fecharfora(evt) {
        let papel = document.getElementById('papel').contains(evt.target);
        let textoPsicologo = document.getElementById('textoPsicologo').contains(evt.target);
        let carta = document.getElementById('carta').contains(evt.target);

        if (!papel && !textoPsicologo && !carta) {
            return sair();
        }

    }



//MONSTROS

     function mouseOverMonstro1() {
        if(apresentacao.paused && count1===true && smile.paused) {
            var monstro1 = document.querySelector("#monstro1");
            monstro1.src = "images/cozinha/Monstro1.1.png";
        }
     }

     function mouseLeftMonstro1() {
        if(apresentacao.paused && count1===true && smile.paused) {
          var monstro1 = document.querySelector("#monstro1"); // works
             if (audio1.ended || audio1.paused) {
              monstro1.src = "images/cozinha/Monstro1.png";
              }
         }
     }

     function mouseOverMonstro2() {
        if(apresentacao.paused && count1===true && smile.paused) {
            var monstro2 = document.querySelector("#monstro2"); // works
            monstro2.src = "images/cozinha/Monstro2.1.png";
        }
     }

     function mouseLeftMonstro2() {
        if(apresentacao.paused && count1===true && smile.paused) {
            var monstro2 = document.querySelector("#monstro2"); // works
            if (audio2.ended || audio2.paused) {
                monstro2.src = "images/cozinha/Monstro2.png";
            }
        }
     }
 
//MONSTROS_SOM

function playaudio1() {
        if(apresentacao.paused && count1===true && smile.paused) {
            if (audio1.paused && audio2.paused) {
                audio1.play();
            } else if (audio1.paused && !(audio2.paused)) {
                audio2.pause();
                audio2.currentTime = 0;
                audio1.play();
                monstro2.src = "images/cozinha/Monstro2.png";
            } else {
                audio1.pause();
                audio1.currentTime = 0;
            }
            count2 = true;

            if (count1 && count2 && count3) {
                lydiaSmile();
            }
        }
}

function playaudio2() {
        if(apresentacao.paused && count1===true && smile.paused) {
            if (audio2.paused && audio1.paused) {
                audio2.play();
            } else if (audio2.paused && !(audio1.paused)) {
                audio1.pause();
                audio1.currentTime = 0;
                audio2.play();
                monstro1.src = "images/cozinha/Monstro1.png";
            } else {
                audio2.pause();
                audio2.currentTime = 0;
            }
            count3 = true;

            if (count1 && count2 && count3) {
                lydiaSmile();
            }
        }
}

//MONSTROS_CLICAR
    monstro2.addEventListener("mouseenter", mouseOverMonstro2);
    monstro2.addEventListener("mouseleave", mouseLeftMonstro2);
    monstro2.addEventListener("click", playaudio2);
    monstro1.addEventListener("mouseenter", mouseOverMonstro1);
    monstro1.addEventListener("mouseleave", mouseLeftMonstro1);
    monstro1.addEventListener("click", playaudio1);

    audio2.addEventListener("ended", function () {
        monstro2.src = "images/cozinha/Monstro2.png";
    });

    audio1.addEventListener("ended", function () {
        monstro1.src = "images/cozinha/Monstro1.png";
    });

    function lydiaSmile() {
        if (count1 && count2 && count3 && audio1.paused && audio2.paused && count4 === false) {
            let text3Lydia = "Wait a second! Why are you not smiling? You just won this amazing House, so Smile!";
            let i1 = 0;
            let speed = 50;
            //document.getElementById('won').style.display = "block";
            document.querySelector(".lydiaTexto p").innerHTML = "";
            count4 = true;

            function a() {
                if (i1 < text3Lydia.length) {
                    document.querySelector(".lydiaTexto p").innerHTML += text3Lydia.charAt(i1);
                    i1++;
                    setTimeout(a, speed);
                }
            }

            smile.play();
        }
        a();
    }

    lydiaSmile();

//CAPTURA DE ECRÃ
//CAPTURA DA CAMARA
var capture;
var tracker ;
var w = 640,
    h = 480;

function setup() {
     capture = createCapture({
            audio: false,
            video: {
                width: w,
                height: h
            }
        }, function () {
            console.log('capture ready.')
        });
        capture.elt.setAttribute('playsinline', '');
        createCanvas(w, h);
        capture.size(w, h);
        capture.hide();

        colorMode(HSB);

        tracker = new clm.tracker();
        tracker.init();
        tracker.start(capture.elt);
    
}
function draw() {
      if(count1 && count2 && count3 && smile.paused && count4) {

      var positions = tracker.getCurrentPosition();

      //distância entre cantos da boca
      if (positions.length > 0) {
          var MouthLeft = createVector(positions[44][0], positions[44][1]);
          var MouthRight = createVector(positions[50][0], positions[50][1]);
          var sorriso = MouthLeft.dist(MouthRight);
      }

      if (sorriso * 10 >=60) {
          document.getElementById('won').style.display = "block";
          document.getElementById('won').style.width=sorriso;
          document.getElementById('won').style.height = "auto";


      } else {
          document.getElementById('won').style.display = "none";
      }
      console.log(sorriso);
  }
                         
}
