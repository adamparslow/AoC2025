import fs from "fs";

const START = 50;

function main() {
  const input = fs.readFileSync("src/q1/input.txt", "utf8");
  const rotations = input.split("\n");

  let position = START;
  let tally = 0;

  for (let rotation of rotations) {
    const direction = rotation[0];
    const steps = parseInt(rotation.slice(1));

    if (direction === "L") {
      for (let i = 0; i < steps; i++) {
        position--;
        position %= 100;

        if (position === 0) {
          tally++;
        }
      }
    } else {
      for (let i = 0; i < steps; i++) {
        position++;
        position %= 100;

        if (position === 0) {
          tally++;
        }
      }
    }
  }

  console.log("Tally", { tally });
}

main();
