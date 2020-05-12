// Declaracion de variables globales
var a=10;
var b=20;
var d='10';
var e=3, cuad=0;

console.log("Variables Globales a = "+a+"b= "+b);
suma(a,b);
resta(a,b);
por(a,b);
concatena(a,d);
resto(b,e);
cuad = cuadrado();
console.log("El cuadrado de la variable global  \"c\" es:  "+c*c);



// Declaracion de Funciones
//Funcion suma de los valores a y b

function suma(a,b) {
    var expresion = 'La suma de las variables globales a y b es:';
    var c=0;
    c=a+b;
    console.log(expresion+" "+c);

}   

function resta(a,b) {
    var expresion = 'La resta de las variables globales a y b es:';
    c=0;
    c=a-b;
    console.log(expresion+" "+c);

}   

function por(a,b) {
    var expresion = 'El Producto de las variables globales a y b es:';
    c=0;
    c=a*b;
    console.log(expresion+" "+c);

}   

function concatena(a,d) {
    var expresion = 'La concatenacion de a y d es:';
    c=0;
    c=a+d;
    console.log(expresion+" "+c);

}  

function resto(b,e) {
    var expresion = 'El residuo es:';
    c=0;
    c=b%e;
    console.log(expresion+" "+c);

}  

function cuadrado(){
    var expresion ='El cuadrado de la variable a local \"c\" es: ';
    var a=7, c=0;
    c=a*a;
   console.log(expresion+" "+c);
   return c;

}

/*
function resta() {}     //Funcion diferencia de los valores a y b
function por() {}       // Funcion multiplicacion de los valores globales a y b
function div() {}       // Division de los valores globales a y b
function concatena() {} // Tipado de Valores distintos String y Numero
function resto() {}     
function cuadrado() {} */