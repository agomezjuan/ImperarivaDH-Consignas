let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

function convertirAMayusculas(array) {
  // Pasarlo a mayusculas de  manera manual
  //   array[0] = array[0].toUpperCase();
  //   array[1] = array[1].toUpperCase();
  //   array[2] = array[2].toUpperCase();
  //   array[3] = array[3].toUpperCase();
  //   array[4] = array[4].toUpperCase();

  // Pasarlo a mayusculas con un bucle

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
}

// console.log(peliculas);
// console.log(convertirAMayusculas(peliculas));

let pelisAnimadas = ["cars", "mulan", "la cenicnenta", "sherck"];
let otrasPelisAnimadas = ["toy story", "brave", "bichos", "la sirenita", "up"];

function pasajeDeElementos(array1, array2) {
  // manual
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());

  //bucle
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2.pop().toUpperCase());
  }
  return array1;
}

console.log(pasajeDeElementos(pelisAnimadas, otrasPelisAnimadas));
console.log(otrasPelisAnimadas);
