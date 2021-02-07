
const displaymenu = foodName =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
    .then(res => res.json())
    .then(data => displayfood(data.meals));


    const displayfood = menufoods => {
    const menufoodsDiv = document.getElementById('menufoods');
    menufoods.forEach(food => {

        const foodDiv = document.createElement('div');
        foodDiv.className ='foods'
        const menuInfo = `
        <div onclick="displayfoodDetails('${food.idMeal}')">
        <img scr ="${food.strMealThumb}">
           <h3 class ="food-meal ">${food.strMeal}</h3>
          </div>
            `;
        foodDiv.innerHTML = menuInfo;
        menufoodsDiv.appendChild(foodDiv);
    });
}
}
const displayfoodDetails = foodmenuId => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodmenuId}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayIngredient(data.meals[0]));
}

document.getElementById('search-btn').addEventListener("click", ()=>{
    const inputfood = document.getElementById('foodsMenuDetsils').value;
    displaymenu(inputfood);
});

let displayIngredient = (data) => {
    Document.getElementById("menufoods").style.display = "fixed";
    let menuItems =`
    <div class="menufoods"
    <div>
       <img src ="${data.strMealThumb}">
       </div>
       <div>  <p>${food.strIngredient1}</p>
       <p>${food.strIngredient2}</p>
       <p>${food.strIngredient3}</p>
       <p>${food.strIngredient4}</p>
       <p>${food.strIngredient5}</p>
       <p>${food.strIngredient6}</p>
       <p>${food.strIngredient7}</p>
       <p>${food.strIngredient8}</p>
       <p>${food.strIngredient9}</p>
       <p>${food.strIngredient10}</p>
       </div>
      
       `;
}

           