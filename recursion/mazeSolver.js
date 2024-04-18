function mazeSolver(maze, x = 0, y = 0) {
  const rows = maze.length - 1;
  const columns = maze[0].length - 1;

  // Base Cases
  if (x < 0 || x > rows || y < 0 || y > columns) {
    return ``;
  }

  if (maze[x][y] === "e") {
    return ``;
  }

  // Recursive Cases

  // Move Right
  if (y < columns && maze[x][y + 1] !== "*") {
    maze[x][y] = "*";
    return "R" + mazeSolver(maze, x, y + 1);
  }

  // Move Down
  if (x < rows && maze[x + 1][y] !== "*") {
    maze[x][y] = "*";
    return "D" + mazeSolver(maze, x + 1, y);
  }

  // Move Up
  if (x > 0 && maze[x - 1][y] !== "*") {
    maze[x][y] = "*";
    return "U" + mazeSolver(maze, x - 1, y);
  }

  // Move Left
  if (y < columns && maze[x][y - 1] !== "*") {
    maze[x][y] = "*";
    return "L" + mazeSolver(maze, x, y - 1);
  }
}
