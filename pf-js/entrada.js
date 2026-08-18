/**
 * Prompt:
 * 1. Hay que asignar su uso a una varible para luego poder usar el valor que ingreso el usuario
 *      1.2 Usar el valor inmediatamente 
 * !Importante
 * 1. NO se recomienda su uso en aplicaciones en produccion
 * 2.Bloquea el código, esto quiere decir que el codigo que esta debajo 
 * de donde escribimos el uso de prompt no se va a ejecutar, hasta que el usuario ongrese algo.
 * 3. No se puede personalizar
 * 4. Todo lo que ingresa mediante prompt siempre es un string
 * 
 * NOTA: 
 * ? \n es un caracter que nos inserta un salto de linea
 */

const edad = prompt("Ingresa tu edad", 15);
const nombre = prompt("Ingresa tu nombre");
console.log(edad);
console.log("Hola soy " + nombre + ", tengo " + edad + " años.");
alert("Hola soy " + nombre + ", tengo " + edad + " años.")

// const SPfav = prompt("Ingresa tu serie o pelicula favorita")
// const personaje = prompt("Ingresa tu personaje favorito de la pelicula o serie que ingresaste anteriormente")
// const motivo    = prompt("¿Por qué es tu favorito?")
// console.log( "Mi pelicula o serie favorita es " + SPfav);
// console.log("Mi personaje favorito de esa serie o pelicula es " + personaje);
// console.log("Es mi favorito porque " + motivo);
// alert("Mi pelicula o serie favorita es " + SPfav + ", mi personaje favorito de esa serie o pelicula es " + personaje +", es mi favorito porque " + motivo + ".");