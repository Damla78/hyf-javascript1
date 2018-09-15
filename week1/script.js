//1..
let greetings=["Halo, dunia!","Ciao, mondo!","Hola, mundo!"];

console.log(greetings[0]);
console.log(greetings[1]);
console.log(greetings[2]);

//2..
console.log('I\'m awesome');

//3.1
let x;
//3.2
console.log('the value of my variable x, I suppose: undefined');
//3.3
console.log('the value of my variable x will be:' + x );
//3.4
x=5;
//3.5
console.log('the value of my variable x, I suppose: 5');
//3.6
console.log('the value of my variable x will be:' + x );

//4.0
let y="Gefeliciteerd";
//4.1
console.log("The value of my string, I suppose that: Gefeliciteerd");
//4.2
console.log("The actual value of y is: " + y);
//4.3
y="Tot Gauw";
//4.4
console.log("The value of my string, I suppose that: Tot Gauw");
//4.5
console.log("The actual value of y is: " + y);

//5
console.log(Math.round(7.25));
//5.1
let z = 7.25;
//5.2
console.log(z);
//5.3
let a = Math.round(z);
//5.4
console.log("a: " + a);
//5.5  //5.6
let m;
if(z>a)
console.log("value of z is bigger than a: "+z+">"+a);
else if (z==a) {
    console.log("value of z is equal to a: " + z)
} else {
    console.log("value of z is smaller than a: " + z + "<"+ a);
}
//6.1
let arrNames=[];
//6.2
console.log("I expect array is null");
//6.3
console.log("Actual value of array is: " + arrNames);
//6.4
let arrFavoriteAnimals=["Dolphine", "Dog", "Bird", "Ant"];
//6.5
console.log("Favorite animals array is: " + arrFavoriteAnimals );
//6.6
arrFavoriteAnimals.push("Baby pig");
//6.7
console.log("New favorite animals array is: " + arrFavoriteAnimals );
//7.0
let myString = "this is a test"
//7.1
console.log("Mystring is " + myString );
//7.2
let lengMyString = myString.length;
//7.3
console.log("Length of myString is:" + lengMyString);

//8.0
let xx=5;
let yy="5.4";
if(typeof(xx)== typeof(yy) ){
    console.log("8.) x and y is SAME TYPE: " + typeof(xx));
}else{
    console.log("8.) They are not same type:" + typeof(xx)+ ", " + typeof(yy));
}
//8.1
let index=1;
let name="Rabia"
let arrMaat=[35, 36, 36.5, 37, 38, 39, 40, 40.5, 41];
let in_out=true;
//8.2
console.log("index is: " + index);
console.log("name is: " + name);
console.log("arrMaat is: " + arrMaat);
console.log("in_out is: " + in_out);
//8.3
console.log("I think, type of index is: number");
console.log("I think, type of name is: string");
console.log("I think, type of arrMaat is: array ");
console.log("I think, type of in_out is: boolean");
//8.4
console.log("Type of index is: " + typeof(index));
console.log("Type of name is: " + typeof(name));
console.log("Type of arrMaat is: " + typeof(arrMaat));
console.log("Type of in_out is: " + typeof(in_out));
//8.5 - 8.6
let firstVar, secondVar;
firstVar=index; 
secondVar=name;

if(firstVar!=secondVar){
    console.log("We don't expect comparison with different two types" + firstVar + ", " + secondVar);
}
if(firstVar==secondVar){
    console.log(firstVar + " == " + secondVar);
}
if(arrMaat[0]=="35"){
    console.log("Type is different but their inside is same: " + arrMaat[0] + ", " + "\"35\"");
}
if(arrMaat[0]==="35"){
    console.log("Type is different" + arrMaat[0] + ", " + "\"35\"");
}else
console.log("Type is different so they are not same:" + arrMaat[0] + ", " + "\"35\"");

//9.0
x = 7;
x = x % 3;
console.log("I expect  ==>  7 % 3 =1");
console.log("7 % 3 =", x );
//9.1
console.log("1.) 10 % 5 =", 10%5 );
console.log("2.) 10 % 3 =", 10%3 );
console.log("3.) 10 % 7 =", 10%7 );
//10.1
let arrClassA=[ 001, "Refia Meryem", 002, "Selim", 003, "Seniha", 004, "Kadriye", 005, "Newa", true];
console.log(arrClassA);//I can store multiple types in array.

//10.2
if(6/0 === 10/0){
    console.log("I can compare that: 6/0 === 10/0");//I'm suprised to compare infinite numbers...
}else{
    console.log("I can not compare: 6/0 === 10/0");
}
//10.3
console.log("I added every step console.log statements.")
