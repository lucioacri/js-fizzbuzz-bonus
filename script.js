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

//   aggiunto un solo console log
