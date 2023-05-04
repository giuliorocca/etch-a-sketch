const container = document.getElementById('container');
const square = document.getElementsByClassName('square');

numRows = 16;
numColumns = 16;

// Create divs and append them to the container div
// The container div is set to display: grid so it will
// automatically arrange the new divs into a grid as specified in CSS
function createGrid () {
    for (let i = 0; i < numRows*numColumns; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'red';
    setTimeout(() => {
        square.style.backgroundColor = '';
    }, 2000);
});



// function createGrid (numRows, numColumns) {
    
//     // Create horizontally distributed divs ('rows') for desired grid size
//     for (i = 0; i < numRows; i++) {
//         const rowdiv = document.createElement('div');
//         rowdiv.textContent = 'I am Horiz Div';
//         rowdiv.setAttribute('class', 'row');
//         container.appendChild(rowdiv);    
//     }
//         // Create vertically distributed divs ('columns') for desired grid size
//         for (i = 0; i < numColumns; i++) {
//             const columndiv = document.createElement('div');
//             columndiv.textContent = 'I am Vert Div';
//             columndiv.setAttribute('class', 'column');
//             rowdiv.appendChild(columndiv);
//         }
// }

createGrid(numRows, numColumns);