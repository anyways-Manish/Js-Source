//conversion of variables from one type to other.

let score = 33; // number
console.log(score,typeof(score));

let score1 = "33abc";
console.log(score1,typeof(score1));

let valueInNumber = Number(score1); // gives Nan - not a number .
//It arises when we try to convert not a pure number string to number.
console.log(valueInNumber,typeof valueInNumber);

let x = null;
console.log(Number(x));
// Null is converted into 0 using Number()

let y;
console.log(Number(y));
//undefined into Number gives NaN

/*
  "33" => 33
  "33abc" => NaN
  true => 1
  false => 0
  null => 0
  undefined => NaN
*/

//Boolean
let isLogged = 1;
console.log(Boolean(isLogged));
 /*
 1 => true
 0 => false
 "hello" => true
 " " => true
 "" => false
 null => false 
 undefined => false
 
 */

//String 
let isNumber = 33;
let stringNumber = String(isNumber);
console.log(stringNumber,typeof stringNumber);
/*
33 => "33"
null => "null"
//double corts means string format.
*/