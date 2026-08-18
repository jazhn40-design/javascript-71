/**
 * Condicionales:
 * Serie de condiciones para que algo suceda
 * 
 * En programacion para el manejo de estas condicionnes tenemos
 * ! el bloque if else
 * ? bloque if pregunta por una condicion en caso de que esta condicion sea 
 * ?verdadera ejecuta  un bloque de código,eb de falso no ejecuta nada 
 * ? else maneja la ejecución de código en caso negativo
 * 
 * Lo que se coloca dentro del if, debe ser algo que genere
 * * un valor True o False (tipo de dato boolean)
 */

const birthYear = Number (prompt("Ingresa tu año de nacimiento "));
let edad = 2026 - birthYear;
console.log(birthYear);
console.log(edad);
//alert("Tu tienes  " + edad + " años.");
/**
 * todo: Operadores lógico
 * Sirven para hacer operaciones cuyo resultado es verdadero o falso
 * == es el simbolo de igualdad en programación
 * Mayor que >
 * 2 > 1 == verdadero
 * 1 > 2 == Falso
 * 0 > 0 == Falso
 * 
 * Menor que <
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 * 2 < 2 == Falso
 * 
 * Comparador de igualdad ==
 *  2 == 2 == verdadero
 * 3 == 1 == falso
 * 
 * Mayor o igual que >=
 * 2 >= 2 == verdadero
 * 2 >= 1 == verdadero
 * 2 >= 3 == falso
 * 
 * menor o igual que <==
 * 4 <= 4 == verdadero
 * 4 <= 5 == verdadero
 * 7 <= 5 == falso
 * 
 * Diferente de !=
 * 5 != 4 == true
 * 5 != 5 == false
 * 99 != 100 == true
 * 
 * negacion (not) !
 * !verdadero == Falso 
 * !Falso == Verdadero
 * !(4 <= 4) == falso
 * 
 * AND && Es un operador que devuelve 
 * ? verdadero solo si ambos lados de la expresion son verdadero
 * ? si un lado es falso todo el resultado se vuelve falso
 * verdadero && verdadero == verdadero
 * verdadero && falso == falso
 * falso && verdadero == falso
 * 
 * OR || Es un operador que devuelve 
 * ?falso si ambos lados de la expresion son falsos
 * ?si un lado de la expresion es verdadero devuelve verdadero
 * verdadero || falso == verdadero
 * falso || verdadero == verdadero
 * Falso || falso == falso
 */

/**
 * Dentro de los parentesis va la condicion que se va a ejecutar
 * Dentro de las llaves va el codigo que se a ejecutar en caso 
 * de que la condicion sea verdadero
 * 
 * 
 * ?else if
 * nos permite evaluar ms de una condicion
 * va asociado a un if
 */

if (edad >= 18) {
    alert("Bienvenido eres mayor de edad");
}else if (edad >= 6){
    alert("bienvenido entraste a  la primaria");
}else if (edad >= 1){
    alert("Felicidades sigues en el kinder");
}else {
    alert("Aun no estas muy bebe");
}