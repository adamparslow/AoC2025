import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q6/input.txt", "utf8");
  const lines = input.split('\n');

  const cleanedUpLines = lines.map(line => line.replaceAll(/ +/g, " ").replaceAll(/^ */g, "").replaceAll(/ *$/g, "").split(" "));

  console.log("clean", { cleanedUpLines });

  const length = cleanedUpLines[0].length;
  let total = 0;

  for (let i = 0; i < length; i++) {
    const first = cleanedUpLines[0][i];
    const second = cleanedUpLines[1][i];
    const third = cleanedUpLines[2][i];
    const fourth = cleanedUpLines[3][i];
    const operator = cleanedUpLines[4][i];

    const value = eval(`${first} ${operator} ${second} ${operator} ${third} ${operator} ${fourth}`);

    console.log("value", { value });
    total += value;
  }

  console.log("total", { total });
}

main();