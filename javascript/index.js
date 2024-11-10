console.log("hello world");

// Arithmetic operators
let a=5;
let b=2;

console.log("a=", a, "b=", b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b); //5^2

//Unary operator
console.log("a++", a++);
console.log("a--", a--);
console.log("++a", ++a);
console.log("--a", --a);

//Assignment operator
a+= 4; //a=a+4
console.log("a=", a);
a-= 4; //a=a-4
console.log("a=", a);
a*= 4; //a=a*4
console.log("a=", a);
a/= 4; //a=a/4
console.log("a=", a);
a%= 4; //a=a%4
console.log("a=", a);

//comparison operator
console.log("5==2", a==b); //true or false
console.log("5!=2", a!=b);
console.log("5===2", a===b); //strict version
console.log("5!==2", a!==b); //check data type
console.log("6>=5", a>=b);
console.log("6<=5", a<=b);

//Logical operators
let c=6;
let d=5;
let cond1 = c>d; 
let cond2 = a===5; 
console.log("cond1 &&  cond2=" ,  cond1 && cond2);
console.log("cond1 || cond2=" ,  cond1 || cond2);
console.log("!(c<d)=" , !(c<d));

//conditional statement
//if statement

// first example 
let age =16;
 
if(age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("you can not vote");
}

// second exxample
// let mode = "dark";
// let color;

// if(mode="dark"){
//    color= "black";
// }

// if(mode="light"){
//     color= "white";
//  }

//  console.log(color);
 
// if else statement

// first ex 
// if (mode === "dark"){
//     color = "black";
// }
// else{
//     color= "white";
// }
// console.log(color);

// sec ex 
let ofAge = 16;

if (ofAge>=18){
    console.log("vote");
}
else{
    console.log("cant vote");
}

// third ex odd or even 
// let num= 20;
let num= 13;

if(num%2 === 0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}

// else if statement 
let mode = "pink";
let color;

if(mode==="dark"){
    color="black";
}
else if (mode === "blue"){
    color = "blue";
}
else if (mode=== "pink"){
    color = "pink";
}
else{
    color= "white"
}
console.log(color);

// ternary operators /
// condition ? true output : false output 
let year = 16;
let result = age>=18 ? "adult" : "not adult";
console.log(result);

// alert 

// alert("hello");

let Name = prompt("hello");
console.log(Name);