// Create an Object called person with properties name, age, and gender. Access and log the name property to the console.
const person = {
    name : "Pranav",
    age : 21,
    gender : 'M',

}
console.log(person.name);
// Create an arrow function named square that takes a numbers as a parameter and return the square of that number.
//arrow function 
const square  =  (num)=>{
    return num**2;
}
console.log(square(4));

// write a named function filterEvenNumber that takes an array of numbers as a parameter and returns a new array cotaining only the even numbers.
// Named Function 
const arr = [1, 2, 3, 4, 5, 6]
console.log("Array => "+arr );
const filterEvenNumberr =  arr.filter((arr)=>{
        return arr % 2 == 0;
    });

console.log(
    filterEvenNumberr
);

// Demonstrate Array Methods (map, filter, reduce).

// Map to square each number.

console.log("Array => "+arr );
const squareEachNum = arr.map((arr)=>{
    return arr = arr**2;
});
console.log(squareEachNum);

//Filter to extract even number.

const evenNum = arr.filter((arr)=>{
    return arr = arr%2==0;
});
console.log(evenNum);

// Reduce to calculate the sum of all elements.
const sumOfAll =  arr.reduce((arr, s) => {
    return s = s + arr;
});
console.log(sumOfAll);

