//ejercicio 1//


function verificarNumero (num){
    if (num > 0) {
        return console.log(`el ${num} es positivo`)
    }
    else if (num < 0) {
        return console.log(`el ${num} es negativo`)
    }
    else {
        return console.log(`el ${num} es cero`)
    } 
}
//ejercicio 2//


function puedeVotar (edad) {
    if (edad < 18) {
        return (`no puede votar`)
    }
    
    if (edad >= 18) {
    return (`puede votar`)
    }
}
console.log(puedeVotar()) 