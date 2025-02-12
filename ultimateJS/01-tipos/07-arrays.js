// Definir un array
let animales = ['perro', 'gato', 'pez', 'loro', 'tortuga'];

console.log(animales);

// Acceder a un elemento
console.log(animales[0]); // perro

// Modificar un elemento
animales[0] = 'caballo';

console.log(animales); 

// Añadir un elemento
animales[5] = 'conejo';
console.log(animales);

// Ojo cuando añadimos un elemento en una posición que no existe
animales[10] = 'elefante';
console.log(animales);
console.log(animales[8]);
console.log(typeof animales);
console.log(animales.length);
