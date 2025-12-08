import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q7/input.txt", "utf8");
  const grid = input.split('\n');

  const start = grid[0].indexOf('S');
  console.log("start", { start });
  console.log(grid[0]);

  let beams = new Set([start]);
  let splits = 0;

  for(let row of grid.slice(1)) {
    let newRow = row.split("");
    const oldBeams = new Set(beams);
    // console.log("oldBeams", { oldBeams });

    for (let beam of oldBeams) {

      // console.log("beam", { beam });

      if (row[beam] === "^") {
        beams.delete(beam);
        beams.add(beam-1);
        newRow[beam-1] = "|"
        beams.add(beam+1);
        newRow[beam+1] = "|"
        // console.log("values", { oldBeams, beams })

        splits++;
      } else {
        newRow[beam] = "|";
      }
    }

    // console.log("beams", { beams });

    console.log(newRow.join(""));
  }

  console.log("Splits", { splits })
}

main();