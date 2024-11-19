// chapter 6
//DOM(DOCUMENT OBJECT MODEL)

//what is window object

// DOM manipulation

// selecting with Id
// document.getElementByid("myid")

// selecting with class
// document.getElementsByClassName("myClass")

// selecting with tag
// document.getElementsByTagName("p")


//query selector

// document.querySelector("myId / myClass / tag")
// returns first Element

// document.querySelectorAll("myId / myClass / tag")
// return a NodeList


//Properties(get,set,change,update)
// tagname : returns tag for element Nodes 
// innerText : returns thr text content of the element and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements

//what is the difference between inner text and inner html


//Q1) lets create an H2 heading element with text - "Hello javaScript". Append(add at the end) "from Apna College Students" to this text using JS

//Q2) Create 3 divs with common class name - "box". Access them & add some unique of them

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from here";





// let divs = document.querySelectorAll(".box");
// // console.log(divs[0]);
// divs[0].innerText = "new uniqe value 1";

// CHAPTER 6 
// DOM part 2

// DOM MANIPULATION
// ATTRIBUTES

// getAttribute(attr)  to get the attribute value 
// setAttribute(attr,value) to set the attribute value th 

// style 
// Node.style
// let div = document.querySelector("div");
// console.log(div);


// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));



// set 
// let para = document.querySelector("p");
// console.log(para.getAttribute("class", "newClass"));


// Node.style 
// let div = document.querySelector("div");

// div.style.backgroundColor = "green";

// div.style.fontSize = "26px";
// div.innerText = "hello";

// INSERT ELEMENTS  (let el = document.createElement("div"))

// node.append(el)  adds at the end of node(inside)
// node.prepend(el)  adds at the start of node(inside)
// node.before(el)  adds before the  node(outside)
// node.after(el)  adds after the node(outside)

//Delete Element
// node.remove()  removes the node

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = " <i> hii, i am new! </i> "

// document.querySelector("body").prepend(newHeading);


// let para = document.querySelector("p");
// para.remove();


// newHeading.remove();


// appendChild()
// removeChild()

// Q1) create a new button Element. give it in a text "click me", background color of red and text color of white 
// ->  insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


// Q2) create a <p> tag in HTML, give it a class and some styling.
// now create a new class in CSS and try to append this class to the <P> Element.

// Did you notice , how you overwrite the class name when you add new one?
// solve this problem using classList

let para = document.querySelector("p");

