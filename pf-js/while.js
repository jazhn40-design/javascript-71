/**
 * Loops
 * Son estrucutas de control
 * Que nos permiten repetir n cantidad de veces que un bloque de codigo {}
 * 
 * ? tenemos 3 grandes loops
 * ? while
 * ? do while
 * ? for 
 */

/**
 * while
 * es loop que se ejecuta mientras una condicion sea verdadera
 * en cuanto esta condicion se vuelve falsa se detiene
 * !Importante 
 * ! Necesita un contador externo o una forma de parar
 * ! No OLVIDAR ACTUALIZAR EL CONTADOR
 * ! Puedes generar un bucle infinito
 */

//1. contador
let counter = 0;

//2.Iniciamos el bucle
while(counter <= 100){
    console.log(counter);
    counter = counter + 1;   
}
counter = 0;

while(counter <200){
    if(counter % 2 == 0){
        console.log(`El numero ${counter} es par`);
    } else {
        console.log(`El numero ${counter} es impar`);
    }
    //el operador de incremento summa 1 al valor de la variable
    counter ++;
}