"use strict";


//Assignment 1

function removeFirstElem(array){
	if(array.length == 0){
		return [];
	}
	else{ 
		array.splice(0, 1);
	}
	return array;
}

 //console.log(removeFirstElem([6, 78, 'n', 0, 1]));


//Assignment 2

function flatten(array){
	let newArray = [];
	if(!Array.isArray(array)){
		return array;
	}
	else{
		return newArray.concat(...array.map(flatten));	
	}
}

//console.log(flatten([1, [3, 4, [1, 2]], 10]));



///Assignment 3

function sumOfDigits(num){

	let numSum = 0;
	let numString = num.toString();
	let sum = numString.split("").reduce((digitI, digitJ)=>{
		digitI+=parseInt(digitJ);
		return digitI;
	}, 0);
	if(sum >=10){
		return sumOfDigits(sum);
	} 
	else
		return sum;
}
	
// console.log(sumOfDigits(14));
// console.log(sumOfDigits(29));



//Assignment 4


function rotateN(array, num) {
	if(num == 0){
		return array;
	}

	else 
		if(num < 0){
		array.unshift(array[array.length-1]);
		return rotateN(array.splice(0, array.length - 1), num + 1);
		
	}
	else{
		array.push(array[0]);
		return rotateN(array.splice(1), num - 1);
		
	}
}
 
// console.log(rotateN(["a","b","c","d","e","f","g","h"],-2));
// console.log(rotateN(["a","b","c","d","e","f","g","h"],3));


//Assignment 5


function Swap(object){
let result = {};
let newArr = [];
for(let key in object){
	if(object[key] in result){
			let repeat = newArr.concat(result[object[key]],key);
			result[object[key]] = repeat;
		}
		else{
			result[object[key]]=key;
		}
		
	}
	return result;
}

// console.log(Swap({A : 1, B : 2, C : 3, D : 4}));
// console.log(Swap({A : 1, B : 1, C : 3, D : 3}));
// console.log(Swap({ a: "1", b: "2", c: "2", d: "2" }));


//Assignment 6


function Sort(list){
	let newList = list.filter(e => {
		if(e.readStatus == true){
		return e;
		}
	});
	return newList.sort(function(obj1,obj2){
		return obj2.percent - obj1.percent;
	});
}



// console.log(Sort([
// { book: "Catcher in the Rye", readStatus: true, percent: 40},
// { book: "Animal Farm", readStatus: true, percent: 20},
// { book: "Solaris", readStatus: false, percent: 90 },
// { book: "The Fall", readStatus: true, percent: 50 },
// { book: "White Nights", readStatus: false, percent: 60 } ,
// { book: "After Dark", readStatus: true, percent: 70 }
// ]));

