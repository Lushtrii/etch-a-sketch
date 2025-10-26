const GRID_CELL_SIDE_LENGTH_PX = 25;
function createGrid(numRows, numCols) {
  const container = document.querySelector("#grid");
  container.style.width = `${GRID_CELL_SIDE_LENGTH_PX * numCols}px`;
  container.style.height = `${GRID_CELL_SIDE_LENGTH_PX * numRows}px`;
  container.addEventListener("mouseover", (e) => {
    e.target.classList.add("filled");
  });

  const childrenArr = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      childrenArr.push(generateGridCell());
    }
  }
  container.replaceChildren(...childrenArr);
}

function generateGridCell() {
  const gridCell = document.createElement("div");
  gridCell.style.width = `${GRID_CELL_SIDE_LENGTH_PX}px`;
  gridCell.style.height = `${GRID_CELL_SIDE_LENGTH_PX}px`;
  gridCell.classList.add("grid-cell");
  return gridCell;
}

function createResetButton() {
  const MIN_GRID_SQUARES = 1;
  const MAX_GRID_SQUARES = 100;
  const resetGridButton = document.createElement("button");
  resetGridButton.textContent = "Reset grid";

  resetGridButton.addEventListener("click", () => {
    const gridSideLength = +prompt(
      "Enter the number of grid squares per side (between 1 and 100):",
    );
    if (
      gridSideLength < MIN_GRID_SQUARES ||
      gridSideLength > MAX_GRID_SQUARES
    ) {
      alert(
        `ERROR: Grid side length is outside the bounds of [${MIN_GRID_SQUARES}, ${MAX_GRID_SQUARES}]`,
      );
    }
    createGrid(gridSideLength, gridSideLength);
  });

  const body = document.querySelector("body");
  const grid = document.querySelector("#grid");
  body.insertBefore(resetGridButton, grid);
}

function setupUI() {
  const DEFAULT_GRID_SIDE_LENGTH = 16;
  createResetButton();
  createGrid(DEFAULT_GRID_SIDE_LENGTH, DEFAULT_GRID_SIDE_LENGTH);
}

setupUI();
