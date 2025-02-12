
//Personajes de TV
let nombre = "Homero Simpsson";
let anime = "Los Simpsons";
let edad = 45;

let personaje = {
    nombre: "Homero Simpsson",      //conocido como par llave-valor, atributo, propiedad.
    anime: "Los Simpsons",
    edad: 45,                       //recomendable la coma al final de cada propiedad
};

console.log(personaje);
console.log(personaje.nombre);  //para acceder a una propiedad de un objeto se usa el punto.
console.log(personaje['edad']); //otra forma de acceder a una propiedad de un objeto.

//Modificar una propiedad de un objeto
personaje.edad = 56;
personaje['edad'] = 58;

let llave = 'edad';
personaje[llave] = 60;

//Para eliminar una propiedad de un objeto
delete personaje.anime;

console.log(personaje);


