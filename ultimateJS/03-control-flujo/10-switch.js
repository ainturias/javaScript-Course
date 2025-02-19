
// SWITCH
// Es una estructura de control de flujo que permite comparar una expresión con diferentes valores
// y ejecutar un bloque de código dependiendo de si se cumple o no la condición.
// Se puede usar con valores de tipo string, number o boolean.

// Estructura:
// switch (expresion) {
//     case valor1:
//         // código
//         break;
//     case valor2:
//         // código
//         break;
//     default:
//         // código
// }

// Ejemplo:
let accion = 'saludar';
switch (accion) {
    case 'saludar':
        console.log('Hola');
        break;
    case 'despedir':
        console.log('Adiós');
        break;
    default:
        console.log('No entiendo la acción');
}


