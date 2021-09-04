let arrayCorreosPendientes = [
  'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com',    'thanosdigitalhouse.com','thanos@digitalhouse.com'];
/* array de correos admitidos */
let arrayCorreosAdmitidos = [
     'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];
let arrayCorreosDescartados = [];
function verificarCorreo(correo){
     if (correo.includes('@')) {
        arrayCorreosAdmitidos.push(correo)
        arrayCorreosPendientes.pop(correo)
    } else {
        arrayCorreosDescartados.push(correo)
        arrayCorreosPendientes.pop(correo)
     }
}
console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:"+  "longitud de array" + " ---");
console.log(arrayCorreosDescartados);
