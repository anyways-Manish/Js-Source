const accountId  =  144553;
let accountEmail =  "manish@gmail.com";
var accountPassword = "12345";
let accountState;
accountCity = "Jaipur";

//accountId = 2; //not allowed 

accountEmail = "hc@gmail.com";
accountPassword = "234";
accountCity = "Delhi";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



/*
1.const - we can never change its value ,reassign and re-declare.
2.var - we can re-declare and re-assign it whenever we want, recommended not use it beause of problem in block scope and functional scope.
3.let - we cannot re-decalre. 
4.In js we can assign value into variable without declaring it ex -- accountCity.



*/