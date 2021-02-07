function searchButton(){
    console.log("clicked");
    const mealSearch = document.getElementById("meal").value;
    console.log(mealSearch);
    getMealData(mealSearch);
}
function getMealData(mealName){
   fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
   .then(res => res.json())
   .then(data => {
       const meals =data.meals;
       console.log(meals);
       const mealsDiv = document.getElementById('meals');
       const mealsDetailsDiv = document.getElementById('meals-details');
       for (let i = 0; i < meals.length; i++) {
           const mealName = meals[i].strMeal;
           const mealImage = meals[i].strMealThumb;
           const ingredient1 = meals[i].strIngredient1;
           const ingredient2 = meals[i].strIngredient2;
           const ingredient3 = meals[i].strIngredient3;
           const ingredient4 = meals[i].strIngredient4;
           const ingredient5 = meals[i].strIngredient5;

           const mealDiv = document.createElement('meal-thumbnail')
           mealsDiv.classList =`container ml-4`
           const mealsInfo=` 
                <div onclick="displayMealDetails('${mealName}')">
                <img id="meal-thumb-img" class="meal-thumb-img" src=${mealImage} alt="food-image">
                <h3 id="meal-title" class="meal-title mt-2 pt-1">${mealName}</h3>
                </div>`
           mealDiv.innerHTML = mealsInfo;
           mealsDiv.appendChild(mealDiv);
       }  
   })

   
}

function displayMealDetails(name){
  const url=  `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
 fetch(url)
 .then(res => res.json())
 .then(data => renderMealInfo(data.meals[0]));
}

const renderMealInfo = meal =>{
    console.log(meal);
    const mealDetailsDiv = document.getElementById('meal-details')
    mealDetailsDiv.innerHTML=`
           <img class="meal-details-image d-flex justify-content-center" src=${meal.strMealThumb}  alt="food-image">
           <h3 class="mt-4">${meal.strMeal}</h3>
           <p class="font-weight-bold">Ingredients</p>
           <ul class="font-weight-light">
               <li>${meal.strIngredient1}</li>
               <li>${meal.strIngredient2}</li>
               <li>${meal.strIngredient3}</li>
               <li>${meal.strIngredient4}</li>
               <li>${meal.strIngredient5}</li> 
           </ul>`
}