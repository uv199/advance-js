/*

1;
12;
123;
1234;
12345;


let arr =  "abcdefghijklmnopqrstuvwxyz".split("")
console.log("-----------  arr----------->", arr)
let x = 0;
for (let i = 0; i <= 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += `${arr[j]}`;
    x++;
  }
  console.log(str);
  str = "";
}
*/

let no = ["11423424489", "1342142354234"];
let x = 0;
for (let i = 0; i < no.length; i++) {
  let currentNo = +no[i];
  let afterOne = +no[i + 1];
  let afterTwo = +no[i + 2];
  let afterThree = +no[i + 3];

  let conditioOne = x === 2;
  //   let conditioTwo = currentNo === afterOne && afterOne === afterTwo;
  let conditioTwo = false;
  let conditioThree =
    afterOne === currentNo + 1 &&
    afterTwo === currentNo + 2 &&
    afterThree === currentNo + 3;

  if (conditioOne || conditioTwo || conditioThree) {
    console.log("No is Unique");
    break;
  }

  if (no[i] === no[i + 1]) x++;
}
