//TS object types

enum Role { ADMIN = 'ADMIN', READ_ONLY = 1 , AUTHOR = 2};

const person:{
  name: string;
  age: number;
  hobbies: string[]//any[] would take all types
  role: any//[number, string]
} = {
  name: 'Alex',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN //[2, 'author']
}


function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result); //Add up the numbers frist before print to prevent adding two number as a string
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
