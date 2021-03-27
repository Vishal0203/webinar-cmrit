(async function() {
  const ENDPOINT = '/api/fruits';

  const displayFruitList = function(fruits) {
    const fruitList = document.getElementById('fruit-list')
    fruitList.innerHTML = '';

    fruits.map((fruit) => {
      const li = document.createElement('li');
      li.className = 'font-15';
      li.innerText = fruit;
      fruitList.appendChild(li);
    })
  }

  const response = await fetch(ENDPOINT);
  displayFruitList(await response.json());

  const addnew = document.getElementById('add-new-fruit');
  addnew.addEventListener('click', async function() {
    const newFruit = document.querySelector('input[name="newFruit"]').value;
    const body = { newFruit };

    const response =  await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    displayFruitList(await response.json());
  })
})();