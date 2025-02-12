
// short-circuit

// --- Falso ---
// false
// 0
// ''
// null
// undefined
// NaN
//All Son conocidos como valores falsy

// Ejemplo:
let nombre = 'Alex';    //de esto '' le añadimos algo, cambia el resultado.
let userName = nombre || 'Desconocido';
console.log(userName); 

function fn1() {
    console.log('fn1');
    return false;   //era true
}

function fn2() {
    console.log('fn2');
    return true;
}

let resultado = fn1() && fn2();

// En resumen si el primer valor es falso, no se ejecuta el segundo valor.
// sirve para hacer validaciones de si algo es falso o verdadero y ejecutar algo en base a eso.



