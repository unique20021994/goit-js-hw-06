const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ulList = document.getElementById("ingredients");
const allIngredients = ingredients.forEach(ingredient => {
  let li = document.createElement("li");
  li.innerHTML = ingredient;
  ulList.append(li);
});
console.log(allIngredients);