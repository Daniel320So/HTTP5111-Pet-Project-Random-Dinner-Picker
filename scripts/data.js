// ## Declare Global Variables //
let mealsData;

//Default data for Meal
class Meal {
    constructor(id, name, servings, difficulty, mainIngredients, prepTime, url) {
        this.id = id; //string
        this.name = name; //string
        this.servings = servings; //number
        this.difficulty = difficulty; //number from 1 - 5
        this.mainIngredients = mainIngredients; //string[]
        this.prepTime = prepTime //number in minutes
        this.url = url; //string
    }

    //Return path of the image 
    getImageSrc() {
        if (defaultMealsData.find( meal => meal.id == this.id)) {
            return `../images/meals/meal_${this.id}.webp`;
        } else {
            return localStorage.getItem(`meal_${this.id}`)
        }
    }

    //Retrun the ingredients
    getAllIngredients() {
        return this.mainIngredients.sort();
    }
}

let data = [
    {
        id: "1001",
        name: "Pasta Carbonara",
        servings: 5,
        difficulty: 2,
        mainIngredients: ["bacons","pasta","eggs","garlics","cheese"],
        prepTime: 30,
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1002",
        name: "Hamburger and Macaroni",
        servings: 4,
        difficulty: 2,
        mainIngredients: ["ground beef", "pasta", "onions", "tomatoes"],
        prepTime: 28,
        url: "https://www.simplyrecipes.com/recipes/hamburger_and_macaroni/"
    },
    {
        id: "1003",
        name: "Classic Patty Melt",
        servings: 2,
        difficulty: 4,
        mainIngredients: ["ground beef", "bread", "onions", "cheese"],
        prepTime: 50,
        url: "https://www.simplyrecipes.com/recipes/classic_patty_melt/"
    },
    {
        id: "1004",
        name: "Juicy Lucy Hamburger",
        servings: 6,
        difficulty: 4,
        mainIngredients: ["ground beef", "bread", "pickle", "cheese", "garlics"],
        prepTime: 57,
        url: "https://www.simplyrecipes.com/juicy-lucy-hamburger-recipe-5189528"
    },
    {
        id: "1005",
        name: "Bacon Cheeseburger",
        servings: 6,
        difficulty: 2,
        mainIngredients: ["bacons", "ground beef", "onions", "bread", "cheese"],
        prepTime: 30,
        url: "https://www.simplyrecipes.com/bacon-cheeseburger-recipe-5189497"
    },
    {
        id: "1006",
        name: "Portobello Mushroom Burger",
        servings: 4,
        difficulty: 3,
        mainIngredients: ["spinach", "mushrooms", "onion", "bread", "tomato"],
        prepTime: 30,
        url: "https://www.simplyrecipes.com/recipes/portobello_mushroom_burger/"
    },
    {
        id: "1007",
        name: "Lemon Chicken",
        servings: 5,
        difficulty: 5,
        mainIngredients: ["chicken", "lemons", "garlics"],
        prepTime: 115,
        url: "https://www.simplyrecipes.com/recipes/lemon_chicken/"
    },
    {
        id: "1008",
        name: "Crispy Cheese and Mushroom Quesadillas",
        servings: 5,
        difficulty: 1,
        mainIngredients: ["mushrooms", "tortillas", "garlics", "cheese", "salsa"],
        prepTime: 20,
        url: "https://www.simplyrecipes.com/recipes/crispy_cheese_and_mushroom_quesadillas/"
    },
    {
        id: "1009",
        name: "Apple Chicken Quesadilla",
        servings: 2,
        difficulty: 1,
        mainIngredients: ["chicken", "tortillas", "apple", "cheese", "salsa"],
        prepTime: 10,
        url: "https://www.simplyrecipes.com/recipes/apple_chicken_quesadilla/"
    },
    {
        id: "1010",
        name: "Vegan Mushroom Stroganoff",
        servings: 6,
        difficulty: 3,
        mainIngredients: ["onion", "pasta", "mushrooms", "garlics"],
        prepTime: 45,
        url: "https://www.simplyrecipes.com/vegan-mushroom-stroganoff-recipe-5216638"
    }
]

const defaultMealsData = data.map( meal => {
    return new Meal(meal.id, meal.name,  meal.servings, meal.difficulty, meal.mainIngredients, meal.prepTime, meal.url)
})

// ## Functions //

// Get Data from local storage
const getMealDataFromLocalStorage = () => {

    let data = []
    let dataVal = localStorage.getItem("mealsData")

    // Return null if empty
    if (!dataVal) return null;    
    let dataArr = dataVal.split("},")
    dataArr.map( (meal,i) => {
        let obj;
        if ( i != dataArr.length - 1) {
            obj = JSON.parse(meal+"}")
        } else {
            obj = JSON.parse(meal)
        }
        let mealObj = new Meal(obj.id, obj.name, obj.servings, obj.difficulty, obj.mainIngredients, obj.prepTime, obj.url)
        data.push(mealObj)
    })
    return data;
}

const setMealsInLocalStorage = () => {
    localStorage.setItem("mealsData", mealsData.map( meal => JSON.stringify(meal)));
}

// Global Functions for Meals
const getAllIngredients = (meals) => {
    let ingredients = []
    if (!meals) meals = mealsData;
    meals.map( meal => {
        meal.getAllIngredients().map(ingredient => {
            if (!ingredients.find(v => v == ingredient)) ingredients.push(ingredient)
        })
    })
    return ingredients.sort();
}

// Add Meal Summary
const addMealSummary = (parentEleId, meal) => {
    const mealSummary = `<div class="meal-summary" id="summary-${meal.id}"></div>`
    $(parentEleId).append(mealSummary);
    const mealImage = `<div class="meal-image"><img src="${meal.getImageSrc()}" alt="An Image of ${meal.name}"></div>`
    $(`#summary-${meal.id}`).append(mealImage)
    const summary = `<div class="summary" id="sum-${meal.id}"></div>`
    $(`#summary-${meal.id}`).append(summary)
    $(`#sum-${meal.id}`).append(`<h3>${meal.name}</h3>`)

    const details = `<div class="details" id="details-${meal.id}"></div>`
    $(`#sum-${meal.id}`).append(details)

    let detailsDiff = `<div class="details-diff"><p class="details-text">Difficulty</p>` + `<div class="stars">`
    detailsDiff = detailsDiff + `<span class="fa fa-star checked"></span>`.repeat(meal.difficulty) + `<span class="fa fa-star"></span>`.repeat(5-meal.difficulty) + `</div></div>`
    $(`#details-${meal.id}`).append(detailsDiff)

    const detailsPrep = `<div class="details-prep"><p class="details-text">Prep Time</p><p>${meal.prepTime} mins</p></div>`
    $(`#details-${meal.id}`).append(detailsPrep)

    const detailServings = `<div class="details-servings"><p class="details-text">Servings</p><p>${meal.servings} People</p></div>`
    $(`#details-${meal.id}`).append(detailServings)

    const detailIngredients = `<div class="details-ingredient"><p class="details-text">Ingredients</p><p>${meal.mainIngredients.join(", ")}</p></div>`
    $(`#details-${meal.id}`).append(detailIngredients)
}

//Load Data
const loadData = () => {
    
    //Load Data from local storage
    mealsData = getMealDataFromLocalStorage()

    //If no data, load default and set local storage
    if (!mealsData) {
        mealsData = defaultMealsData
        setMealsInLocalStorage();
    }
}