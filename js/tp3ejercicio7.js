




function tabla(numeroIngresado) {
    for (let i = 1; i < 11; i++) {
        
        document.write(numeroIngresado*i+ ' -');
        
    }
}

let numero = parseInt(window.prompt("escriba un numero"));

tabla(numero);