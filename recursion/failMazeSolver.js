function mazeSolver(maze, x = 0, y = 0) {
  const rows = maze.length - 1;

  const columns = maze[0].length - 1;

  // Base Case
  if (x < 0 || x > columns || y < 0 || y > rows) {
    // MISTAKE: x needs to be > rows; y > columns
    return "x and y must be >= 0";
  }

  if (maze[y][x] === "e") {
    return `Maze completed at ${x}:${y}`;
  }

  // Recursive case
  if (maze[y][x + 1] !== "*" && x < columns) {
    maze[y][x] = "*";
    return "R" + mazeSolver(x + 1, y, maze);
  }

  if (maze[y][x - 1] !== "*" && x >= 0) {
    maze[y][x] = "*";
    return "L" + mazeSolver(maze, x - 1, y);
  }

  if (maze[y + 1][x] !== "*" && y < rows) {
    maze[y][x] = "*";
    return "D" + mazeSolver(maze, x, y + 1);
  }

  if (maze[y - 1][x] !== "*" && y >= 0) {
    maze[y][x] = "*";
    return "U" + mazeSolver(maze, x, y - 1);
  }
}
