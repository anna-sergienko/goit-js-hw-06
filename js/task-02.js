const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredienEl = document.querySelector("#ingredients");
console.log(ingredienEl);

const ingredientsList= ingredients.map((element) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = element;
  listItem.style.listStyle = "none";

  return listItem;
});

console.log(ingredientsList);
ingredienEl.append(...ingredientsList);





// const ingredientsList = document.querySelector("#ingredients");

// for (const ingredient of ingredients) {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   ingredientsList.appendChild(listItem);
// }

// console.log(ingredientsList);