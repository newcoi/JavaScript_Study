//Array- which can hold more than 1 value
const fruits =['Apple',"Banana", `kiwi`];
console.log(fruits);
console.log(("Array length is :", fruits.length));
//Adding element to array
//add at perticular position
fruits[2] ="tasty";
//adds at last
fruits.push(1111);
//adds at start
fruits.unshift("newElement");
console.log("modified Array:", fruits);

//replacing the elements
fruits.splice(3, 1, 'lemon');
console.log("After Splice:", fruits);

//Slice out the string
const newArray = fruits.slice(1,3);
console.log("new Sliced Array is:", newArray);


//acccessing the arrray elements
console.log("Element at zero position:", fruits[0]);
console.log("Another way to access array element:", fruits.flat(1));

//Removing elelment from array
fruits.pop();
console.log("Array after popping:", fruits);

//add at start
fruits.shift();
console.log("Array after shift:", fruits);

//getting length of array


const fruits1 =['Apple',"Banana", `kiwi`,55,[3,4,6,6,77]];
const arryName = new Array('Apple',"Banana", `kiwi`,55,[3,4,6,6,77]);
console.log(fruits[2]);
console.log(fruits1);

const fruit = []
fruit[0] = "Mango";
fruit[1] = "Apple";
console.log(fruit);
