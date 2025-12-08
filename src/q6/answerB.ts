import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q6/input.txt", "utf8");
  const lines = input.split('\n');
  let total = 0;

  const operators = lines[lines.length - 1];
  const operatorIndexes = [];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] !== " ") operatorIndexes.push(i);
  }

  const spans = [];
  let prevOperator = 0;
  for (let operatorIndex of operatorIndexes.slice(1)) {
    spans.push([prevOperator, operatorIndex - 2]);
    prevOperator = operatorIndex;
  }
  spans.push([operatorIndexes[operatorIndexes.length - 1], operators.length - 1])

  for (let span of spans) {
    const [start, end] = span;

    console.log("span", { start, end })

    const operator = operators[start];
    let evalString = "";

    for (let i = end; i >= start; i--) {
      let number = "";

      for (let j = 0; j < 4; j++) {
        const currChar = lines[j][i];
        console.log("currChar", { currChar, i , j });
        if (currChar !== "") number += currChar;
      }

      evalString += i !== start ? `${number}${operator}` : number;
    }

    console.log(evalString);
    const value = eval(evalString);
    total += value;
  }

  console.log(total);
}

main();