"use strict";


//Assignment 1

function largestProduct(array){
	let product = array[0]*array[1];
	for(let i = 0; i<array.length-1; i++){
		if(product<array[i]*array[i+1]){
			product= array[i]*array[i+1];
		}
	}
	return product;
}

// console.log(largestProduct([4,3,2,1]));
// console.log(largestProduct([1,3,2,4]));


//Assignment 2

function missingElements(array){
//checking just in case for all the elements to be unique
 const newSet = new Set(array);

 let count = 0;
 let max= -Infinity;
 let min=Infinity;
 for(let value of newSet){
 	if(value>max){
 		max=value;
 	}
 	if(value<min){
 		min=value;
 	}

 }
 count = max - (min+1)-(newSet.size-2);
 return count;
}

//console.log(missingElements([1,9,3,7,2]));



//Assignment 3

function acronym(str){
	let array = str.split(" ");
	let newArr = array.map(e=> e.slice(0,1).toUpperCase());
	return newArr.join("");
}

// console.log(acronym("prisoner of War"));
// console.log(acronym("Have a good night"));



//Assignment 4

function substring(str, num){
	let array = [];
	for(let i = 0 ; i<str.length - num + 1; i++){
		array.push("'"+str.slice(i, num+i)+"'");
	}
	return array.join(",");
}

// console.log(substring('abcdfghz', 7));
// console.log(substring('495215', 3));


//Assignment 5


const nest = (object, id = null, key = 'parent') =>
  object.filter(e => e[key] === id).map(e => ({ ...e, children: nest(object, e.id) }));


const treeNodes = [
	{parent: null, id: 0}, 
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6},
    ];


console.log(nest(treeNodes));

