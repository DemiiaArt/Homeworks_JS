const refs = {
  selectMenu: document.querySelector('#jokesCategories'),
  jokesList: document.querySelector('#jokesList'),
}

const getFile = file => fetch(file).then(data => data.ok? data.json() : Promise.reject(data.statusText))

const creatingOption = itemName => {
  const selectOption = document.createElement('option');
  selectOption.value = `${itemName}`;
  selectOption.textContent = `${itemName}`;
  refs.selectMenu.append(selectOption);
}

getFile(' https://api.chucknorris.io/jokes/categories')
  .then(data => {
    data.forEach(item => creatingOption(item))
    // return refs.selectMenu.selectedOptions.item(0)
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))

// console.dir(refs.selectMenu.selectedOptions.length)
