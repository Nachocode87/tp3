let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

document.write(`Lista de meses`);
document.write(`<ul>`);
for (let i = 0; i < meses.length; i++) {
    

    document.write(`<li>${ meses[i]}  </li>`);       
    
}
document.write(`</ul>`);