import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q5/input.txt", "utf8");
  const lines = input.split('\n');
  const fresh = [];
  const items = [];

  for (let line of lines) {
    if (line.includes("-")) {
      const [first, last] = line.split("-").map(s => parseInt(s));

      fresh.push([first, last]);
    } else if (line !== "") {
      items.push(parseInt(line));
    }
  }

  let freshNo = 0;

  for (let item of items) {
    for (let freshPair of fresh) {
      const [first, last] = freshPair;
      if (first <= item && last >= item) {
        freshNo++;
        console.log("fresh", { item, freshPair})
        break;
      }
    }
  }

  console.log(fresh);
  console.log(items);

  console.log(freshNo);
}

main();