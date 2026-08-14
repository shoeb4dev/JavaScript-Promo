let Number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Got the last index of Array Number
// console.log(Number[Number.length - 1]);

let num2 = [];

// Add something in the end of array
num2.push(10);
// console.log(num2);

//Remove  index value in the end of array
Number.pop();

// console.log(Number);

Number.unshift(5);

// console.log("Added value in the beginning: " + Number);

Number.shift();

// console.log("removing number from beginnig " + Number);

for (let i = 7; i < Number.length; i++) {
  console.log(Number[i]);
}

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function (num) {
  return num * 2;
});

console.log(result);




const number1 = [10, 20, 30, 40];

const result = number1.map(num => num + 5);

console.log(result);