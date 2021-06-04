"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printRes(add(5, 12));
let combineValues; //Function works but to be mroe precise
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//let somevalue: undefined //totally valid
//# sourceMappingURL=function.js.map