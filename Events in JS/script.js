let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("clicked");
};

// let btn2 = document.querySelector("#btn2");
// btn2.onclick = (evt) => {
//     console.log("clicked btn2");
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    document.querySelector("body").style.backgroundColor = "black";     //change to only dark mode
};

let btn3 = document.querySelector("#btn3");

const btn3Handler1 = ()=>{                              //function for event listener stored in variable
    console.log("button 3 is clicked handler-1");
}
btn3.addEventListener("click", btn3Handler1);           //add event listener

btn3.addEventListener("click", ()=>{
    console.log("button 3 is clicked handler-2");       //add event listener
});

btn3.removeEventListener("click", btn3Handler1);        //remove event listener *note: callback reference should be same

// let modeBtn = document.querySelector("#mode");          //change mode to light & dark
// let currMode = "light";

// modeBtn.addEventListener("click", ()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else
//     {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });

let modeBtn = document.querySelector("#mode");            //change mode to light & dark using CSS
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else
    {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});