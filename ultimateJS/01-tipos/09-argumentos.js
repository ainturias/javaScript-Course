
function suma(a, b) {  //se llaman parámetros cuando se definen en la función
    console.log(arguments); //arguments es un objeto que tiene todos los argumentos que se pasan a la función
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);    //se llaman argumentos cuando se pasan valores a la función
console.log(resultado);
console.log(typeof suma);




