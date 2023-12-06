const weight = prompt("Please enter your weight(kg)");
const height = prompt("Please enter your height(m)");

let total = weight / (height ** 2);

alert(`Your BMI is ${total}`)