// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let height = document.getElementById('inputHeight'),
    width = document.getElementById('inputWidth'),
    btn = document.getElementById('btn'),
    table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

// Grid mount function
function makeGrid() {

  // Storing grid height value
  const gridHeight = document.getElementById('inputHeight').value;
  // Storing grid width value
  const gridWidth = document.getElementById('inputWidth').value;
  // Storing table canvas
  const canvas = document.getElementById('pixelCanvas');

  // Delete rows to start
  canvas.innerHTML = '';

  // Another way to delete rows
  // while (canvas.rows.length > 0) {
  //   canvas.deleteRow(0);
  // }

  // Loop to insert the rows
  for (let i = 0; i < gridHeight; i++) {
    let row = canvas.insertRow(i);

    // Loop to insert the cells
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      // Add click event to the cells
      cell.addEventListener('click', function(event) {
        // When the cell is clicked, the background color changes to the selected color
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

// Add click event to the submit input
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  // When the data is submitted the grid mount function is called
  makeGrid();
});