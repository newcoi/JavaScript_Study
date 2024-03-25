// // combining two array, we can concatinate array. we can add multiple array
 const boys = ['Ram', 'sham', 'bharat', 'tana', 'satish', 'hari', 'ratan'];
// const girls = ['Raama', 'sita', 'bharati'];

// const newArray = boys.concat(girls);
// //we can single vaule to the array with concatinate
// const newArray1 = boys.concat("bunny");

// console.log(newArray1);


// //finding index of value
// let elementIndex = boys.indexOf('bharat');
// console.log("index of bharat element is:", elementIndex);
// let lastElementIndex = boys.lastIndexOf('bharat');
// console.log("index of bharat element is:", lastElementIndex);

// //verify if element present
// let result = boys.includes("sham");
// console.log(result);

// //reversing array
// boys.reverse();
// console.log("After revesing the array:", boys);

//25_03
//Destructuring of array
//const[zero, first, second, third, forth, fifth] = boys
//if not intested in some elements of array
// const [zeroth,,,,,,last] = boys
// console.log(last);

// Nested arrays
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const resultArray = [array1, array2]
// console.log(resultArray);
// console.log(resultArray[0][1]);
// console.log(resultArray[1][2]);

//usage of destructuring, add 3 dots to get the content of array whatever be the count of element in the array
// const array3 = [1,2,3,22,true]
// const array4 = [4,5]
// const resultArr = [...array3, ...array4]
// console.log(resultArr);

// for(let i=0; i<=7;i++){
//     //console.log(boys[i]);
//     console.log(i);
//     console.log(boys[i]);
// }

// for(let i=0; i<=7;i+2){
//     console.log(boys[i]);
// }

//for loop for printing array element in reerse order
// for(let i=4; i>=0; i--){
//     console.log(`Array element is: ${boys[i]}`);
// }
// // when array length is unknown 
// for(let i=0; i<boys.length; i++){
//     console.log(boys[i]);
// }

//* Pattern printing
for(let i=0; i<=5;i++){
    console.log("*");
}

