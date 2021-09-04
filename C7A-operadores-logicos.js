/* ==========================
DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

let edad = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permiten hacer operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
//15++    //---> Incremento de uno en uno: 15 + 1
//15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

/* ==========================
DE COMPARACIÓN SIMPLE
========================== */

0 == ""; // true
"" == false; // true
null == undefined; // true
17 == "17"; // true
"" == true; // false
null == false; // false
0 == null; // false
NaN == NaN; // false


/* ==========================
DE COMPARACIÓN ESTRICTA
========================== */

0 === ""; // false
"" === false; // false
null === undefined; // false
17 === "17"; // false
"" === true; // false
null === false; // false
0 === null; // false
NaN === NaN; // false


/* ==========================
OPERADORES RELACIONALES
========================== */



prueba = 'Zapato' == 'trampa' || "hola" <= "chau"
console.log(false | 3 == 4);

/* ==========================
LÓGICOS
========================== */

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano