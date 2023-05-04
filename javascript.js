let numHorizontalDivs = 4;
let numVerticalDivs = 8;
const container = document.getElementById('container');

// Create horizontally distributed divs for desired grid size
function createHorizontalDivs (numHorizontalDivs) {
    for (i = numHorizontalDivs; i > 0; i--) {
        const div = document.createElement('div');
        div.textContent = 'I am Horiz Div';
        div.setAttribute('class', 'horizontalBox');
        container.appendChild(div);    
    }
}

// Create vertically distributed divs for desired grid size
function createVerticalDivs(numVerticalDivs) {
    for (i = numVerticalDivs; i > 0; i--) {
        const div = document.createElement('div');
        div.textContent = 'I am Vert Div';
        div.setAttribute('class','verticalBox');
        container.appendChild(div);
    }
}

createHorizontalDivs(numHorizontalDivs);
createVerticalDivs(numVerticalDivs); 