//functions - imput [arguments], code, output

let greetUser = function() {
  console.log("welcome user");
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
  // console.log(num)
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// challenge area
// convertFarherenheittoCelcius
// Call a couple of times (32 .> 0) (68 ->20 )
//Print the converted valules

let converter = function(fahrenheit) {
//  let fahrenheit = 50
  let celius = ((fahrenheit - 32) * 5) / 3;
  return celius
};

 let tempOne = converter(32)

console.log(tempOne)

/*let converter = */