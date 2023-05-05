// Initialize HTML element variables
const gridContainer = document.getElementById("gridContainer");
const gridSize = document.getElementById("gridUserSelection");
let squares;

// Initialize grid size dimensions based on default drop-down menu selection 16x16
let numRows = parseInt(gridSize.value);
let numColumns = parseInt(gridSize.value);

// Create divs that form a grid of rows and columns
// Create divs within "gridContainer" div, which has the "display: grid property"
function createGrid (numRows, numColumns) {

   // Clear the grid, deleting the container's child elements (the div squares created)
   gridContainer.innerHTML = "";

    for (let i = 0; i < numRows * numColumns; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        gridContainer.appendChild(div);
    }
  // Populate the 'squares' variable with all the HTML elements
  // tagged with the 'square' class created above
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
      }, 800);
    });
}

// Add an event listener to the drop-down menu where user selects grid size
gridSize.addEventListener("change", () => {
  // Update numRows and numColumns variables with new grid size
  numRows = parseInt(gridSize.value);
  numColumns = parseInt(gridSize.value);

  // Update the CSS properties for the grid size
  gridContainer.style.setProperty("--numColumns", numColumns);
  gridContainer.style.setProperty("--numRows", numRows);

  // Recreate the grid with the new values
  createGrid(numRows, numColumns);
});