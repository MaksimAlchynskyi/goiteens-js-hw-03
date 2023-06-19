"use strict"
const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "maksym.alchynskyi@gmail.com";
console.log(email.length)
console.log(email.includes("@"))

const myPartOfWord = "My";
const namePartOfWord = "name";
const isPartOfWord = "is";
const fullName = `${myPartOfWord} ${namePartOfWord} ${isPartOfWord} Maksym`
console.log(fullName);


const userName = "Maksym";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)