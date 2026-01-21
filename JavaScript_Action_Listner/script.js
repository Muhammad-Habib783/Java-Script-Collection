// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// btn1.addEventListener("click",(evt)=>
// {
//  console.log("button1 was clicked -handler1");
// });

// btn1.addEventListener("click",()=>
// {
//  console.log("button1 was clicked  - handler2");
// });

// const handler3 = () =>
// {
//  console.log("button1 was clicked  - handler3");
// };

// btn1.addEventListener("click",handler3);




// btn1.addEventListener("click",()=>
// {
//  console.log("button1 was clicked  - handler4");
// });

// btn1.removeEventListener("click",handler3);




let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; // dark

modeBtn.addEventListener("click", () =>
{
 if(currMode==="light")
 {
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");

 }
 else
    {
 currMode = "light";
 body.classList.add("light");
  body.classList.remove("dark");
 }
 console.log(currMode);
});





































// DOM MANIPULATION (DOCUMENT OBJECT MODEL)

// let button=document.getElementById("myId"); // in this you only pass our id for accessing 
// console.dir(button);


// let headings = document.getElementsByClassName("myClass");// in this you just only pass our class name only
// console.dir(headings);
// console.log(headings);


// let parahs = document.getElementsByTagName("p");// in this we only pass our tag name like paragrapg tag so in this way 
// console.log(parahs);


// query selector in this we can pass any thing id /class/tag no problem occurs in this  it returns node list its your choice you will access one or  all 

// let Firstelement = document.querySelector("p"); // it only returns first element 
// console.dir(Firstelement);


// let Allelements = document.querySelectorAll("p"); // it  returns all elements 
// console.dir(Allelements);


// for accessing class we write it with . class name in query selector 

// let Firstelement = document.querySelector(".myClass");
// console.dir(Firstelement);

// let Allelements = document.querySelectorAll(".myClass");
// console.dir(Allelements);

// for accesing id we put # and id name 

// let Firstelement = document.querySelector("#myId");
// console.dir(Firstelement);


// dom tree has first child second child in this way also last child //when we creating  dom tree then it  has three types of tree has been maded  // 1) text nodes //2) comment nodes  //3) elements nodes // but in dm we mostly work on elements 



// console.dir(document.body.firstChild);


// practice  program 1


// let h2 = document.querySelector("h2");// in this we only pass our tag name
// console.dir(h2.innerText);


// h2.innerText = h2.innerText + " from Apna College Students "; // conctenate 


// practice program 2

// let divs = document.querySelectorAll(".box");

// let idx=1;
// for(div of divs)
// {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// to get the attribute value 
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// to set the attribute value 

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","new class"));


// let div = document.querySelector("div");


// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";


// div.style.fontSize = "24px";

// div.innerText = "Hello";


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me ";
// console.dir(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); // for append on last 
// div.prepend(newBtn);  // for append on first 
// div.before(newBtn); // before any node 
// div.after(newBtn); // after any node 



// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();



// practice program 1

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn);



// // practice program 2

// let para = document.querySelector("p");
















// console.log is for printing to the console
// console.dir is for inspecting objects and printing their properties on the console

// we can access HTML IN JS using window browser in document model which is representation of HTML this is also known as DOM (Document Object Model)
// document is an object in the window
// document is the entry point to access all HTML elements
// document is a global object we can access it directly without window object
// document is the root of the HTML page


// for ids hash will be used




// home work learn about  first child last child children and about three types of nodes  texts comment and elements 
// learn about appendChild() and removeChild()







