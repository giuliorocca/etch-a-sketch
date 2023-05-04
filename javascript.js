numHorizontalDivs = alert('how many horizontal divs you want?')

// Create horizontally distributed divs for desired grid size
function createHorizontalDivs (numHorizontalDivs) {
    for (i = numHorizontalDivs; i >= 0; i--) {
        const div = document.createElement('div');
        div.textContent = 'I am Div';
        container.appendChild(div);    
    }
}

// Create vertically distributed divs for desired grid size
