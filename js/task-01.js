// "use strict";

// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items)
// });

// console.log(foodIngredients);

const categoriesAnimal = document.querySelectorAll(".item");
console.log(`Categories ${categoriesAnimal.length}`);
categoriesAnimal.forEach((elem) => {
  return console.log(`Category: ${elem.querySelector("h2").textContent}
    Elements:${elem.querySelectorAll("li").length}`);
});
