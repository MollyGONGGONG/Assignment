// Homework 2
"use strict";
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

/*
Given the array, implement a function for generating
a new array which doubles the quantity and price in each object.
*/

const doubleItem = itemsObject.map(({ quantity, price }) => ({
  quantity: quantity * 2,
  price: price * 2,
}));

//console.log(doubleItem);

/* Given the array, implement a function for generating
 a new array which contains item quantity > 2 and price > 300 only.
*/
function filterItem({ quantity, price }) {
  return quantity > 2 && price > 300;
}

const newItem = itemsObject.filter(filterItem);
//console.log(newItem);

/* Given the array, implement a function to calculate the total value of the items. */
let initialValue = 0;
let sumItems = itemsObject.reduce(
  (previousValue, currentValue) =>
    previousValue + currentValue.price * currentValue.quantity,
  initialValue
);

//console.log(sumItems);

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
/* Given the string, implement a function to remove all the 
non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/
const newString = string.replace(/[\W]+/g, " ").toLowerCase();
console.log(newString);
