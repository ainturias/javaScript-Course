
/**
 * Se lo utiliza para comparar distintas variables entre si, o una variable con otra cosa.
 */

let a = 8;
// Relacionales
// console.log(a > 8);    // false
// console.log(a >= 8);    // true
// console.log(a < 8);    // false
// console.log(a <= 8);    // true

// Igualdad
console.log(a == 8);    // true //el simbolo == es para comparar si son iguales los valores y no los tipos de datos
console.log(a != 8);    // false
console.log(a === '8');    // false   //el simbolo === es para comparar si son iguales los valores y los tipos de datos
console.log(a !== '8');    // true

//Nota: cada vez que utilizamos estos operadores, el resultado es un booleano, es decir, true o false.

//NOTA: 
//Estos 2 se utilizaban antiguamente por que son propensos a errores.
console.log(a == 8);       
console.log(a != 8);       
//Estos 2 son los que se utilizan actualmente. 
console.log(a === '8');   
console.log(a !== '8');    
