import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q7/input.txt", "utf8");
  const grid = input.split('\n');

  const start = grid[0].indexOf('S');
  console.log("start", { start });
  console.log(grid[0]);

  // let beams = new Set([{ start, beamCount: 1 }]);
  const beamCount = [];
  for (let i = 0; i < grid[0].length; i++) {
    if (i === start) beamCount.push(1)
    else beamCount.push(0);
  }

  console.log(beamCount);
  let splits = 0;

  for (let row of grid.slice(1)) {
    let newRow = row.split("");

    for (let i = 0; i < row.length; i++) {
      const count = beamCount[i];
      if (row[i] === "^") {
        beamCount[i] = 0;
        beamCount[i - 1] += count;
        beamCount[i + 1] += count;
        newRow[i - 1] = "|"
        newRow[i + 1] = "|"

        splits++;
      } else if (count > 0) {
        newRow[i] = "|";
      }
    }

    // console.log("beams", { beams });

    console.log(newRow.join(" "));
    console.log(beamCount.join(" "))
  }

  console.log(beamCount.reduce((a, b) => a + b, 0))
}

main();