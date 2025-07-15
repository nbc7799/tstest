"use strict";
// 문자열
const a = "";
const b = "";
const c = ``;
let myName = "Steve";
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
// message = 123;
// 숫자 타입 (number)
let n = 100;
// n = "100";
// n.toUpperCase();
let count = 10;
let price = 9.99;
let temperature = -15;
let total = count * price;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
//불리언타입
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are opened");
}
if (!isCompleted) {
    console.log("job not complete");
}
// && || !
let isAvailable = isOpen && !isCompleted;
// null타입
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("joey");
//any 타입
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
