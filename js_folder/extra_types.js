"use strict";
//unkown type
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
//userName = userInput //unvalid
//nerver type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//# sourceMappingURL=extra_types.js.map