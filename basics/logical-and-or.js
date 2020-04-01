let temp = 65;

if (temp >= 60 && temp <= 90) {
  console.log("it is prety nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log("do not go outside");
} else {
  console.log("eh. do what you want");
}

// challenge area
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// are both began ? ONly offer up vegan dishes
// at least one vegan? make sure to offer up some vegan options
// else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("we offer vegan food");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("we offer some vegan food for at least one person");
} else {
  console.log("you can choose wathever you want");
}
