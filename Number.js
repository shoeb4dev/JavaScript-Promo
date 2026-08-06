let Number = 0b1010;

console.log("type is = " + typeof Number + " and value is " + Number);

//ToFixed data type is used to convert number into string and also it is used to round the number upto given decimal places.

let num2 = 76.2156;

console.log(num2.toFixed(3));

//ToPrecision data type is used to convert number into string and also it is used to round the number upto given significant digits.

let num3 = 123.76152;

console.log(num3.toPrecision(6));

//ToString data type is used to convert number into string.

let num4 = 123;

console.log(typeof num4 + " " + num4.toString());

//parseInt data type is used to convert string into number.

let num5 = "123";

console.log(typeof num5 + " " + parseInt(num5));

//toLocaleString data type is used to convert number into string and also it is used to round the number upto given decimal places.

let num6 = 123456.789;

console.log(
  num6.toLocaleString("ar-EG", { style: "currency", currency: "EGP" }),
);

let num8 = NaN;

console.log(
  num8.toLocaleString("ar-EG", { style: "currency", currency: "EGP" }),
);

//region & Notation data type is used to convert number into string and also it is used to round the number upto given decimal places.

let num7 = 123456.789;

console.log(num7.toLocaleString("en-us", { notation: "compact" }));

//more examples of number methods are available in the below link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
