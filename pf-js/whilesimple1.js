let num = prompt("Ingrese un numero positivo");
num= Number(num);
while (num<1){
    num = prompt("Ingrese un número positivo");
    num=Number(num);
}
alert(`el numero ${num} es aceptado`);
