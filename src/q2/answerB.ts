import fs from 'fs';

function breakIntoChunks(s: string, size: number) {
  // console.log("break into chunks", { s, size });

  const chunks = [];
  const noOfChunks = s.length / size;

  for (let i = 0; i < noOfChunks; i++) {
    const chunk = s.slice(i * size, (i + 1) * size)

    // console.log("in loop", { i, chunk });

    chunks.push(chunk);
  }

  return chunks;
}

function compareChunks(chunks: string[]) {
  for (let i = 1; i < chunks.length; i++) {
    if (chunks[0] !== chunks[i]) {
      return false
    }
  }

  return true;
}

function detectColision(num: number) {
  const iString = num.toString();
  const length = iString.length;

  for (let chunkSize = 1; chunkSize < length; chunkSize++) {
    if (length % chunkSize === 0) {
      // console.log("chunkSize", chunkSize);

      const chunks = breakIntoChunks(iString, chunkSize);

      // console.log("chunks", { chunks })

      if (compareChunks(chunks)) {
        console.log("colision", { num })

        return num;
      }
    }
  }

  return 0;
}

function main() {
  const input = fs.readFileSync("src/q2/input.txt", "utf8");
  const ranges = input.split(',');

  let sum = 0;

  for (let range of ranges) {
    const [start, end] = range.split("-").map(x => parseInt(x));

    for (let i = start; i <= end; i++) {
      sum += detectColision(i);
    }
  }

  console.log("sum", { sum });
}

main();