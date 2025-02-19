
// FOR IN
// El bucle for in es una forma de recorrer las propiedades de un objeto.

// Estructura:
// for (let variable in objeto) {
//     // código
// }

let user = {
    id: 1,
    name: 'alex',
    age: 26,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

/* 
Primera iteración:
    prop = 'id', entonces user[prop] = user['id'] = 1.
Se imprime:
    id 1
*/



