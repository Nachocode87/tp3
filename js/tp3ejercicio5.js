function cadenaMayusYMinus(textoIngresado) {
    let flag = false;
    let flag2 = false;
    for (let i = 0; i < textoIngresado.length; i++) {     
        if(textoIngresado[i] === textoIngresado[i].toUpperCase())
        {
            flag = true;   
        }
        
        if(textoIngresado[i] === textoIngresado[i].toLowerCase())
        {
            flag2 = true;
        }        
    }
    
    if (flag&&flag2){
        document.write(`la frase tiene mayusculas y minusculas`);
    } if (flag) {
        document.write(`la frase tiene mayusculas`);
        
    } else {
        document.write(`la frase tiene minusculas`);
        
    }
     
}


let frase = window.prompt('ingrese una palabra o frase');


cadenaMayusYMinus(frase);