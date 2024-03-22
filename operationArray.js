// combining two array, we can concatinate array. we can add multiple array
const boys = ['Ram', 'sham', 'bharat', 'tana', 'bharat', 'raam', 'bharat'];
const girls = ['Raama', 'sita', 'bharati'];

const newArray = boys.concat(girls);
//we can single vaule to the array with concatinate
const newArray1 = boys.concat("bunny");

console.log(newArray1);


//finding index of value
let elementIndex = boys.indexOf('bharat');
console.log("index of bharat element is:", elementIndex);
let lastElementIndex = boys.lastIndexOf('bharat');
console.log("index of bharat element is:", lastElementIndex);

//verify if element present
let result = boys.includes("sham");
console.log(result);

//reversing array
boys.reverse();
console.log("After revesing the array:", boys);
