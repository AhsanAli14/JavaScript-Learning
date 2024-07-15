// push() method
let foodItems = ["Chips", "Fries", "Pizza", "Nugets"];
foodItems.push("Drink","Pasta");
console.log(foodItems);
// pop() method
let drinks = ["Pepsi", "Coke", "Fanta", "Marinda"];
let deletedItem = drinks.pop();                         //pop() also return deleted value
console.log(`The deleted item is: ${deletedItem}`);

// toString() method
let items = ["Chips", "Fries", "Pizza", "Nugets"];
console.log(items.toString());

// concat() method
let marvelHeros = ["IronMan", "Captain America", "SpiderMan", "Hulk", "Thor"];
let dcHeros = ["SuperMan", "BatMan"];
let names = ["John", "Cena", "Jimmy"];
let heros = marvelHeros.concat(dcHeros, names);
console.log(heros);

// unshift() method
let stNames = ["Ali", "Hamza", "Farooq"];
stNames.unshift("Arslan");
console.log(stNames);
//shift() method
let stuNames = ["Qamar", "Zain", "Ghani"];
let delValue = stuNames.shift();
console.log(delValue);

//slice() method
console.log(marvelHeros.slice(1, 3));

//splice() method
let numbers = [1,2,3,4,5,6,7];
numbers.splice(3,2,101,102,103);
console.log(numbers);
//adding with splice method
numbers.splice(2,0,100);
console.log(numbers);
//delete with splice method
numbers.splice(1,1);
console.log(numbers);
//replacing with splice method
numbers.splice(4,1,104);
console.log(numbers);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(0,1);              //delete first element
console.log(companies);
companies.splice(1,1,"Ola");        //replace Uber with Ola
companies.push("Amazon");           //add Amazon to the end