/**
 * Diferencias
 * hoisting
 * Es un proceso por el cuel las fuction declaration y las variables escritas con var pasan a estar hasta arriba ddel proceo de ejecucion.
 * funcion expression y arrow function no pasan por este proceso
 */


console.log("funcion declaratio " + multiplyNumbers(20, 6));
const addNumber = function(a, b){
    return a + b;
};

const divideNumbers = (a, b) => a / b;

function multiplyNumbers (a,b) {
    return a* b;
} 

console.log(divideNumbers(10, 2)); 

