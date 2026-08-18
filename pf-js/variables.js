/**
 * En javascrip ha 3 formas de declarar variables 
* !Existe una forma que ya no se recomienda su uso 
* !Var
* Al proceso de crear una variable y darle un valor se le llama asignación
* 
* Las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
* ? let nombreVariable = valor;
* 
* * el operador = se conoce como operador de asignación
* Una vez creada una variable podemos usarla en otros lugares del codigo
* utilizando su nombre, las variables al ser utilizadas no ban entre "comillas"
* 
* Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran:
* ! const nombreVariable = valor;
* 
* Nota:
* palabra reservadas: son palabras que utilizan el lenguaje de programacion
* y si intentamos usarlas en otros lador pueden generar errores
* */

let nombre = "Josue"; //tipo String
console.log(nombre);
let name = "Alejandro"
const birthYear = 1993; //tipo Numero
console.log(birthYear);

/**Reasignando una vriable (camniando el vor que tiene) 
 * Cuando reasignamos una variable (una variable ya creada)
 * ! Ya no es necesario poner let
*/ 

nombre = "Jazmin"
console.log(nombre);

/**Seccion de prueba 
 * birthYear = 1995
*/

/**Concatenar:
 * Nos permite pegar el valor de una variable a un texto
 */

console.log("Hola soy " + nombre + " y estoy en gen con " + name + " naci en el año " + birthYear);
