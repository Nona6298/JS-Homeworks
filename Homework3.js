"use strict";


//Assignment 1

function PrintX(num){
	let side = num-1;
	for(let i = 0; i<side; i++){
		console.log(" ".repeat(i)+"*" + " ".repeat((side-i)*2)+"*");
		console.log();
	}
	console.log(" ".repeat(side)+"*");
	console.log();
		for(let i = side; i>0; i--){
		console.log(" ".repeat(i-1)+"*" + " ".repeat((side-i+1)*2)+"*");
		console.log();
	}
}

//PrintX(10);



//Assignment 2

function Frequency(array){
	let length = array.length;
	let uniqueArray = [...new Set(array)];
	let Ulength = uniqueArray.length;
	let count = Array(Ulength).fill(0);
		for(let j = 0; j<Ulength; j++){
			for(let i = 0; i<length; i++){
				if(uniqueArray[j]==(array[i])){
					count[j]+=1;
		 	}
	   	}

	   	console.log(uniqueArray[j] + " : " + count[j]/length);
	}
}

//Frequency([1, 1, 2, 2, 2, 3]);



///Assignment 3


function NumberOrString(array){
	let countNum = 0;
	let countString = 0;
	for(let i = 0; i<array.length; i++){
		if(typeof array[i] =="number"){
			countNum++;
		}
		else if(typeof array[i] =="string"){
			countString++;
		}
		else{
			console.log("One of the members of array does not correspond to the given specifications");
		}
	}
	return '"'.concat("Numbers : ",countNum, " , Strings: ",countString, '"');

}
//console.log(NumberOrString([1, 4, 'i am a string', '456']));



//Assignment 4


function LongestString(string){
	string = string.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
	let WordArray = string.split(" ");
	let MAX= WordArray[0];
	for(let i = 0; i<WordArray.length; i++){
		if(WordArray[i].length>=MAX.length){
			MAX = WordArray[i];
		}
	}
	return MAX;
}

//console.log(LongestString("Which would be worse - to live as a monster, or to die as a good man?"));



	//Assignment 5


function longestSub(str) {
 
   let oldStr = '';
   let newStr = '';
   let newCount = 0;
   let oldCount = 0;
   let arr = str.split('');

   for(let i = 0 ; i<arr.length; i++){
       if (!newStr.includes(arr[i]) || arr[i] ==' ') {
           newStr += arr[i] ;
           newCount++;
       } 
       else {
           newCount = newStr.length - newStr.indexOf(arr[i])-1;
           newStr = newStr.slice(newStr.indexOf(arr[i]) + 1, newStr.length) + arr[i];
       }
       if (newCount >= oldCount) {
           oldCount = newCount;
           oldStr = newStr;
       }   
	}
return oldStr;
}


//console.log(longestSub('there are no two words in the english language more harmful than "good job".'));



//Assignment 6



function  Move(string){
	let array = [];
	let final;
	for(let i =0; i<string.length;  i+=3 ){
		array.push(string.slice(i,i+3));
	}
	for(let i = 0; i < array.length;  i++){
		if(array[i].length===3){
			array[i]= array[i].charAt(1).concat(array[i].charAt(2),array[i].charAt(0))
		}
	}
	return array.join("");
}

//console.log(Move("aweyoolp"));




//Assignment 7


function ArrayofArrays(array){
	let final = [];
	let temp = [];
	let result = 1;
	if(!Array.isArray(...array)){
		result = "Invalid argument";
	}
	else{
		for(let i  of array){
			for(let j = 0; j<i.length; j++){
				if(i[j]<0){
					temp.push(i[j]);
				}
			}
			if(isFinite(Math.max(...temp))){
				final.push(Math.max(...temp));
			}
			temp=[];
		}
		if(final.length==0){
			result = "No negatives";
		}
		else{
			for(let i = 0; i<final.length; i++){
				result *= final[i];
			}
		}
	}
	return result;
}
// console.log(ArrayofArrays([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
// console.log(ArrayofArrays([[3, 4], [11, 0], [5, 6, 7, 8]]));
// console.log(ArrayofArrays([1,2,3]));



//Assignment 8


function AllPairs(array) {
	let newArray = [...new Set(array)];
	let main = [...newArray];
	let R1, R2, R3, R4;
	let first,second , final, full = [];

	if (main.length <= 2) {
		console.log(main);
	} else {
		for (let i = 0; i < main.length; i++) {
			R1 = +main.splice(0, 1);
			first = [...main];
			full.push(R1);
			for (let j = 0; j < first.length; j++) {
				R2 = +first.splice(0, 1);
				let second = [...first];
				full.push(R2);
				{
					for (let k = 0; k < second.length; k++) {
						R3 = second[k];
						full.push(R3);
						console.log(full);
						full.pop();

					}
					full.pop();
				}
			}
			full = [];
		}

	}
	for(let i = 0 ; i<newArray.length-2; i++){
		if(newArray[i]!==23){
			full = [newArray[i],newArray[newArray.length-2], newArray[newArray.length-1]];
			console.log(full);
		}

	}

}

// AllPairs([4]);
// AllPairs([19,6]);
// AllPairs([5, 9, 23, 0, -2, -1]);



