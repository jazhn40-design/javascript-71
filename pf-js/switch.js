/**
 * switch
 * Es una estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdad o falso
 * Si no que se basa en opciones 
 * ?Nos permite tener multiples ociones
 * ?Y con base en la opcion seleccionada ejecutar un bloque de codigo
 * ?tiene una respuesta por default, por si la opcion ingresada no esta en la lista
 * 
 * ? Se divide en casos
 * !documentacion: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
 * ? cada caso lleva su bloque de codigo y debe llevar al finalizar 
 * ? la palabra break
 * 
 * 
 * Nota:
 * 
 * todo:(expresiones "expression" : es todo aquello que genera un valor )
 * * ejemplos: una suma, usar una varibale, usar una funcion,
 * * texto, numero
 * todo: (Declaraciones "statement": no genera valor y por lo genera son estructuras de control o bucles)
 *  * ejemplos: el if, el switch, el for, el while
 */
/*let month = prompt("Ingrese el mes");*/
/**let month = prompt(`Selecciona uno de los siguientes meses:
    1. Enero
    2. Febrero
    3. Marzo`
)

switch(month){
    case "Enero":
        alert("Enero es el primer mes del año");
        break;
    case "Febrero":
        alert(`El mes ${month} es el segundo mes del año`)
        // "El mes " + month + " es el segundo mes del año"
        break;
    case "Marzo":
        alert(`El mes ${month} es el tercer mes del año`);
        break;
    case "Abril":
    case "Mayo":
        console.log("Abril y Mayo");
        break;
    default:
        alert("El mes seleccionado no aplica");
}*/
let pais = prompt(`Ingrese un pais de las siguientes opciones:
    1. México
    2. Argentina
    3. Canadá
    4. Japón
    5. Francia`)
switch(pais){
    case "México":
        alert(`La capital de ${pais} es la Ciudad de México`);
        break;
    case "Argentina":
        alert(`La capital de ${pais} es Buenos Aires`);
        break;
    case "Canadá":
        alert(`La capital de ${pais} es Ottawa`);
        break;
    case "Japón":
        alert(`La capital de ${pais} es Tokio`);
        break;
    case "Francia":
        alert(`La capital de ${pais} es París`);
        break;
    default:
        alert("El pais ingresado no aplica");
}