

const random = function() {
    let dado = Math.floor(Math.random()*(7 - 1)+1);
    let dado2 = Math.floor(Math.random()*(7 - 1)+1);
    return dado + dado2
}

let apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0];
// document.write(!apariciones[3])
for (let i = 0; i < 50; i++) {
    let num = random()
    // document.write('<p> renerado'+num+'</p>')
    if (apariciones[num]=== 0) {
        apariciones[num] = 1        
        // document.write('<p> no esta'+apariciones[num]+'</p>')
    } else {
        apariciones[num] += 1 
        // document.write('<p> si esta'+apariciones[num]+'</p>')
    }
}

document.write(`<table>`);
document.write(`<tr>`);
document.write(`<th>Suma🎲🎲 </th>`);
document.write(`<th>Apariciones🎯</th>`);
document.write(`<tr>`);

for (let i = 2; i < apariciones.length; i++) {
    document.write(`<tr>`);
    document.write(`<th>${i}</th>`);
    document.write(`<th>${apariciones[i]}</th>`); 
    document.write(`</tr>`);
}

document.write(`</table>`);