import fs from 'fs';

function main() {
  const input = fs.readFileSync("src/q5/input.txt", "utf8");
  const lines = input.split('\n');

  const intervals = lines.map(line => line.split("-").map(s => parseInt(s))).sort((a, b) => a[0] - b[0]);

  console.log(intervals);

  const firstInterval = intervals.shift();

  if (!firstInterval) return;

  const completedIntervals: number[][] = [firstInterval];

  while (intervals.length !== 0) {
    const interval = intervals.shift();

    if (!interval) break;

    const [first, last] = interval;

    const lastInterval = completedIntervals[completedIntervals.length - 1];
    const [lastFirst, lastLast] = lastInterval;

    if (lastFirst <= first && lastLast >= first) {
      if (lastLast < last) lastInterval[1] = last;
    } else {
      completedIntervals.push(interval);
    }
  }

  console.log(completedIntervals);

  let size = 0;

  for (let interval of completedIntervals) {
    size += interval[1] - interval[0] + 1;
  }

  console.log(size);
}

main();