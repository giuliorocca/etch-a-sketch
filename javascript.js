// Initialize HTML variables
const container = document.getElementById("container");
const squares = document.getElementsByClassName("square");

// Initialize grid size
const numRows = 16;
const numColumns = 16;

// Create divs that form a grid of rows and columns of divs/cells
// Create within "container" div, which has "display: grid property"
function createGrid (numRows, numColumns) {
    for (let i = 0; i < numRows * numColumns; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

// Loop through all the HTML elements in squares, which have the "square" class
// and add a mouseover EventListener to each of them
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "red";
      setTimeout(() => {
        this.style.backgroundColor = "";
      }, 2000);
    });
}

createGrid(numRows, numColumns);