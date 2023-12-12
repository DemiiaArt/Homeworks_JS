const refs = {
  selectMenu: document.querySelector("#jokesCategories"),
  jokesList: document.querySelector("#jokesList"),
};

//запит до API
const getFile = (file) =>
  fetch(file).then((data) =>
    data.ok ? data.json() : Promise.reject(data.statusText)
  );

//Створення селектору категорій
const creatingOption = (itemName) => {
  const selectOption = document.createElement("option");
  selectOption.value = `${itemName}`;
  selectOption.textContent = `${itemName}`;
  refs.selectMenu.append(selectOption);
};

//Рендер жарту
const currentJoke = (jokeData) => {
  const listLi = document.createElement("li");
  listLi.classList.add(`${jokeData.categories[0]}`);

  const catagoryTitle = document.createElement("p");
  catagoryTitle.textContent = "Category: ";
  const boldCategory = document.createElement("b");
  boldCategory.textContent = jokeData.categories[0];
  catagoryTitle.appendChild(boldCategory);

  const jokeText = document.createElement("p");
  jokeText.textContent = jokeData.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove joke";

  listLi.append(catagoryTitle, jokeText, removeBtn);
  refs.jokesList.prepend(listLi);

  for (i = 0; i < refs.selectMenu.children.length; i++) {
    if (refs.selectMenu.children[i].label === jokeData.categories[0]) {
      refs.selectMenu.children[i].disabled = true;
    }
  }
};

//отримання жартів за категорією
const getJokeByTheCategory = (category) => {
  return getFile(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
};

//категорії
getFile(" https://api.chucknorris.io/jokes/categories")
  .then((data) => {
    data.forEach((item) => creatingOption(item));
    let firstOption = refs.selectMenu.selectedOptions.item(0).label;
    return getJokeByTheCategory(firstOption);
  })
  .then((data) => currentJoke(data))
  .catch((error) => console.log(error));

//зміна категорії
const selectCategoryHandler = (event) => {
  const currentCategory = event.target.value;
  getJokeByTheCategory(currentCategory)
    .then((data) => currentJoke(data))
    .catch((error) => console.log(error));
};

//видалення жарту
const deleteJokeHandler = (event) => {
  if (event.target.nodeName === "BUTTON") {
    let categoryName = event.target.parentNode.className;

    for (i = 0; i < refs.selectMenu.children.length; i++) {
      if (refs.selectMenu.children[i].label === categoryName) {
        refs.selectMenu.children[i].disabled = false;
      }
    }

    event.target.parentNode.remove();
  }

  // if (refs.jokesList.childNodes.length === 0) {
  //   refs.jokesList.removeEventListener("click", deleteJokeHandler);
  // }
};

refs.selectMenu.addEventListener("change", selectCategoryHandler);
refs.jokesList.addEventListener("click", deleteJokeHandler);
