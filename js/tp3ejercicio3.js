let ciudad = [];

do {
    ciudad.push(window.prompt("escriba ciudades"));
    
} while (confirm('desea continuar'));

document.write(`<ul>`);
document.write(`<li>el arreglo de ciudades tiene ${ciudad.length} elementos</li>`);
document.write(`<li>el elemento primero es ${ciudad[0]}</li>`);
document.write(`<li>el elemento tercero es ${ciudad[2]}</li>`);
document.write(`<li>el elemento ultimo es ${ciudad[ciudad.length-1]}</li>`);
ciudad.splice(ciudad.length,1,'Paris')
document.write(`<li>el elemento ultimo es ${ciudad[ciudad.length-1]}</li>`);
document.write(`</ul>`);

document.write(`Arreglo de ciudades`);
document.write(`<ul>`);
for (let i = 0; i < ciudad.length; i++) {
    
    
    document.write(`<li>${ ciudad[i]}  </li>`);       
    
}
document.write(`</ul>`);

document.write(`<ul>`);
document.write(`<li>el elemento segundo es ${ciudad[1]}</li>`);
ciudad.splice(1,1,'Barcelona')
document.write(`<li>el elemento segundo sustituido es ${ciudad[1]}</li>`);
document.write(`</ul>`);