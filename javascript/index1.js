

// for loop 
// syntax 
// print 1 to 5
for (let i=1; i<=5; i++){
    console.log("hello world");
}
for (let count=1; count<=5; count++){
    console.log("hello "); //execute 5 times
}
console.log("loop has ended");

// calculate sum of 1 to n
let sum=0; 
for (let i=1; i<=5; i++){
    sum = sum+i;
}
console.log("sum=", sum);

// print 1 to 5

for (let i=1; i<=7; i++){
   console.log("i=", i)
}


// infinite loop dont try

// while loop  
let i =1;
while (i<=5){
    console.log("i=", i);
    i++;
}
// let j =1;
// while (j<=5){
//     console.log("hello teju");
//     i++;
// }

//do  while loop 
let j=20;
do {
    console.log("hello everyone");
    j++;
} while (j<=10);

let k=1;
do {
    console.log("k=", k);
    k++;
} while (k<=5);

//for of loop
// let str = "vaibhavi mahalunge";
// for(let p of str) { //iterator -> characters
//     console.log("p=", p);
// }

// let Str = "javascript";

// let size =0;
// for(let j of Str){
//     console.log("j=", j);
//     size++
// }
// console.log("string size=", size); //10

//for in loop (used for objects)
let student = {
    NAME : "vaibhavi mahalunge",
    AGE : 22,
    cgpa : 9.8,
    ispass : true,
};

for(let key in student){
    console.log(  key, student[key]);
}

//print 0 to 100 even numbers
for( let num = 0; num <= 100; num++)
{if (num % 2 === 0)
    {
       console.log("num=", num);
    }
}

//guess the right no game
// let gameNum = 20;
// let userNum= prompt("guess the game number:");
    
// while(userNum != gameNum)
// {
//     userNum = prompt("you entered wrong no. guess again:");
// }
// console.log("congratulations, you entered the right number");

//strings
  let str = "hie5guys";
  console.log(str[5]);

  let specialString = `this is a template literate ${1+2} ` ;
  console.log(specialString); 


//   let obj ={
//     item: "pen",
//     rupees: 10,

//   };

//   console.log("the cost of", obj.item, "is", obj.rupees, "rs");

console.log("hello world")

let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("vaibhavi \n mahalunge") // \n is a escape charater used for next line
console.log("vaibhavi \t mahalunge") // \t is a escape charater used for tab or space


//string methods/ functions
// str.toUpperCase()
// str.toLowerCase()
// str.trimCase() to removes whitespaces
//str.slice(start, end?) returns part of string
//str1.concat(str2) join str2 with str1
//str.replace(searchVal,newVal)
//str.charAt(idx)

let z = "vaibhavimahalunge";
// let newz= z.toUpperCase();  //js strings are immutable
// console.log(z);
// console.log(newz);

 z = z.toUpperCase();
console.log(z);

// let x = "012345678";
// console.log(x.slice(1, 6));

let x = "hello";
console.log(x.slice(1, 4));

let v1 = "vaibhavi";
let v2 = "mahalunge";

let r1 = v1.concat(v2);
// let r1 = v1 + v2;
console.log(r1);

let v4 = "hello";
console.log(v4.replace("h", "y"));

let v5 = "ilovejs";
console.log(v5.charAt(4));

//practice question
let fullName= prompt("enter ur full name without spaces");
let username= "@" + fullName + fullName.length;
console.log(username);
