/*1. Strings!
Consider the following string:
let myString = "hello,this,is,a,difficult,to,read,sentence";
1.1 Add the string to your file and log it.
1.2 Log the length of myString.
1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
1.4 Log myString to see if you succeeded.
*/
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replace(/,/g , " ");
console.log(newString);

/*
2. Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
2.2 Log your new array!
2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
2.4 Write a console.log statement that explains in words you think the new value of the array is.
2.5 Log your new array!
*/
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(2,0,'meerkat');
console.log("I expect in the array: blowfish, capricorn, meerkat, giraffe, turtle");
console.log(favoriteAnimals);
/*2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).*/
console.log('The array has a length of:', favoriteAnimals.length);
/*2.7 Jason does not like 'giraffe', delete this animal from the array.
2.8 Again log your new array.*/
let i= favoriteAnimals.indexOf('giraffe');
favoriteAnimals.splice(i,1)
console.log(favoriteAnimals);
/*2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).*/
let indexMeerkat = favoriteAnimals.indexOf('meerkat');
favoriteAnimals.splice(indexMeerkat,1);
console.log('The item you are looking for is at index: ' , indexMeerkat);

/*Create a function that takes 3 arguments and returns the sum of the these arguments.*/
function sum(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log(sum(1,2,3));
/*Create a function named colorCar that receives a color, and prints out, 'a red car' for example.*/
function colorCar(colorCarVar){
    return 'a ' + colorCarVar + ' car';
}
console.log(colorCar('red'));
/*Create an object and a function that takes the object as a parameter and prints out all of its properties and values.*/
const objVehicle = {
    isMachine:true,
    name: 'car'
}
function printObj(obj){
    console.log(obj);
}
printObj(objVehicle);
/*Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 
'a blue motorbike' for example when called as vehicleType("blue", 2)*/
function vehicleType(color, typeVeh){
    let str = 'a ' + color;
    str +=  + (typeVeh===1) ? ' car' : ' motorbike';
    return str;
}
console.log(vehicleType('red',1));
/*Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("yes");
} else {
    console.log("no");
}*/
console.log((3 === 3) ? 'yes' : 'no');

/*Create a function called vehicle, like before, but takes another parameter called age, so that 
vehicle("blue", 1, 5) prints 'a blue used car'*/
function vehicleType(color, typeVeh, ageVehicle){
    let str = 'a ' + color;
    str += (ageVehicle <= 1 ) ? ' new' : ' used';
    str += (typeVeh===1) ? ' car' : ' motorbike';
    return str;
}
console.log(vehicleType('blue', 1, 5))
/*Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.*/
let listVehicles = [];
listVehicles.push('car');
listVehicles.push('motorbike');
listVehicles.push('bike');
listVehicles.push('caravan');
listVehicles.push('boat');
listVehicles.push('metro');
listVehicles.push('train');

/*How do you get the third element from that list?*/
console.log(listVehicles[3]);
/*Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".*/
function vehicleType2(color, typeVeh, ageVehicle){
    let str = 'a ' + color;
    str += ( ageVehicle <= 1 ) ? ' new' : ' used';
    str += ' ' + listVehicles[typeVeh-1];
    return str;
}
console.log(vehicleType2('green', 3, 1));
/*Use the list of vehicles to write an advertisement. So that it prints something like: 
"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.*/
function serviceVehicles(){
    let str = "Amazing Joe's Garage, we service ";
    for(let i of listVehicles){
        if(i !== listVehicles[0] && i !== listVehicles[listVehicles.length-1])
            str += ', ';
        else if(i === listVehicles[listVehicles.length-1])
            str += ' and ';
        str += i; 
        if(i === listVehicles[listVehicles.length-1])
            str += '.';
    }
    return str;
}
console.log(serviceVehicles());
/*What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?*/
listVehicles.push('airplane');
console.log(serviceVehicles());
/*Create an empty object.*/
let obj = [];
/*Create an object that contains the teachers that you have had so far for the different modules.*/
let teachers = [['Jim','Javascript'], ['Ivana', 'HTML'], ['Hasan', 'CSS']];

/*Add a property to the object you just created that contains the languages that they have taught you.*/
teachers[0].languages = 'Engels';
teachers[1].languages = 'Dutch';
teachers[2].languages = 'Chinese';
console.log(teachers);

/*Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!*/
let x = [1,2,3];
let y = [1,2,3];
let z = y;//????
console.log('x == y is true', x==y );
console.log('x === y is false', x===y );
console.log('z == y is true', z==y );
console.log('z == x is false', z==x );
/*Don't cheat! Seriously - try it first.

Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. 
Press the Run button in the upper right corner to run the code.

More insights from this Stack Overflow question.

Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).*/
//?
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log('o1 is referenced an object and o2 is referenced a different object.');
console.log('o3 is referenced to o2.');
console.log('o2=o3 means same object');
console.log('o1=o3 means to o1 changes to o3.');

/*Does the order that you assign (o3 = o2 or o2 = o3) matter?*/
console.log('yes');
/*What does the following code return? (And why?)*/
let bar = 42;
console.log('I supposed string: ', typeof typeof bar);
/*‘Coerce' means to try to change - so coercing var x = '6' to number means 
trying to change the type to number temporarily.
*/
y = parseInt(x);
console.log( typeof y);
