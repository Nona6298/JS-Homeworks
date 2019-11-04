"use strict";


//Assignment 1


function isPrime(num){
	let count=0;
	for(let i=2; i<num/2; i++){
		if(num%i==0){
			count++;
		}
	}
	if(count>0){
		console.log("No");
	}
	else
		console.log("Yes");
}

//isPrime(401);
//isPrime(63);




//Assignment 2


function Fibonacci(num){
	if(num<2){
		return num;
	}
	else
		return Fibonacci(num-1)+Fibonacci(num-2);
	}

	//console.log(Fibonacci(10));
	//console.log(Fibonacci(2));



	//Assignment 3


function FibonacciSeries(num){
	let array=[];
		if(num==0){
			array=[0];
		}
		else if (num===1){
   			array= [0, 1];
  		} 
  		else{
    		array = FibonacciSeries(num - 1);
    		array.push(array[array.length - 1] + array[array.length - 2]);
      	}
     return array;
};

 //console.log(FibonacciSeries(7));
 //console.log(FibonacciSeries(45));



//Assignment 4

function Sum_Product(){
	let num = prompt("Please insert the number","");
	if(num == 0){
		return "Cannot calculate since the inserted number was 0 or wasn't inserted at all ";
	}
	let array = num.split("");
	let sum = 0;
	let product = 1;
	for(let i in array){
		sum += +array[i];
		product*=array[i];
	}if(product==0){
		return "The quotient is 0 since the product is 0";
	}
	else if(product%sum==0){
		return ("The quotient is "+ product/sum);
	}
	else{
		return ("The remainder is "+product%sum);
	}
}

 //console.log(Sum_Product());



 //Assignment 5(9)

function EvenlySpaced(){
	let a = +prompt("Insert the starting point of the evenly spaced array","");
	let b = +prompt("Insert the ending point of the evenly spaced array","");
	let num = +prompt("Insert the length of the evenly spaced array","");
	let array =[a];
	if(num==0){
		return "Cannot return anything since the length is 0";
	}
	else{
		let increase = (b-a)/(num-1);
		for(let i=0; i<num-1; i++){
		 array.push(array[i]+increase);
		}
		return array;
	}
}

//console.log(EvenlySpaced());



//Assignment 6(10)

function SecondLargest(array){
	if(array.length<2){
		return "There cannot be a second largest element in an array of this size";
	}
	else{ 
	let Max = array[0];
	let SecondMax = array[1];
	 	
	for(let i=0; i<array.length; i++){
		if(array[i]>Max){
			SecondMax=Max;
			Max=array[i];
		}
		else if(array[i]>SecondMax && array[i]!=Max){
			SecondMax=array[i];
		}
	}
	return "The index of the second largest element is " + array.indexOf(SecondMax);
	}
}

//console.log(SecondLargest([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]));



//Assignment 7(11)


function PadArray(array, padAmount, repeat){
if(padAmount>array.length){
	return "Invalid padding amount";
}
	let padStart = array.slice(0,padAmount).join();
	let padEnd = array.slice(-padAmount).join();
	
	for(let i = 1; i < repeat; i++){
		padStart +=padStart;
		padEnd += padEnd;
	}

	let newArray = padStart.split("").concat(array,padEnd.split(""));
	return newArray;
}

//console.log(PadArray([1,2,3,4],1,3));