
/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array.
 */

// si el indice es mayor a la cantidad del array, me tiene que decir que no es valido o que no existe.

// ----------- #1 --------------
// function getbyIdx(arr, idx) {
//     if (arr.length > idx && idx >= 0) {
//         return arr[idx];
//     } else {
//         return 'El indice no existe en el array';
//     }
// }

// -------------- #2 ---------------
function getbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'El indice no existe en el array';
    }
    return arr[idx]; 
}

let resultado = getbyIdx([1, 2], 1);

console.log(resultado);


