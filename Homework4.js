"use strict";


//Assignment 1

function largerThan(arr, num){
	let newArr = [];
	for(let i = 0; i<arr.length; i++){
		if(arr[i]>num){
			newArr.push(arr[i]);
		}
	}
	if(newArr.length == 0){
		return "Such values do not exist";
	}
	return newArr;
}

//console.log(largerThan([1, 1, 2, -3, 0, 8, 4, 0], 9));
//console.log(largerThan([10, 25, 16, -5, 30, 15, 24] , 16));




//Assignment 2


function toPrintEven (num1, num2){
	let arr = [];
	for(let i = num1; i<=num2; i++){
		if(allDigitsAreEven(i)){
			arr.push(i);
		}	
		
	}
		if(arr.length == 0){
			return "Such numbers do not exist";
		}
	return arr.join(", ");	
}


function allDigitsAreEven(str){
	str = String(str);
	for (let i = 0; i < str.length; i++){
		if(Number(str[i])%2){
			return false;
		}
	}
	return true;
}

//console.log(toPrintEven(19,42));
//console.log(toPrintEven(99,199));



///Assignment 3


function evenOrOdd(num){
		if((num%10)%2==1){
			return true;
	}
	else{
		if((num/10)!=0){
			evenOrOdd(num/10);
		}
	}
	return false;
}

// console.log(evenOrOdd(421132));
// console.log(evenOrOdd(5));
// console.log(evenOrOdd(1579));



//Assignment 4


//Non recursive

function minimalPositiveElem(arr){
	arr.sort((a,b)=> a-b);
	for(let i = 0; i < arr.length; i++){
		if(arr[i]>=0){
			return arr[i];
		}
	}
	return -1;
}

//console.log(minimalPositiveElem([45, -9, 15, 5, -78]));

//Recursive

function minimalPositiveElement(arr){
	if(arr.length==1){
		if(arr[0]>=0){
			return arr[0];
		}
	}
	else{
		if(arr[arr.length-1]>=0){
		let min = arr.pop();
		console.log(min);
		if(minimalPositiveElement(arr)>=0){
			return Math.min(min, minimalPositiveElement(arr));
		}
	}
	else{
		arr.pop();
		return minimalPositiveElement(arr);
	}

	}
	return -1;
}

// console.log(minimalPositiveElement([45, -9, 15, 5, -78]));
// console.log(minimalPositiveElement([-5, -9, -111, -1000, -7]));




	//Assignment 5

function almostSorted(arr){
	for(let i  = 0; i<arr.length; i++){
		if(arr[i]>arr[i+1]){
			return (i+1);
		}
	}
	return -1;
}

// console.log(almostSorted([-9, -4, -4, 3, 12, 4, 5]));
// console.log(almostSorted([2, 12, 15, 48, 64]));