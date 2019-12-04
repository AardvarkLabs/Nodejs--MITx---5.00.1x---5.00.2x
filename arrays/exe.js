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

// what's the output

// var is hero objt
var hero = {
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
