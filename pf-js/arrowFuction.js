/**Funciones flecha (arrow function) 
 * ! IMPORTANTE
 * tienen un Return implicito
 * quere decir que si tu funcion se puede escribir en una linea sin necesitad de llaves, no es necesario poner la palabra return la espresion a la que apunte la flecha sera retornada
 * 
 * expreciones lambda 
*/

const addTwoNumbers = (a ,b) => a+b;
let result = addTwoNumbers(3,4);
console.log (`el resultado de sumar 3 + 4 es ${result}`);

//funcion flecha en varias partes
const evenOrOdd = (limit) =>{
    for(let i = 1; i <=limit; i++){
        if (i %2 == 0){
        console.log("es par");
    }else{
        console.log("es impar");
    }
    total += i;
    }
    return total 
    
};
console.log(evenOrOdd(100));