let heading1 = document.getElementById("heading-portfolio");
console.dir(heading1);

let headings = document.getElementsByClassName("sub-heading");
console.dir(headings);

let paras = document.getElementsByTagName("p");
console.dir(paras);

let element = document.querySelector("p");
console.dir(element);
console.log(element.tagName);

let elements = document.querySelectorAll("p");
console.dir(elements);

console.dir(document.body.firstChild);

console.dir(document.querySelector("div").children);

let divtext = document.querySelector("div").innerHTML;
console.dir(divtext);

//practice question no.1
let div3 = document.querySelector(".about-course");
console.dir(div3.innerText);
div3.innerText = div3.innerText + " from apna college";

//practice question no.2
let indx=1;
let changetext = document.querySelectorAll(".box");
for(boxes of changetext){
    boxes.innerText = `unique text box ${indx}`;
    indx++;
}
// console.log(changetext);
// changetext[0].innerText = "first inner text div";
// changetext[1].innerText = "second inner text div";
// changetext[2].innerText = "third inner text div";


let getattribute = document.querySelectorAll("div");        //get attribute
console.log(getattribute[1].children[0].getAttribute("class"));
    //In above line of code, first get all divs, then div no.2, then that's child no.1, then its class
// let claSS = getattribute[1].getAttribute("class");
// console.log(claSS);

let setattribute = document.querySelectorAll("div");        //set attribute
console.log(setattribute[1].children[0].setAttribute("class", "new-sub-heading"));
//setAttribute does not return anything

let styleattribute = document.querySelectorAll("div");      //access style attribute
console.log(styleattribute[4].style);

let styleAttribute = document.querySelectorAll("div");      //change style attribute properties
console.log(styleAttribute[4].style.backgroundColor = "yellow");
//we can also change other properties like fontSize etc.

let newBtn = document.createElement("button");              //create element
newBtn.innerText = "click me!";
console.log(newBtn);
let addAtt = document.querySelector("div");                 //add element to the code
addAtt.after(newBtn);

let newHeading = document.createElement("h2");              //create element
newHeading.innerHTML = "<i>Hello Pakistan!</i>"
document.querySelectorAll("div")[1].prepend(newHeading);    //one line JS code to add element to the code

let div6 = document.querySelectorAll("div");                //remove element
div6[6].remove();

let newButton = document.createElement("button");           //practice question crate & add button
newButton.innerText = "click me!";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
let addNewBtn = document.querySelectorAll("div");
addNewBtn[3].prepend(newButton);

let ptag = document.querySelectorAll("p");
// ptag[2].setAttribute("class","content");                 //add new class with overwriting previous class
ptag[2].classList.add("content");                           //add new class with previous class

let clsname = document.querySelectorAll("div");             //add new class by className
clsname[6].className = "foo";