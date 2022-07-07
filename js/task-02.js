"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];





// const ulList = document.querySelector('#ingredients');


// const foodIngredients = ingredients.forEach(ingredient => {
//     let item = document.createElement("li");
  
//     item.innerHTML = ingredient;
//     ulList.append(item);
   
  
//   });
  
//   console.log(foodIngredients);

const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulEl.innerHTML = list;
  
  console.log(foodIngredients);




