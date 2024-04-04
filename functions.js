//multiple time action we use for loop
//when to use function:
//unless we call a function we cannot get output from function

//val1 and val2 are the arguments

// function nameOfTheFunction(input Arguments){
//     <code to be executed></code>
// }
// function addition(){
//     let result = 5+10;
//     console.log((`result is ${result}`));
// }
// addition();

// function addition1(val1, val2){
//     let result = val1-val2;
//     console.log((`result is ${result}`));
// }
// addition1(13, 4);

function addition2(val3, val4){
    let result = val3 + val4;
    return result;
}
let output = addition2(10, 20);
console.log(`Addition: ${output}`)