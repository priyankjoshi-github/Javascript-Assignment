let numbers = [1, 2, 3, 4, 5];

//square
Array.prototype.square = function () {
  var num1 = [];
  this.map(function (obj) {
    num1.push(obj * obj);
  });
  return num1;
};
console.log(numbers.square());

//square root
let numbers1 = [1, 4, 9, 16, 25];
const newArray = numbers1.map(Math.sqrt);
console.log(newArray);