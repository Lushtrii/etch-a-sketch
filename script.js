function createGrid(numRows, numCols) {
  const container = document.querySelector("#grid");

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const gridCell = createGridCell();
      container.appendChild(gridCell);
    }
  }
}

function createGridCell() {
  const gridCell = document.createElement("div");
  gridCell.classList.add("grid-cell");
  gridCell.addEventListener("mouseover", () => {
    gridCell.classList.add("filled");
  });
  return gridCell;
}

createGrid(16, 16);
