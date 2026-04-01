alert("Hello World");

let name = "Mustafa";
console.log(name);

let message = "Assalamualaikum";
alert(message);
console.log(message);

alert("Welcome to JavaScript");

let firstName = "Muhammad";
let lastName = "Usman";

alert(firstName + " " + lastName);
console.log(firstName + " " + lastName);

let FirstName = "Sufiyan";
let Age = "17 year";
console.log(FirstName + " " + Age);
alert(FirstName + " " + Age);

let x = 10;
let y = 20;
let total = x + y;
alert(total);

let Total = 20 + 10 - 5;
let marks = 200 / 20;
alert(marks);

let fee = 12 / 1000;
alert(fee);

alert("Welcome To Javascript");
alert("Mustafa Hassan");

let countryname = "Pakistan ";
let country = "Zindabad";
alert(countryname + country);

let ageText = "My age is 15";
alert(ageText);

console.log(total);

const student = {
  fullname: "mustafa hassan",
  class: 9,
  school: "abc school",
  rollno: 20,
  age: 15,
};

student["fullname"] = "usman";
console.log(student["fullname"]);

student["age"] = student["age"] + 1;
console.log(student["age"]);

console.log(Total);

let TOtel = 20 / 6;
console.log(TOtel);

let TOTal = 10 % 7;
console.log(TOTal);

let b = 20 - 9;
console.log(b);

let c = 4 * 6;
console.log(c);

let d = 15 / 3;
console.log(d);

let e = 17 % 4;
console.log(e);

let A = 10;
A += 5;
console.log(A);

A -= 3;
console.log(A);

A *= 2;
console.log(A);

A /= 4;
console.log(A);

A %= 4;
console.log(A);

let s = 20;
let bb = 10;

console.log("a + b =", s + bb);
console.log("a - b =", s - bb);
console.log("a * b =", s * bb);
console.log("a / b =", s / bb);

let a = 7;
a++;
console.log("a =", a);

// loop
for (let count = 1; count <= 5; count++) {
  console.log("mustafa hassan");
}

// array
let names = ["mustafa", "hassan", "usman", "ahmed"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// functions
function myFunction() {
  console.log("welcome to javascript");
}
myFunction();

function sum(a, b) {
  return a + b;
}
let val = sum(10, 20);
console.log(val);

// vowels
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if ("aeiouAEIOU".includes(char)) {
      count++;
    }
  }
  console.log(count);
}

countVowels("mustafa hassan");

// foreach
let nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
  console.log(num * num);
});
