const menu = document.getElementById('clickable-menu');

menu.addEventListener('click', function(e) {
  this.classList.add('open');
  // stopping propagation to avoid being captured by outer scope
  e.stopPropagation();
});

document.addEventListener('click', function(e) {
  menu.classList.remove('open');
});
