function add(n1: number, n2: number){
    return n1+n2;
}

function printRes(num:number){
    console.log('Result: ' + num);
}
function addAndHandle(n1:number,n2:number,cb:(num:number)=> void){
    const result = n1 + n2;
    cb(result)
}

printRes(add(5,12))

let combineValues: (a:number,b:number)=> number; //Function works but to be mroe precise
combineValues = add

console.log(combineValues(8,8))

addAndHandle(10,20,(result)=>{
    console.log(result);
});
//let somevalue: undefined //totally valid