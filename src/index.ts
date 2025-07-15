// 문자열
const a: string = "";
const b: string = "";
const c: string = ``;

let myName: string = "Steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();

// message = 123;

// 숫자 타입 (number)
let n: number = 100;

// n = "100";
// n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let total: number = count * price;

let infinity: number = Infinity;

let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

//불리언타입
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are opened");
}

if (!isCompleted) {
  console.log("job not complete");
}

// && || !
let isAvailable: boolean = isOpen && !isCompleted;

// null타입

let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("joey");

//any 타입

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
