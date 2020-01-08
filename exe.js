/*
Haga un ciclo for de 100 iteraciones que imprima "fizz" en los múltiplos de 3, 
"buzz" en los múltiplos de 5 y "fizzbuzz" en los múltiplos de 3 y 5
*/

/* 

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i + " fizzbuzz");
    else {
        if (i % 5 === 0) console.log(i + " buzz");
        else if (i % 3 === 0) console.log(i + " fizz");
        else console.log(i);
    }
}

 */

/*
Haga que este código funcione:
*/

// [1,2,3,4,5].duplicator();
// [1,2,3,4,5,1,2,3,4,5]

/*
Para realizar el método duplicator() debe extenderse el tipo Array utilizando 
la propiedad Array.prototype que representa el prototipo del constructor de Array.
*/

// Extendiendo Array con un método llamado "duplicator".
/* Array.prototype.duplicator = function() {
   // Se utiliza el método "concat".
   return this.concat(this);   
}

 */

/*  9999 */

/* 
888 */

//**********************************
// what's the output

// var is hero objt
/* 
let hero;

hero = {
       // name is defined
       _name : 'John Doe',
       //secret id holds the id of hero
       getSecretIdentity: function () {
               return this._name;
       }
};

var StoleSecretIdentity = hero.getSecretIdentity;

// string = nothing = undefined
console.log(StoleSecretIdentity());
// get the name defined in the var 
console.log(hero.getSecretIdentity());

 */
// ************************************

// how do you create a private var in js

/* 
function secretVariable() {
    var private = "secret fucking code, tired, and I wanna get done this shit quickly";
    return function() {
        return private
    }
}

var getPrivateVariable = secretVariable()

console.log(getPrivateVariable())
 */

// what is the output ?

/*
 var num = 4;

 function outer(){
     var num = 2
     function inner(){
         num++;
         var num = 3;
         console.log(num)
     }
     inner();
 }

 outer();
 
 */

/* 

function myFunc(theObject) {
    theObject = {make: '1', model: '2', year: 3};
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998},
  var x, y;
  
  x = mycar.make;     // x toma el valor "Honda"
  
  myFunc(mycar);
  y = mycar.make;     // y sigue con el valor "Honda" 
  


 */

// -+-+-+-+-+-+-+-+--+-+--++-+++-+-+-+-+-+-++-++-+

/*
escribir una funcion que recibe un arreglo de enteros y retorna otra funcion que 
recibe como paramentros cualquier funcion que espere como paramentro la suma de 
los elemtnos del aarrelgo original
la solucion debe permitrme ejecutar 
algo como suma ([1,2,3] X resultado =< console.log(resultado)

JS
 */
/*
------------------------------------------
*/

/* 
    const EntNum = [1, 2, 3, 4, 5];

 */

// This is asynchronous...
/* function processData(callback) {




};

console.log(x) */

/*
escribe en react (tipo funcion)
que acepte una lista de nombres, los ordene e imprima
como una lista HTML ordenada (ol).


*/
/* 

let StuScore = 41
let MaxScore = 100
let percent = (StuScore / MaxScore) * 100

console.log(percent)


 */
/* 
let fah = 50;
let cel = ((fah - 32) * 5) / 9;
let kel = ((fah + 459.67) * 5) / 9;

console.log(cel);
console.log(kel);
 */




// just preparing algorithms
/* 
console.time("100 objs in for loop");

function NewObj(param) {
 this.value = param;
}

for (var i = 0; i <= 100; i++) {
 // new objts
 var Obj = new NewObj([i]);
}

console.timeEnd("100 objts in for Loooooop");


 */


let temp = 32
let isFreezing = temp <= 32

/* 
console.log(isFreezing);
 */

 //creating if statements 

if (isFreezing) {
    
}


let age = 26

let isChild = age <= 7

let isSenior = age >= 65

console.log(isChild);

console.log(isSenior);







