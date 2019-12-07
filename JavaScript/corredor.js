document.addEventListener("click",function(){
    for(let i=1; i<17; i++){
        let image = document.querySelector(`.hallway:nth-child(${i})`);
        let imageCSS = image.style.transform;
        let valueIni = imageCSS.match(/translateZ\(([-]?)[0-9]{1,4}px\)/);
        let value = parseInt(valueIni[0].slice(11,valueIni[0].length - 3)) + 500;
        value.toString();
        image.style.transform = imageCSS.replace(/translateZ\(([-]?)[0-9]{1,4}px\)/,`translateZ(${value}px)`);
    }
});