"use strict";
//TS object types
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Alex',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN //[2, 'author']
};
function add2(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result); //Add up the numbers frist before print to prevent adding two number as a string
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add2(number1, number2, printResult, resultPhrase);
