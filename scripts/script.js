import {Meals, Meal} from "./meals"

// ## Variables //
let meals = Meals;

// ## Functions //

// Picker Function
// Filtering is on mainIngredient & it is optional
const randomPicker = (ingredientFilter) => {
    const filteredMeals = (!ingredientFilter)? meals : meals.filter(meal => {
        meal.mainIngredients.some( i => i.name == filter);
    });
    const length = filteredMeals.length; 
    const randomNumber = Math.floor(Math.random() * (length-1));
    const pickedMeal = filteredMeals(randomNumber);
    return pickedMeal;
};

// Get Meals Function
const getAllMealNames = () => {
    return meals.map(meal => meal.name);
};

const getMealObject = (id) => {
    return meals.filter(meal => meal.id == id);
};

// Add Menu Function

// interface data : {
//     name: string,
//     category: string,
//     servings: number,
//     mainIngredients: {
//         name: string,
//         qty: number,
//         unit string,
//     }[],
//     steps: string[],
//     url: string
// }

const addMealObject = (meal) => {
    const nextId = meals.length;
    meals.push(new Meal(nextId, meal.name, meal.category, meal.servings, meal.mainIngredients, meal.steps, meal.url));
    return true
};

