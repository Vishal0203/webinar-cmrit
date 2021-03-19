let draggedElement = null;
let boxes = document.getElementsByClassName('box');

function handleDragStart(e) {
  e.target.style.opacity = '0.5';
  // setting item in action to a variable
  draggedElement = e.target;

  // setting data transfer channel with dragged items html
  e.dataTransfer.setData('text/html', draggedElement.innerHTML);
}

function handleDragEnd(e) {
  e.target.style.opacity = '1';
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.stopPropagation();

  if (draggedElement !== e.target) {
    // exchanging inner html of dragged item with item on which drop is performed
    draggedElement.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
}

for(let box of boxes) {
  box.addEventListener('dragstart', handleDragStart, false);
  box.addEventListener('dragend', handleDragEnd, false);
  box.addEventListener('drop', handleDrop, false);
  box.addEventListener('dragover', handleDragOver, false);
}
