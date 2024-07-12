let num1 = 6;
let attemps = 4;
let tries = 1;
let n = prompt("Entre any number");


while(n != num1 && tries <= attemps - 1){
    tries++;
    n = prompt(console.log("you lose!! Enter new number"));
}
if(n == num1){
    console.log("You win!!");
}
else{
    console.log("You lose...");
}
//it takes 4 inputs. first input will be from prompt outside the loop