const menu = document.getElementById('clickable-menu');
const event = new Event('myEvent');

menu.addEventListener('click', function(e) {
  this.classList.add('open');
  this.dispatchEvent(event);
  // stopping propagation to avoid being captured by outer scope
  // e.stopPropagation();
});

document.addEventListener('click', function(e) {
  menu.classList.remove('open');
});

document.addEventListener('myEvent', function() {
  console.log('mmy Event triggered');
})
