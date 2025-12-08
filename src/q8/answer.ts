import fs from 'fs';

function makeKey(coord: number[]) {
  return coord.join(",");
}

function main() {
  const input = fs.readFileSync("src/q8/input.txt", "utf8");
  const lines = input.split('\n');

  const coords = lines.map(line => line.split(",").map(s => parseInt(s)));

  const pairs = [];
  for (let i = 0; i < coords.length; i++) {
    for (let j = i + 1; j < coords.length; j++) {
      pairs.push([coords[i], coords[j]]);
    }
  }

  const distances = pairs.map(([a, b]) => {
    return {
      pairKey: [makeKey(a), makeKey(b)],
      distance: Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2))
    }
  }).sort((a, b) => a.distance - b.distance);

  const circuits: string[][] = [];

  for (let distance of distances.slice(0, 1000)) {
    const [first, second] = distance.pairKey;
    let firstCircuit = -1;
    let secondCircuit = -1;

    circuits.forEach((circuit, index) => {
      if (circuit.includes(first)) firstCircuit = index;
      if (circuit.includes(second)) secondCircuit = index;
    });

    console.log({ firstCircuit, secondCircuit })

    if (firstCircuit !== -1 && secondCircuit !== -1) {
      if (firstCircuit !== secondCircuit) {
        circuits[firstCircuit] = [
          ...circuits[firstCircuit],
          ...circuits[secondCircuit]
        ];

        circuits.splice(secondCircuit, 1);
      }
    } else if (firstCircuit !== -1) {
      circuits[firstCircuit].push(second);
    } else if (secondCircuit !== -1) {
      circuits[secondCircuit].push(first);
    } else {
      circuits.push([first, second]);
    }
  }

  const lengths = circuits.map(circuit => circuit.length).sort((a, b) => b - a);

  console.log(lengths);

  console.log(lengths.slice(0, 3).reduce((prev, curr) => prev * curr, 1));
}

main();