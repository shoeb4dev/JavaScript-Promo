let age = 20;

if (age < 13) {
  console.log("You are a child");
} else if (age < 18) {
  console.log("You are a teenager");
} else if (age < 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}


let number = -10;

if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}


let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else if (username !== "admin") {
  console.log("Invalid username");
} else {
  console.log("Invalid password");
}