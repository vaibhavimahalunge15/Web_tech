//chapter 8

//EVENTS

// the change in the state of an object is known as an events
// events are fired to notify code of "interesting changes" that may affect code execution

// Mouse events(click , double click etc)
// Keyboard events(keypress,keyup, keydawn)
// form events (submit etc)
// print event and many more


//Event handling in js

// Node.event = () => {
//     handle here
// }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked!");
//     let a = 25;
//     a++;
//     console.log(a); //26
// }

// let box = document.querySelector("div");
//   div.onmouseover = () => {
//     console.log("you are inside div");
//   };

  //if we code in inline ahndle as well as javascript handle then priority goes to js handle


//   Event Object 
// it is a special object that has details about the event
// all events handlers have access to the event objects properties and methods

// Node.event = (e) => {
//     handle here
// }
// e.target, e.type, e.clientX, e.clientY

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

//Event Listner

// node.addEventListner(event, callback)
// node.removeEventlistner(event,callback)
// *Note :- the callback reference should be same to remove



// Q1) create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again

  let modeBtn = document.querySelector("#mode");
  let body = document.querySelector("body");
  let currMode = "light"; //dark

  modeBtn.addEventListener("click", () => {
   if(currMode === "light") {
    currMode = "dark"; 
    // document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("body").classList.add("dark");
    body.classList.add("dark");
   } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
   }

   console.log(currMode);
  });