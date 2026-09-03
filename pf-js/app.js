/**
 * Objetos en JS (JSON)
 * Son una estructura de datos, similar a diicionarios o mapas
 * ?se organiza en pares
 * ?llave : valor asociado
 * ?es una estructura de datos desordenada
 * ?aqui los datos o los valores se obtienen mediante su llave
 * 
 * ! importante
 * ! NO son los mismos objetos que los de programación orientada a objetos
 * ! las llaves NO se pueden repetir
 * 
 *  Curiosidades
 * Esta notacion se volvio el estandar para el intercambio de informacion 
 * entre cliente  y servidor en el web 
 * JSON (javascript objet notation)
 * 
 * Nota:
 * todas las funciones por defecto dan undifine
 */

const particpante = {
  name: "Natalia",
  lastame: "Coca",
  age: 27,
  isAlive: true,
  
  sayHi: function () {
    console.log("Natalia dice Hola");
  },
};
 
// Como acceder a los valores
// 1. Notacion punto (mas usado)
// 2. Notacion corchete

console.log(
  `El nombre de la participante es ${particpante.name} obtenido con notacion punto,`
);


console.log(
  `La edad  de la particioante es ${particpante["age"]} obtenido con la notacion corchete, `
);

particpante.sayHi();
// como agregar un nuevo par llave valor
console.log(particpante);
// como agregar un nuevo par llave valor
particpante.favoriteAnimals = ["tortuga","Gato","Cuervo"];
console.log(particpante);

// agregando un objeto como valor a llave address
particpante.address ={
    country: "Mexico",
    extNum: 69, 
};

// como accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto, u otro array)

console.log(
    `El primer animal favorito de ${particpante.name} es ${particpante.favoriteAnimals[0]}`,
)
console.log(particpante.favoriteAnimals);

console.log(
    `El numero interior de ${particpante.name} es ${particpante.address["extNum"]}`
);
console.log(particpante.address);

console.log(
    `El pais de origen de ${particpante.name} es ${particpante.address.country}`
);
 
// COMO MODIFICAR EL VAALOR DE UNA LLAVE
particpante.age = 25;
console.log(particpante.age);

// como eliminar una llave 
delete particpante.ch;
console.log(particpante);

// como iterar sobre el objeto
for(const llave in particpante){
    console.log(`El valor de la llave ${llave} es ${particpante[llave]}`); // aca si es necesario el corchete no se puede hacer solo con un punto
};
