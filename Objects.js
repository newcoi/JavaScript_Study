// defining object in array

const car = {
    make: 'BMW',
    model: 'X1',
    color: 'Black'
}

//accessing JS object
console.log(typeof(car));
console.log(car.model);
console.log(car["model"]);
//different type to access the values of object
console.log(`${car["model"]} ${car.color} ${car.make}`);