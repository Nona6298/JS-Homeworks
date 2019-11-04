"use strict";


//Ex 1


let number = prompt("Please insert a whole number",'');
if(isNaN(number)){
	console.log(number + " is not a number, please refresh the page and try again :)");
}
else{ 
if(number%2==1)
	console.log(number + " is an odd number");
	else 
		console.log(number + " is an even number");
}





//Ex 2


// let number1 = prompt("Please insert a whole number",'');
// let number2 = prompt("Please insert another whole number",'');
// if(isNaN(number1) || isNaN(number2)){
// 	console.log("At least one of the insertions is not a number");
// }
// else{ 
// if(number1%number2==0 || number2%number1==0)
// 	console.log(1);
// else
// 	console.log(0);
// }





//Ex 3


// let numberN = +prompt("Please insert an integer",'');
// if( Number.isInteger(numberN)){
// if(numberN>0){
// 	let stringN= numberN.toString();
// 	console.log(parseInt(stringN) + parseInt(stringN+stringN) + parseInt(stringN+stringN+stringN));
// 	}
// 	else
// 		console.log(numberN + " is not a positive number");
// }
// else
// console.log("Your insertion is not an integer");





//Ex 4


// let theNumber = +prompt("Please insert an integer",'');
// if( Number.isInteger(theNumber)){
// 	if(theNumber>0){
// 		let newString = theNumber.toString();
// 		if(newString.slice(newString.toString().length-1,newString.toString().length) == 0){
// 	console.log(newString);
// }
// else
// 	console.log(newString.slice( newString.toString().length-1,newString.toString().length)+ newString.slice(0, newString.toString().length-1));
// }
// 	else
// 		console.log(theNumber + " is not a positive number");
// }
// else
// console.log("Your insertion is not an integer");





//Ex 5


// let number1 = +prompt("Please insert the first integer",'');
// let number2 = +prompt("Please insert the second integer",'');
// let number3 = +prompt("Please insert the third integer",'');
// let number4 = +prompt("Please insert the forth integer",'');
// let number5 = +prompt("Please insert the fifth integer",'');
// if( Number.isInteger(number1) && Number.isInteger(number2) && Number.isInteger(number3) && Number.isInteger(number4) && Number.isInteger(number5)){ 
// console.log((number1+number2+number3+number4+number5)/5);
// }





//Ex 6


// let newArray = [];
// let pivot; 
// newArray[0] = +prompt("Please insert the first number",'');
// newArray[1] = +prompt("Please insert the second number",'');
// newArray[2] = +prompt("Please insert the third number",'');
// if(newArray[0] > newArray[1]){
// 	pivot = newArray[0];
// 	newArray[0]=newArray[1];
// 	newArray[1]=pivot;
// }
// if(newArray[0]>newArray[2]){
// 	pivot = newArray[0];
// 	newArray[0]=newArray[2];
// 	newArray[2]=pivot;
// }
// if(newArray[1]>newArray[2]){
// 	pivot = newArray[1];
// 	newArray[1]=newArray[2];
// 	newArray[2]=pivot;
// }
// console.log(newArray);





//Ex 7


// let newArray = [];
// let pivot = 0;
// newArray[0] = +prompt("Please insert the first number",'');
// newArray[1] = +prompt("Please insert the second number",'');
// newArray[2] = +prompt("Please insert the third number",'');
// if( Number.isInteger(newArray[0]) && Number.isInteger(newArray[1]) && Number.isInteger(newArray[2])){ 
// if(newArray[0]==0 || newArray[1]==0 || newArray[2]==0){
// 	console.log("Unsigned");
// }
// else{ 
// 	for(let i in newArray){
// 		if(newArray[i]<0){
// 			pivot++;
// 		}
// 	}
// 	if(pivot%2==1){
// 		console.log("-");
// 	}
// 	else
// 		console.log("+");
// 	}
// }
// else
// console.log("At least one of the insertions is not a number");





//Ex 8


// let a = +prompt("Please insert the integer a",'');
// let b = +prompt("Please insert the integer b",'');
// let c = +prompt("Please insert the integer c",'');
// if(a==0){
// 	console.log("The value of a should be anything but 0");
// }
// else{
// 	if((Math.pow(b,2) - 4*a*c)>=0){
// 		let result1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a);
// 		let result2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a);
// 		if(result1==result2){
// 			console.log("The solution of the quadratic equation is "+ result1);
// 		}
// 		else
// 			console.log("The solutions of the quadratic equation are "+ result1 + " & "+ result2);
// 		}
// 		else
// 			console.log("There is no solution for the quadratic equation");
// 	}





//Ex 9


// let n =+prompt();
// let i = 0;
// let j = 0;
// if( n%2===0 && !Math.floor(n/10)){
// 	i+=1;
// }
// if(n%3===0 && n%10===1){
// j+=1;
// }





//Ex 10


// let digit = +prompt("Please insert the digit",'');
// let number = prompt("Please insert the number",'');

// for(let i in number){
// 	if(number[i]==digit){
// 		console.log('Yes');
// 		break;
// 	}
// 	else
// 		console.log('No');
// }





//Ex 11


// let number11 = +prompt("Please insert a number",'');
// if( Number.isInteger(number11)){
// 		let string11 = number11.toString();
// 	console.log(string11.slice( string11.toString().length-1, string11.toString().length) + string11.slice(1, string11.toString().length-1) + string11.slice(0,1));
// }
// else
// console.log("Your insertion is not an integer");





//Ex 12


// let shape = prompt("Please insert the shape of the figure",'');
// if(shape !='triangle' || shape != 'rectangle'){
// 	console.log('The entered shape was not specified beforehand');
//  //break;
// }
// let height = +prompt("Please insert the height of the figure",'');
// let base = +prompt("Please insert the base of the figure",'');
// let area;
// if(height>0 && base>0){
// 	if(shape == 'triangle'){
// 		area = (height*base)/2;
// 	}
// 	else {
// 		area = height*base;
// 	}
// 	console.log("The area of the "+ shape + " is "+ area);	
// }
// else
// console.log("At least one of the parameters is not positive or is not inserted");
	




//Ex 13


// let input = prompt("Please insert the number",'');
// let array = input.split('');
// let Min = array[0];
// let Max = array[0];
// for(let i in array){
// if(array[i] < Min){
// 	Min = array[i];
// }
// if(array[i] > Max){
// 	Max = array[i];
// 	}
// }
// console.log("The difference between the biggest and smallest digits is "+ (Max-Min));








