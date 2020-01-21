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


/* let temp = 120
let isFreezing = temp <= 80
 */
/* 
console.log(isFreezing);
 */

 //creating if statements 
/* 
if (isFreezing) {
    console.log("It is really cold outside");
}

if (temp >= 110) {
    console.log("it is way too hot outside");
}


let age = 65 */
/* 
let isChild = age <= 7

let isSenior = age >= 65

console.log(isChild);

console.log(isSenior);

 */


 // boolean advanced


/* 
let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}
 */



// Challenge area
/* 
let temp = 4

if (temp <= 32) {
    console.log('It is freezing outside')
} else if (temp >= 110) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is pretty nice out')
} */



/* 
let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)





 */
/* 
let name = 'Andrew'

if (true) {
    //let name = 'Mike'

    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}



 */


 var locales = {
     europe : function() {
         var myFriend = "Monique";
         var france = function() {
             var paris = function() {
                 console.log(myFriend)
             }
             paris();
         }
         france()
     }
 };

locales.europe();




var  test = "I'm global";
function testScope() {
    var test = "I'm local";
    console.log(test)
}

testScope() // output : I'm local
console.log(test); // output: I'm global


// ------------

console.log("-------------------------------------")


let greetUser = function (num) {
    console.log("num")
}


greetUser(3);

console.log("-------------------------------------")


function showState() {     // moved to the top (function declaration)
    console.log("Ready");
  } 
  
  var showState;            // moved to the top (variable declaration)
  
  showState();  
  
  showState = function() {   // left in place (variable assignment)
    console.log("Idle");
  };


  console.log("-------------------------------------")

// writing a simple callback in js

function funcionPrincipal(callback){
    // alert('hago algo y llamo al callback avisando que terminé');
    console.log("hago algo y llamo al callback avisando que terminé")
    callback('Miguel');
}
 
funcionPrincipal(function(nombre){
   // alert('me llamo ' + nombre);
   console.log('me llamo ' + nombre)
});

console.log("-------------------------------------")
// tipos de funciones 


// SIMPLE FUNCION PARA PRACTICA DE CONOCIMIENTOS 
// la funcion tiene los siguientes parametros 
function sumar(numero1, numero2){
    // realizo la operacion matematica 
    var resultado = numero1 + numero2;
    // alert('El resultado de ' + numero1 + ' + ' + numero2 + " = " + resultado);
    // imprimo resultado 
    console.log('El resultado de ' + numero1 + ' + ' + numero2 + " = " + resultado);
}
 
// asigno valores a variables 
var numero1 = 4;
var numero2 = 5;
// entrego los parametros a la funcion convertidos en numeros 
sumar(numero1, numero2);


console.log("-------------------------------------")
//


function calcularIVA(precio){
    preciototal = precio * 1.21;
    return preciototal;
}
 
var precio = 23;
var precioIVA = calcularIVA(precio);
console.log(precioIVA);



console.log("-------------------------------------")


let yo = {
    nombre: "yeison",
    edad: 22,
    hace: "engineer",
    hablar: function () {
      console.log(this.nombre);
      console.log(this.edad);
    },
    profesion: function () {
        console.log(this.hace)

    }
  };
  
  yo.hablar(); // yeison
  yo.profesion()

// ----

console.log('.................')


let Persona = function (nombre, edad, madre, padre, hermano, edad_h) {
    return {
      nombre: nombre,
      edad: edad,
      hablar: function() {
        console.log(this.nombre);
        console.log(this.edad);
      },
      madre: {
        nombre: madre,
        hablar: function() {
          console.log(this.nombre);
        }
      },
      padre: {
          nombre: padre,
          hablar: function() {
              console.log(this.nombre);
          }
      },
      hermano: {
        nombre: hermano,
        edad_h: edad_h,
        hablar: function() {
            console.log(this.nombre);
            console.log(this.edad_h);
        }
    }
  }
};
  
  const ana = Persona("Ana", 30, "Clara", "Alfonso", "Alfonso", 50);
  
  ana.hablar(); // Ana
  ana.madre.hablar(); // Clara
  ana.padre.hablar();
  ana.hermano.hablar();



  console.log('.................')




  