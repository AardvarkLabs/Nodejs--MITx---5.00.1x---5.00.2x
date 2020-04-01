let converter = function(fahrenheit) {
  //  let fahrenheit = 50
  let celius = ((fahrenheit - 32) * 5) / 3;

  if (celcius <= 0) {
      let isFreezing = true
  }
  return celius;
};

let tempOne = converter(32);
let tempTwo = converter(68);
console.log(tempOne);
console.log(tempTwo);
