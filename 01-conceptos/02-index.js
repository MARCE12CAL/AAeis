//*Conceptos basicos de JavaScript
//* Variables
var name="Juan"; //Legacy
let lastname= "Perez"; //Moderna
lastname="Gómez";
//*Constantes
const PI = 3.1416; //No se puede cambiar
const fullname= "Juan Perez";
 
console.log (name,lastname, PI, fullname);

//*Tipos de datos
// Primitivas
let string="Hola mundo"
let number ="100";
let boolean= true;
let nullValue=null;

// !no hacer
let undefinedValue= undefined;

console.log(nullValue);

//metodos de lso tipos de datos 
//console.log (toUpperCase());
//console.log (numer.toFixed(5));
//console.log(null,include("a"));
//tipado dinamico
let newVariable="hola"
newVariable=100;
console.log(newVariable);
newVariable= true;
console.log(newVariable);
 

//funciones 



function suma (a,b){
    return a+b;
}
console.log(suma(5,10));


function arrowSuma (a,b){
    return a+b;
}
console.log(arrowSuma(5,10));{
    return a+b;
}
 

//Arrays 
const array =[1,2,3,4,5];
console.log(array[1]);
array.include(2);
console.log(array).include("a");
const objet={
    name:"Juan",
    age:30,
    isStudent:false,
    grades:[8,9,10],
    observations:{
        message:'Good job',
        success: {
            status: true,
        },
    },
};
 //Condicionales
 if(number<200){
    console.log("El número es menor a 200");
    }else{
        console.log("El número es mayor  200");
 }
