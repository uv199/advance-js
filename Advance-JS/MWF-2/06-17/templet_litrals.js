/*
camle case - firstName - variable
pascal case - FirstName -> class/file
snake case - first_name  -> folder


// template litrals

let name = "urvish";

// let greet = "hello name Good morning..!"
let greet = `hello ${name} good morning`;
console.log("-----------  greet----------->", greet);

*/
let nameArr = ["urvish", "mit", "harshil", "mohini"];

for (let ele of nameArr) {
  //   console.log("hello " + ele + " good morning", ", how are you ", ele);
  console.log(`hello ${ele} good morning, how are you ${ele}`);
}