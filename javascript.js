// Initialize HTML element variables
const gridContainer = document.getElementById("gridContainer");
const gridSize = document.getElementById("gridUserSelection");
const numRows = gridSize.value;
const numColumns = gridSize.value;
let squares;
console.log(numRows);

// Create divs that form a grid of rows and columns of divs/cells
// Create within "gridContainer" div, which has "display: grid property"
function createGrid (numRows, numColumns) {
    for (let i = 0; i < numRows * numColumns; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        gridContainer.appendChild(div);
    }
  // Populates the 'squares' variable with all the HTML elements
  // tagged with the "square" class created above
  squares = document.getElementsByClassName("square");
}

createGrid(numRows, numColumns);

// Loop through all the HTML elements in squares, which have the "square" class
// and add a mouseover EventListener to each of them
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "rgb(201, 167, 255)";
      setTimeout(() => {
        this.style.backgroundColor = "";
      }, 600);
    });
}