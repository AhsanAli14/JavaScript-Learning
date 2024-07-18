function firstfunction() {
    console.log("This is practice function");
}
firstfunction();

function firstfunctiontwo(msg){                 //here msg is a input variable called parameter
    console.log(msg);
}
firstfunctiontwo("I am front end developer");   //here "I am..." is argument

function sumfunction(x , y){                    //x & y are local variable their scope is block
    s = x + y;
    return s;
}
console.log(sumfunction(2,3));

const arrowsum = (x,y) =>{                      // add function with modern js function
    console.log(x+y);
};
arrowsum(3,3);

const arrowmul = (a,b) =>{                      // multiplication function with modern js function
    console.log(a*b);
};
arrowmul(2,4);

const arrowmultiply = (a,b) =>{                 // we can also write like this
    return (a*b);
};
console.log(arrowmultiply(4,3));


// practice question count vowel words in a sectance
function countvowels(msg) {                             //with for loop
    console.log(msg);
    let b=0;
    for(let i=0; i<msg.length; i++){
        if(msg[i] == "a" || msg[i] == "e" || msg[i] == "i" || msg[i] == "o" || msg[i] == "o"){
            b++;
        }
    }
    console.log(`vowel word are: ${b}`);
}
let input = prompt("Type a message:");
countvowels(input);
// practice question count vowel words in a sectance
function vowelcount(msg){                               //with for-of loop
    console.log(msg);
    let b=0;
    for(let char of msg){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "o"){
            b++;
        }
    }
    console.log(`vowel word are: ${b}`);
}
let inputvalue = prompt("Type a message:");
vowelcount(inputvalue);
// practice question count vowel words in a sectance
const vowerlWrodcount = (msg) =>{                       //with arrow function
    console.log(msg)
    b=0;
    for(let count of msg){
        if(count === "a" || count === "e" || count === "i" || count === "o" || count === "o"){
            b++;
        }
    }
    console.log(`vowel word are: ${b}`);
}
let inputmsg = prompt("Type a message:");
vowelcount(inputmsg);


//forEach loop in array practice
let arr = ["Pakistan", "India", "Afganistan", "China", "Iran"];             //with simple function definition
arr.forEach(function printval(val){
    console.log(val);
})

let cityarray = ["Pakistan", "India", "Afganistan", "China", "Iran"];       //with arrow function definition
cityarray.forEach((valu)=>{
    console.log(valu);
})

let arraycity = ["Pakistan", "India", "Afganistan", "China", "Iran"];       //with arrow function definition convert to uppercase
arraycity.forEach((valu)=>{
    console.log(valu.toUpperCase());
})

let arraycities = ["Pakistan", "India", "Afganistan", "China", "Iran"];     //also use 2 more parameters to return their values
arraycities.forEach((valu, idx , arraycities)=>{
    console.log(valu.toUpperCase(), idx, arraycities);
})

//practice question of forEach loop
let arraynumbers = [1,2,3,4,5,6];
arraynumbers.forEach((square)=>{
    console.log(square*square);
})


//map() method
let arrayNumbers = [1,2,3,4,5,6];
let newArray = arrayNumbers.map((square)=>{
    return square*square;
})
console.log(newArray);
//filter method
let wholeNumbers = [1,2,3,4,5,6];
let evennumbers = wholeNumbers.filter((even)=>{
    return even % 2 === 0;
})
console.log(evennumbers);
//reduce method
let numberstoadd = [1,2,3,4,5,6];                           //adding array numbers with reduce method
let sumoutput = numberstoadd.reduce((prev , current)=>{
    return prev + current;
})
console.log(sumoutput);
//reduce method
let maxnumbers = [10,52,30,24,65,16];                           //getting max numbers with reduce method
let maxoutput = maxnumbers.reduce((prev , current)=>{
    return prev > current ? prev : current;
})
console.log(maxoutput);

//practice question no.1
let stuMarks = [34,90,56,67,78,89,98,45,99,20];             //return marks above then 90
let maxMarks = stuMarks.filter((aboveninty) =>{
    return aboveninty >= 90;
})
console.log(maxMarks);
//practice question no.2
let n = prompt("Enter a number:");
let emptyarray = [];
for(let i=1; i<=n; i++){
    emptyarray.push(i);
}
console.log(emptyarray);

let sumofnumbers = emptyarray.reduce((prev,curr)=>{         //sum of all numbers of emptyarray array
    return prev + curr;
})
console.log(sumofnumbers);
let factorial = emptyarray.reduce((preve,curre)=>{          //product of all number of emptyarray array
    return preve * curre;
})
console.log(factorial);
