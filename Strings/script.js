let obj = {         //Template Literal
	item: "Pen",
	price: 10,
}
let output = `The cost of  ${obj.item} is ${obj.price} rupees.`;        //this is called string interpolation
console.log(output);        //we can also add expression in placeholders “ ${ } ” 

let escapeSequence = `This is first line \nThis is second line`;        //Escape Characters
console.log(escapeSequence);

const student = {
    fullName: "ali",
    class: "BSCS",
    year: 4,
};
console.log(student.fullName.toUpperCase());        //Upper case funtion on object key

let str = "This is Pakistan";
console.log(str.toUpperCase());     //Lower case is similar to Upper case function

let str1 = "This is first line\t";
let str2 = "This is second line";
console.log(str1.concat(str2));     //concatinate function

let hello = "hellololo";              //replace function it will replace only first 
console.log(hello.replace("lo","p"));

let hello2 = "hellololo";              //replaceAll function
console.log(hello2.replaceAll("lo","p"));

let char = "IloveProgramming";          //character return function
console.log(char.charAt(5));

