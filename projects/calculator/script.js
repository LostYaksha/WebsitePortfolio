function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
  
function clearDisplay() {
    document.getElementById('display').value = '';
}
  
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
  
function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
}
  



const shapesContainer = document.querySelector('.shapes-container');

function createShape() {
  const shape = document.createElement('div');
  shape.classList.add('shape');

  const size = Math.random() * 100 + 20; // Random size between 20 and 120
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;

  const top = Math.random() * (window.innerHeight - size);
  const left = Math.random() * (window.innerWidth - size);
  shape.style.top = `${top}px`;
  shape.style.left = `${left}px`;

  // Set a random animation delay for each shape
  shape.style.animationDelay = `${Math.random() * 5}s`;

  shapesContainer.appendChild(shape);
}

// Create a certain number of shapes (adjust as needed)
for (let i = 0; i < 20; i++) {
  createShape();
}