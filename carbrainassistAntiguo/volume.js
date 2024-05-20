const icon = document.querySelector('#icon');
    range = document.querySelector('input');
    slidevalue = document.querySelector('.slide-value');


range.addEventListener("input", () => {
    let rangeVal = range.value;
    slidevalue.innerHTML = rangeVal;

    if(rangeVal > 0){
        icon.src = "imagenes/svg/volumenBajo.svg";
    }else{
        icon.src = "imagenes/svg/mute.svg";
    }

    if(rangeVal > 60){
        icon.src = "imagenes/svg/volumenAlto.svg";
    }else{
        icon.src = "imagenes/svg/volumenBajo.svg";
    }

    
});