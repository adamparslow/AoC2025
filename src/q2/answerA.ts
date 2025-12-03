import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q2/input.txt", "utf8");
  const ranges = input.split(',');

  let sum = 0;

  for (let range of ranges) {
    const [start, end] = range.split("-").map(x => parseInt(x));

    for (let i = start; i <= end; i++) {

        const iString = i.toString();
        const length = iString.length;
        if (length % 2 === 0) {
            const part1 = iString.slice(0, length / 2);
            const part2 = iString.slice(length / 2, length);

            if (part1 === part2) {
                console.log("Colision", { part1, part2 });
                sum += i;
            }
        }
    }
  }

  console.log("sum", { sum });
}

main();