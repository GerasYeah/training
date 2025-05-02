// Arrays of simple types
let numberList = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9];
let stringList = ["One", "two", "Three", "Four", "Five"];
let booleanList = [true, false, true, false, true];
let floatList = [1.5, 2.5, 3.5, 4.5, 5.5];

// Array of objects
let objectList = [
    {name: "Ana", age: 22},
    {name: "Paulo", age: 30},
    {name: "Maria", age: 17}
]

// Array of mixed types
let simpleMixedList = [1, "Two", 3, "Four", 5];
let mixedList = [1, "Two", 3.5, true, null, undefined, {name: "Pedro", age: 25}, [1, 2, 3]];

// Array with holes (empty elements)
let listWithSpaces = [1, , 3, , 5];
let emptyList = [];

// Acessing elements
console.log("First element of Number List: " + stringList[0]);
console.log("Last element of Boolean List: " + booleanList[booleanList.length - 1]);
console.log("First element of Object List: " + objectList[0].name);
console.log("Mixed List: " + mixedList);

// Methods and properties
console.log("Length of String List: " + numberList.length);