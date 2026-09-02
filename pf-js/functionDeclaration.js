// Declarar la funcion
function saludar(){
    console.log("hola");
}

//usar la funcionn (invocsar o llamar)
saludar();
saludar();
saludar();

//funcion con parametros
function saludarConNombre(name, edad){
    console.log(`hola ${name} mucho gusto en conocerte no sabia que tenias  ${edad} años`);
}

//pasando argumentos a una funcion 
saludarConNombre("Josue", 32);
saludarConNombre("Liz", 27);
saludarConNombre(27, "hola");

/**
 * 
 * funcion que retorna algo
 * ! importante 
 * cuando usamos return
 * ! 1. Termina la ejecucion de la Funcion
 */

//funcion que retorna algo
function multiplyToNumbers(a,b){
    if(typeof a == "number" && typeof b=="number"){
        return a*b;
    }else{
        return "por favor envia dos  numeros";
    }
    console.log("nunca me vas a ver");
}

// aqui no voy a ver nada
multiplyToNumbers(2, 3);

//imprimiendo el valor de retorno en consola
console.log(multiplyToNumbers (3, 5));
console.log(multiplyToNumbers (3, "josue"));


