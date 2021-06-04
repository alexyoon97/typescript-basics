"use strict";
//Union Function
function combi(input1, input2, resultConversion //literal type
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if(resultConversion === 'as-number'){
    //       return +result;
    //   }
    //   else{
    //       return result.toString()
    //   }
}
const combiedAges = combi(30, 26, "as-number");
const combiedStringAges = combi('30', '26', "as-number");
const combinedNames = combi("Max", " Anna", "as-text");
//# sourceMappingURL=union-alias.js.map