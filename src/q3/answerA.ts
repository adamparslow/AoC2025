import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q3/input.txt", "utf8");
  const lines = input.split('\n');

  let total = 0;

  for (let line of lines) {
    console.log("line", { line });

    const numbers = line.split('').map(s => parseInt(s));
    let num = "";

    let digitCount = 12;

    let startIndex = 0;
    for (let x = 0; x < digitCount; x++) {
      console.log("x", { x, digitCount });

      let index = startIndex;

      for (let i = startIndex + 1; i < numbers.length - (digitCount - x - 1); i++) {
        console.log("i", {i });

        if (numbers[i] > numbers[index]) index = i;
      }

      console.log("index", { index });

      num += numbers[index].toString();

      startIndex = index+ 1;
    }

    console.log("Num", { num });

    // let tensIndex = 0;
    
    // for (let i = 1; i < numbers.length - 1; i++) {
    //   if (numbers[i] > numbers[tensIndex]) tensIndex = i;
    // }

    // let onesIndex = tensIndex + 1;
    // for (let i = onesIndex + 1; i < numbers.length; i++) {
    //   if (numbers[i] > numbers[onesIndex]) onesIndex = i;
    // }

    // const number = parseInt(`${numbers[tensIndex]}${numbers[onesIndex]}`);
    // console.log("value", { number });

    total += parseInt(num);
  }

  console.log("total", { total });
}

main();