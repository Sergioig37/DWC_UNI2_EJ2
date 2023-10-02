////// DWEC03.Ejercicio sobre la clase Math
/*
   Ejercicio propuesto en las transparencias. Fijarse especialmente en cómo se usan los métodos de Math como clase estática
*/

var x,y;
x = prompt("Introduce un número");
y = prompt("Introduce otro número");
console.log(typeof(x));
x=+x;
console.log(typeof(x));

//El número Y redondeado al alza al siguiente entero
console.log ("El número "+y+" redondeado al alza es:"+Math.ceil(y));
//El número X redondeado a la baja al anterior entero
console.log ("El número "+x+" redondeado a la baja es:"+Math.floor(x));
//El entero más próximo de Y
console.log ("El entero más próximo de "+y+" es:"+Math.round(y));
//Un valor aleatorio entre 0 y 1.
console.log ("Un valor aleatorio entre 0 y 1 es "+ Math.random());
//El valor de X elevado a Y
console.log ("El valor de "+x+" elevado a "+y+" es "+ Math.pow(x,y));
//La raíz cuadrada de Y
console.log ("La raíz cuadrada de "+y+" es:"+Math.sqrt(y));
//El máximo y el mínimo entre X e Y
console.log ("El máximo entre "+x+","+y+" es "+Math.max(x,y));
console.log ("El mínimo entre "+x+","+y+" es "+Math.min(x,y));
