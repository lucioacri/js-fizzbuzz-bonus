//   aggiunto un solo console log

for (let i = 1; i <= 100; i++) {
  let outputText = i;
  if (i % 5 === 0 && i % 3 === 0) {
    outputText = "FizzBuzz";
  } else if (i % 5 === 0) {
    outputText = "Buzz";
  } else if (i % 3 === 0) {
    outputText = "Fizz";
  }
  console.log(outputText);
}

// utilizzo 3 if

for (let i = 101; i <= 200; i++) {
  let outputText = "";
  if (i % 3 === 0) {
    outputText += "Fizz";
  }
  if (i % 5 === 0) {
    outputText += "Buzz";
  }
  console.log(outputText || i);
}

//      3    5
// 3    1    0
// 5    0    1
// 15   1    1
