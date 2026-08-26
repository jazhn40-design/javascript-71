/**
 * do while
 * !El bucle do while siempre se ejecuta por lo menos una vez 
 * al ejecutar primero y luego evaluar
 * te permite tener una ejecuvion garantizada
 * 
 * !necesita un contador externo
 * !no debemos olvidar actualizar dicho contador 
 * 
 */

let counter = 200;
do{
    console.log("Hola");
    console.log(counter);
    // operador de suma y asignacion
    counter += 1; //esto es igual que esto pero sin tanto codigo ->counter = counter + 1;<-

}while (counter <= 100);
console.log(counter);
