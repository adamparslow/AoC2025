import fs from 'fs';

function totalSurrounding(x: number, y: number, width: number, height: number, grid: string[][]) {
  let total = 0;
  if (x > 0 && y > 0 && grid[y - 1][x - 1] === "@") {
    total++;
  }

  if (x > 0 && grid[y][x - 1] === "@") {
    total++;
  }

  if (x > 0 && y < height - 1 && grid[y + 1][x - 1] === "@") {
    total++;
  }

  if (y > 0 && grid[y - 1][x] === "@") {
    total++;
  }

  if (y < height - 1 && grid[y + 1][x] === "@") {
    total++;
  }

  if (x < width - 1 && y > 0 && grid[y - 1][x + 1] === "@") {
    total++;
  }

  if (x < width - 1 && grid[y][x + 1] === "@") {
    total++;
  }


  if (x < width - 1 && y < height - 1 && grid[y + 1][x + 1] === "@") {
    total++;
  }

  return total;
}

type Response = {
  grid: string[][];
  removed: number;
}

function clearGrid(grid: string[][]): Response {
  const height = grid.length;
  const width = grid[0].length;
  const newGrid: string[][] = []

  for (let i = 0; i < height; i++) {
    newGrid[i] = [];
  }

  let accessible = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === "@") {
        const total = totalSurrounding(x, y, width, height, grid)
        if (total < 4) {
          accessible++;
          newGrid[y].push(".");
        } else {
          newGrid[y].push("@");
        }
      }
      else {
        newGrid[y].push(".");
      }
    }
  }

  return {
    grid: newGrid,
    removed: accessible
  }
}

function main() {
  const input = fs.readFileSync("src/q4/input.txt", "utf8");
  const lines = input.split('\n');
  const grid = lines.map(line => line.split(''));

  let currentRemoved = 100;
  let totalRemoved = 0;
  let currentGrid = grid;

  while (currentRemoved > 0) {
    const { grid: newGrid, removed } = clearGrid(currentGrid);

    console.log("removed", { removed });

    currentRemoved = removed;
    totalRemoved += removed;
    currentGrid = newGrid;
  }

  console.log(currentGrid);
  console.log(totalRemoved);
}

main();