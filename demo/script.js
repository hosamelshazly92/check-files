// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let height = document.getElementById('inputHeight'),
    width = document.getElementById('inputWidth'),
    form = document.getElementById('sizePicker'),
    table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function (e) {
    e.preventDefault();

    makeGrid();
});

function makeGrid() {
    // Your code goes here!
    let rows = width.value,
        cols = height.value;

    table.innerHTML = '';

    for (let i = 1; i <= rows; i++) {
        let newRows = document.createElement("tr");
        for (let j = 1; j <= cols; j++) {
            let newCols = document.createElement("td");
            newRows.appendChild(newCols);
        };
        table.appendChild(newRows);
    };

    table.addEventListener("click", function (event) {
        let cell = event.target;
        cell.style.backgroundColor = color.value;
    });
}
