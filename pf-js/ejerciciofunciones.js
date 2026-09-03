
const num = () => {

    const numberSecret = Math.floor(Math.random()* 10) +1;
    let gano = false;
    for(let i=1; i<= 3; i++){
        const opc = +prompt("adivina el numero del 1 al 10");
        if (opc == numberSecret){
            console.log("Felicidades ese es el numero secreto :D");
            gano =true;
            break;
        } else {
            if(opc > numberSecret){
                console.log("El numero secreto es menor");
            } else {
                console.log("el numero secreto es mayor");
            }
        }

    }
    if (gano == false){
        console.log("Perdiste :( agotaste tus tres intentos para adivinar el número secreto");
    }
}
num ();
