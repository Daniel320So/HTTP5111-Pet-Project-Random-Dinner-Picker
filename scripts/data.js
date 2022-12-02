// ## Declare Global Variables //
let mealsData;

//Default data for Meal
class Meal {
    constructor(id, name, servings, difficulty, mainIngredients, prepTime, url) {
        this.id = id; //string
        this.name = name; //string
        this.servings = servings; //number
        this.difficulty = difficulty; //string
        this.mainIngredients = mainIngredients; //string[]
        this.prepTime = prepTime
        this.url = url; //string
    }

    //Return path of the image 
    getImageSrc() {
        return `../images/meals/meal_${this.id}.webp`;
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

// Functions

// Get Cookies
const getCookie = (cName) => {
    let name = cName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const getMealDataFromCookie = () => {
    let data = []
    let cookieVal = getCookie("Meals")

    // Return null if empty
    if (!cookieVal) return null;

    let cookieArr = cookieVal.split("},")
    cookieArr.map( (meal,i) => {
        let obj;
        if ( i != cookieArr.length - 1) {
            obj = JSON.parse(meal+"}")
        } else {
            obj = JSON.parse(meal)
        }
        let mealObj = new Meal(obj.id, obj.name, obj.servings, obj.difficulty, obj.mainIngredients, obj.prepTime, obj.url)
        data.push(mealObj)
    })
    return data;
}

// Set Cookies
const setCookie = (cName, cVal, expireDays) => {
    const expire = new Date(new Date().getTime() + (expireDays*24*60*60*1000))
    document.cookie = cName + "=" + cVal + "; expires=" + expire 
}

const setMealsInCookie = () => {
    setCookie("Meals", mealsData.map( meal => JSON.stringify(meal)))
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
    return ingredients;
}

//Load Data
const loadData = () => {
    
    //Load Data from cookies
    mealsData = getMealDataFromCookie()
    console.log()

    //If no data, load default and set cookies
    if (!mealsData) {
        mealsData = defaultMealsData
        setMealsInCookie();
    }
}