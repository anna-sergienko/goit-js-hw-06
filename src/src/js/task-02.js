const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
}

console.log(ingredientsList);