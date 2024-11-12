//chapter 4

//arrays in js(cillection of items)
//arreys are mutable u can change them

let marks = [10,20,30,40,50];
console.log(marks);
console.log(marks.length); //property

let heroes= ["a", "b", "c", "d", "e"];
console.log(heroes);

//array indicec (plural form)
//arr[0], aa[2]

//looping over an arrey(print all element of an array)
let colours =["red", "green", "yellow", "black", "white", "pink", "blue"];
//using for loop
for(let idx=0; idx<colours.length; idx++){
    console.log(colours[idx]); 
} 

//using for of
for(let colour of colours){
    console.log(colour);
}

let cities =["mumbai", "kalyan", "dadar", "thane", "aasangav", "dombiwli"];
for(let city of cities) {
    console.log(city.toUpperCase());
}

//find avg marks
let mark =[85,97,44,37,76,60];

let sum=0;
for(let val of mark) {
    sum += val;
}
// console.log(sum);

let avg = sum / mark.length;
console.log(`avg marks of the class = ${avg}`);

//there are 5 items all items have 10%  off change the array to store the final price after applying offer
let  items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     // console.log(`values of items ${i}= ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`values after offer = ${items[i]}`);
//     i++;
// }

for (let i = 0 ; i<items.length; i++ ) {
    let offer = items[i] / 10;
    items[i] -= offer;
    console.log(items);
}

//array methods
// PushManager() : add to end 
// pop() : delete from end and return
// toString() : converts array to string
//concat(): joins multiple arrays & returns result
//unshift(): add to start
//shift() : delete from start and return

let food= ["burger", "pizza", "cake"];

// food.push("pastry", "chocolate");

console.log(food);

let deletefood = food.pop();
console.log(food);
console.log("deleted", deletefood );

console.log(food.toString());
console.log(food);

let A = ["a", "b", "c" ];
let B = ["d", "e"];
// let C = A.concat(B);
// console.log(C);

let D= A.shift();
console.log("deleted", D);

//slice (startidx, endidx)
//splice (startidx, delCount, newEl1...)

let no= ["one", "two", "three", "four", "five"];
console.log(no.slice(2));

let nos= [1,2,3,4,5,6,7];
nos.splice(2,2,101,102);
// console.log(nos);

// add element
nos.splice(2,0,101);

//delete element
nos.splice(3,1);

// replace element
nos.splice(3,1,101);

//create am company array
//then remove 1st company
//remove uber nd add ola
// add amazon at end 

let companies= ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
 console.log(companies);

//  companies.shift(2,1,"ola");
 companies.push("amazon");
 console.log(companies);
