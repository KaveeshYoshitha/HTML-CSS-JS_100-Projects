let name = "Kaveesh";
let whatDoYouWannaBecome = "Programmer";
let gender = "Male";
let twitterHandle = "KaveeshY";
console.log(name);
console.log(whatDoYouWannaBecome);
console.log(gender);
console.log(twitterHandle);

let firstFavNum = 4;
let secondFavnum = 3;

console.log(firstFavNum + secondFavnum);
console.log(firstFavNum - secondFavnum);
console.log(firstFavNum * secondFavnum);
console.log(firstFavNum / secondFavnum);
console.log(firstFavNum % secondFavnum);
console.log(firstFavNum ** secondFavnum);

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favnumb = 9;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favnumb + undefined);

let favActorFirstName = "Christian";
let favActorLastName = "Bale";
let fullName = favActorFirstName + " " + favActorLastName;
let upperCase = fullName.toUpperCase();
let message = `My favourite actor is ${upperCase}, `;
message += `His best movie is TDK series`;

console.log(message);

let password;
if ((password = 8)) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too Long password");
} else {
  console.log("Please provide a password");
}

let fruit = "Apple";
switch (fruit) {
  case "banana":
    console.log("Banana is good");
    break;
  case "Orange":
    console.log("I am not a fan of orange");
    break;
  case "Apple":
    console.log("How you like them apples ?");
    break;
  default:
    console.log("I have never heard of that fruit");
}

for (let i = 0; i <= 1000; i++) {
  console.log("My name is Kaveesh Yoshitha", i);
}
let i = 0;
while (i < 5) {
  console.log("Kaveesh");
}
let i = 10;
while (i < 110) {
  console.log("Kaveesh", i);
  i++;
}

let i = 20;
do {
  console.log("Kaveesh", i);
  i++;
} while (i <= 420);

const favSinger = ["Chamara", "Shihan", "Justin"];
console.log(favSinger[0]);

let favNumbers = ["4", "3", "6", "9"];
console.log(favNumbers);

const mixedArr = ["KY", ["Otherarray"], 123, true];
console.log(mixedArr[1][0]);

const car = {
  type: "sports",
  model: "Lamborgini",
  color: "black",
};
console.log(typeof car);
console.log(car.type);
console.log((car.type = "Toyota"));

car.wheels = 4;
console.log(car);

function myFunction(x, y) {
  return x * y;
}
let p = myFunction(100, 9);
console.log(p);

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));

let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
  name: "jen",
  age: 22,
};

const arr3 = [...arr, ...arr2];
console.log(arr3);

const cloneUser = { ...user };
console.log(cloneUser);
