const searchButton= () =>{
    const searchMealItem = document.getElementById("meal").value;
    document.getElementById("meal").value="";
    getMealData(searchMealItem);
}
// fetching meal items and display 
const getMealData = searchMeal => { 
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
   fetch(url)
   .then(res => res.json())
   .then(data => {
        const meals =data.meals;
        const mealsDiv = document.getElementById('meals');
        let searchMealFirstLetter = searchMeal[0].toLowerCase();
        
        meals.forEach(meal => {
            let mealFullName = meal.strMeal.toLowerCase();

            // checking each meal name from API 
            // with search meal's first letter 
            if(mealFullName.includes(searchMealFirstLetter)){
            const mealName = meal.strMeal;
            const mealImage = meal.strMealThumb;
            //create thumbnail to display
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
       });  
   })
}

//fetch single meal 
const displayMealDetails = name =>{
    const url=  `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
}

//create innerHTML for single meal 
const renderMealInfo = meal =>{
    const mealDetailsDiv = document.getElementById('meal-details')
    mealDetailsDiv.classList="d-flex flex-column justify-content-center align-items-center mb-3"
    mealDetailsDiv.innerHTML=`
           <img class="meal-details-image " src=${meal.strMealThumb}  alt="food-image">
            <h3 class="mt-4">${meal.strMeal}</h3>
            <p class="font-weight-bold">Ingredients</p>
            <ul class="font-weight-light list-checkbox">
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li> 
           </ul>
           `
}