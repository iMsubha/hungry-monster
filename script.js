function searchButton(){
    console.log("clicked");
    const mealSearch = document.getElementById("meal").value;
    console.log(mealSearch);
    //getMealData(mealSearch[0]);
    getMealData(mealSearch);
   // document.getElementById("meal-thumb").style.display = "block";
}
//getMealData();
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
           //console.log(`id-${i}`);

          // console.log(`${ingredient1} ${ingredient2} ${ingredient3} ${ingredient4} ${ingredient5}`);
           const mealDiv = document.createElement('meal-thumbnail')
           mealsDiv.classList =`container ml-4`
           const mealsInfo=` 
                <div onclick="displayMealDetails('${mealName}')">
                <img id="meal-thumb-img" class="meal-thumb-img" src=${mealImage} alt="food-image">
                <h3 id="meal-title" class="meal-title mt-2 pt-1">${mealName}</h3>
                </div>
           `
        //    const mealDetailsDiv = document.createElement('meal-details')
        //    const mealDetailsInfo=`
        //        <img class="meal-details-image d-flex justify-content-center" src=${mealImage}  alt="food-image">
        //        <h3 class="mt-4">${mealName}</h3>
        //        <p class="font-weight-bold">Ingredients</p>
        //        <ul class="font-weight-light">
        //            <li>${ingredient1}</li>
        //            <li>${ingredient2}</li>
        //            <li>${ingredient3}</li>
        //            <li>${ingredient4}</li>
        //            <li>${ingredient5}</li> 
        //        </ul>
        //    `

           mealDiv.innerHTML = mealsInfo;
           mealsDiv.appendChild(mealDiv);
       }  
   })

   
}

function displayMealDetails(name){
  //  console.log(name);

  const url=  `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  console.log(url);
}