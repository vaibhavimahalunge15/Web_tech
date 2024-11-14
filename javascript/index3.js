//chapter 5
//functions in js
//(block of code that performs a specific task, can be invoked(call) whenever needed)
 
//function definition
//function functionName(){
//                       }   

//function call
//  functionName();

// function functionName(param1,param2...){

// }
  
function myFunction() {
    console.log("we are learning js");
    console.log("keep going");
}
myFunction();

function myFunc(mes){
    //parameter -> input
    console.log(mes);
}
myFunc("learning js"); //argument



function sum(x,y) {  //local variables
    // console.log(x+y);
    s=x+y;
    return s;
    }
    // sum(2,3);
    let val = sum(1,2);
    console.log(val); 

    //function parameter-> like local variables of function -> bloce scope
     

    // arrow functions(=>) (compact way of writing functions)
    // const functionName = (param1,param2)=>{

    // }

    //sum function
    // function sum(a,b){
    // return a+b; }


    // array function
const arrowSum = (a, b) => {
console.log(a+b);
    };

    //multiplication function
    // function mul(c,d){
    // return c*d; 
// }

    let arrowMul = (c, d) => {
        console.log(c*d);
    }; 


    // practice question 
    function countVowels(str)
    {
        let count=0;
        for (const char of str)
{
    if(
        char === "a" || 
        char === "e" || 
        char === "i" || 
        char === "o" || 
        char === "u" )
        {
    count++;
        }
} 
return count;
    }

//   forEach loop arrays       (arr.forEach(callBackFunction))
// arr.forEach((val) => {
//     console.log(val);
// })  

// let  arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

//using array function
let arr =  [1,2,3,4,5];

arr.forEach((val) => {
    console.log(val);
});

//WHAT IS HIGHER ORDER FUNCTION OR METHOD

//for a given array of no, print the square of each value using the forEach loop
// let nums = [2,3,4,5,6];
// nums.forEach((num) =>{
//     console.log(num.num); // num**2
// });

// let nums = [22,33,44];
// let calcSquare = (num) => {
//     console.log(num.num);
// };
// num.forEach(calcSquare);

//map
//create new array with the results of some operation. the value its callback returns are used to form new array
//arr.map(callbackFnx(value,index,array))

//let newArr = arr.map((val) =>
// {
//     return val*2;
// })

let nO= [1,2,3];
nO.map((val) => {
console.log(val);
});

//map usning array
// let value = [4,5,6,7];
// let newArr = value.map((val) =>{
//     return val;
    // return val*2;
// });
// console.log(newArr);

//filter
//create a new array of elements that give true for a condition/filter
//eg all even nos

// let newArr = arr.filter((val) =>{
//     return val % 2 ===0;
// })

let arrAy= [1,2,3,4,5,6,7,8];

let evenArray = arrAy.filter((val) =>{
    // return val %2 ===0;
    return val >3;
});
console.log(evenArray);

//reduce
//perform some operations and reduces the array to a single value.It returns the single value

