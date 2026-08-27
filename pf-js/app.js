/**
 * Estructuras de tatos
 * Que son? y porque son importantes?
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos
 * para manipular estos datos de manera mas eficiente
 * Dato no representa nada por si solo
 * Datos juntos y dandoles contexto se vuleven información
 * 
 * * Array 
 * Es una strucuta de datos ordenada 
 * !   Importante
 * Los datos se identifican por un indice, el indice empieza a contar dese cero 0
 * El tamaño real se cuenta desde el 1
 * 
 * ! Importante pero particular de JS
 * Podemos guardar cualquier tipo de dato dentro del array, incluso combinaciones 
 * Tienen tamaño dinamico
 */

// Definición de un array
// es comun que los arrays se inicialicen con const, si permite seguir agregando cosas porque no modifica la cajita
const arrayVacio = [];

const arrayContenido = ["Alberto", 20, true];
const months = ["Jan", "March", "April", "June"];
/**  Obtencion de un elemento guardado en un array 
 * Obtencion de un elemnto guardado en un array
 * notacion corchete
*/
console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 * Ingresar datos al array
 * 1.unshift para ingresar elementos al comienzo del array
 * 2.push para ingresar elementos al final del array
 */
console.log("Array antes");
console.log(arrayContenido);
arrayContenido.unshift("Javier"); //ingresa datos al inicio
console.log("array despues");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.push("Daniel", false, "Alejandra", 28);//ingresa datos al final
console.log("array despues");
console.log(arrayContenido);

/**
 * Eliminar datos
 * 1. Shidt elimina y devuelve el elemnto en la posicion 0
 * 2. popo elimina y devuelve el ultimo elemnto del array
 *  NOTA
 *  Lo que va dentro de los parentesis de un metodo o fucionn se conoce como argumento
 */
console.log("Array antes");
console.log(arrayContenido);
//arrayContenido.shift();
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
//arrayContenido.pop 
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("array despues");
console.log(arrayContenido);

/**
 * Reasignar el valor de un indice
 */
let valorAnterior = arrayContenido[0]; // esto si queremos guardar el valor antes de reasignarlo
arrayContenido[0] = "Liz";
arrayContenido[2] = "Josue"
console.log("El valor anterior es: " + valorAnterior);
console.log(`Resultado de la reasignacion de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**
 * splice
 * Elimina elemntos o agrega
 */
console.log("========= Splice =======");
arrayContenido.splice(1, 1); // (1 -> es la posicion de donde empezara , 1 -> es la cantidad de elementos a eliminar)
console.log(arrayContenido);
arrayContenido.splice(1, 2);
console.log(arrayContenido);
 
// agregar elemntos
months.splice(3, 0, "Mar");
console.log(months);

/**
 *  Splice tiene 3 partes que van  dentro de los parentesis 
 * (1,2,3)
 * 1. Indica la posicion donde va a iniciar a eliminar o agragar
 * 2. cuantos elemntos va a eliminar
 * 3. son elementos a agregar 
 */
