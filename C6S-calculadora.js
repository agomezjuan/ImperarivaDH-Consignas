// Función sumar
function sumar(num1, num2) {
    return num1 + num2
}

// Función restar
function restar(num1, num2) {
    return num1 - num2
}

// Función multiplicar
function multiplicar(num1, num2) {
    return num1 * num2
}

// Función dividir
function dividir(num1, num2) {
    return num1 / num2
}


console.log("\n-------------- Testeo de Operaciones / Calculadora --------------")

let n1 = 8
let n2 = 3

console.log(`La suma de ${n1} más ${n2} es ${sumar(n1, n2)}`);
console.log(`La resta de ${n1} menos ${n2} es ${restar(n1, n2)}`);
console.log(`La multiplicación de ${n1} por ${n2} es ${multiplicar(n1, n2)}`);
console.log(`La división de ${n1} entre ${n2=0} es ${dividir(n1, n2)}`);


// Cuadrado de un número
function cuadradoDeUnNumero(num) {
    return Math.pow(num)
}