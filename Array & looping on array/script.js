//creating username by taking full name as input
let lengthofname;
let fullName;
let username;

fullName = prompt(console.log("Entre your full name"));
lengthofname = fullName.length;
console.log("Your username is: ");
username = "@"+fullName + lengthofname;
console.log(username);


//using for loop on array to print all values of array
let heros = ["Iron Man", "Hulk", "Captain America", "Hawkey", "Thor", "Natasha"];
let arraylength = heros.length;
for(let i=0; i<arraylength; i++){
    console.log(heros[i]);
}
//using for-of loop on array to print all values of array
let herosName = ["Iron Man", "Hulk", "Captain America", "Hawkey", "Thor", "Natasha"];
for(let i of herosName){
    console.log(i);
}

                                        // Finding average marks of student
// let i=0;
let totalstudents;
let sum = 0;
let studentMarks = [60,50,40,70,30,20];
totalstudents = studentMarks.length;
// while(i<totalstudents){              //with while loop
//     sum = sum + studentMarks[i];
//     i++;
// }
// for(let i=0; i<totalstudents; i++){     //with for loop
//     sum = sum + studentMarks[i];
// }
for(let i of studentMarks){             //with for-of loop
    sum = sum + i;
}
let result = sum/totalstudents;
console.log(`Average marks of student is: ${result}`);      //here we use Template Literals


                                        //getting 10% off values in array
// let priceOfItems = [250, 645, 300, 900, 50];             //with for loop
// for(let i=0; i<priceOfItems.length; i++){
//     let offer = priceOfItems[i] * 10/100;
//     let withDiscount = priceOfItems[i] - offer;
//     priceOfItems[i] = withDiscount;
// }
// console.log(priceOfItems)

let priceOfItems = [250, 645, 300, 900, 50];                //with for-of loop
let i = 0;  
for(let val of priceOfItems){
    let offer = val * 10/100;
    priceOfItems[i] = priceOfItems[i] - offer;
    // console.log(priceOfItems[i]);
    i++;
}
console.log(priceOfItems);