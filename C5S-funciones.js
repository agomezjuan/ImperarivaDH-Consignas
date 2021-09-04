
// Ejercicio 1
function pulgToCm(pulgadas){
    // 1 pulgada = 2.54 cm
    return pulgadas * 2.54
}

console.log(pulgToCm(3))

// Ejercicio 2
function convertirAUrl(nombre){
    return `https://www.${nombre}.com`
}

console.log(convertirAUrl('diomer'))

//Ejercicio 3
function agregarAdmiracion(string){
    return `¡${string}!`
}

console.log(agregarAdmiracion("Que viva Digital House"))

//Ejercicio 4
let edadDePerro = function(edad){
    return edad * 7
}

console.log(edadDePerro(5))

// Ejercicio 5
function horaDeTrabajo(sueldo) {
    return sueldo / 40
}

console.log(horaDeTrabajo(4000))

// Ejercicio 6
function calculadorIMC(altura, peso){
    let imc = peso / ((altura**2))
    return `Tu indice de masa corporal es: ${imc}`
}

console.log(calculadorIMC(1.76, 68))


// Desafios extra
function toUper(string){
    
    return `${typeof(string)} , ${string.toUpperCase()}`
}

console.log(toUper("Me gusta la dinamica de este grupo!!!"))


// Calculo del perimetro de la circunferencia
function circunferencia(radio){
    return 2 * Math.PI * radio
}

console.log(circunferencia(0.5));
