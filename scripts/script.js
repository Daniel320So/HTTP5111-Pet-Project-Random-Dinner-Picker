// Measl Data

class Meal {
    constructor(id, name, servings, category, mainIngredients, steps, url) {
        this.id = id; //string
        this.name = name; //string
        this.servings = servings; //number
        this.category = category; //string
        this.mainIngredients = mainIngredients; //{name:string, qty:number, unit:string}[]
        this.steps = steps; //string[]
        this.url = url; //string
    }

    //Return path of the image 
    getImageSrc() {
        return `./images/meals/meal_${this.id}.webp`;
    }

    //Retrun the ingredients
    getAllIngredients() {
        return this.mainIngredients.map(ingredient => ingredient.name).sort();
    }
}

const data = [
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "pasta", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
        "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture"],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1002",
        name: "Hamburger and Macaroni",
        category: "Dinner",
        servings: 4,
        mainIngredients: [
            {name: "ground beef", qty: 1, unit: "lb"}, 
            {name: "pasta", qty: 2, unit: "cup"}, 
            {name: "onions", qty: 1, unit: ""},
            {name: "tomatoes", qty: 1, unit: ""},
        ],
        steps: ["Start cooking the pasta", "Brown the beef and onions",
        "Add the seasonings and tomatoes", "Drain the pasta", "Add the cooked pasta"],
        url: "https://www.simplyrecipes.com/recipes/hamburger_and_macaroni/"
    },
    {
        id: "1003",
        name: "Classic Patty Melt",
        category: "Dinner",
        servings: 2,
        mainIngredients: [
            {name: "ground beef", qty: 8, unit: "ounce"}, 
            {name: "bread", qty: 2, unit: "slice"}, 
            {name: "onions", qty: 4, unit: ""},
            {name: "cheese", qty: 4, unit: "slice"},
        ],
        steps: ["Cook the onions", "Cook the patties",
        "Butter your bread", "Build your sandwiches in the skillet", "Cook the sandwiches"],
        url: "https://www.simplyrecipes.com/recipes/classic_patty_melt/"
    },
    {
        id: "1004",
        name: "Juicy Lucy Hamburger",
        category: "Dinner",
        servings: 6,
        mainIngredients: [
            {name: "ground beef", qty: 2, unit: "lb"}, 
            {name: "bread", qty: 6, unit: "buns"}, 
            {name: "pickle", qty: 24, unit: "slice"},
            {name: "cheese", qty: 6, unit: "slice"},
            {name: "garlics", qty: 2, unit: "teaspoons"},
        ],
        steps: ["Prepare the cheese", "Divide ground chuck and form patties",
        "Stuff the patties with cheese", "Place burgers in fridge to set up", "Prepare the grill",
        "Season the burgers", "Grill the burger buns", "Assemble the burgers"],
        url: "https://www.simplyrecipes.com/juicy-lucy-hamburger-recipe-5189528"
    },
    {
        id: "1005",
        name: "Bacon Cheeseburger",
        category: "Dinner",
        servings: 6,
        mainIngredients: [
            {name: "bacons", qty: 15, unit: "slices"}, 
            {name: "ground beef", qty: 2, unit: "lb"}, 
            {name: "onions", qty: 0.25, unit: ""},
            {name: "bread", qty: 6, unit: "buns"}, 
            {name: "cheese", qty: 12, unit: "slices"}
        ],
        steps: ["Preheat the grill", "Prepare the cheese, chop the bacon, make burger mixture",
        "Form the patties", "Grill the bacon and set aside", "Prepare grill for burgers",
        "Grill the burgers and add the cheese", "Grill the buns", "Assemble the burgers"],
        url: "https://www.simplyrecipes.com/bacon-cheeseburger-recipe-5189497"
    },
    {
        id: "1006",
        name: "Portobello Mushroom Burger",
        category: "Dinner",
        servings: 4,
        mainIngredients: [
            {name: "spinach", qty: 4, unit: "ounce"}, 
            {name: "mushroom", qty: 4, unit: ""}, 
            {name: "onion", qty: 1, unit: ""},
            {name: "bread", qty: 4, unit: "buns"}, 
            {name: "tomato", qty: 8, unit: "ounce"}
        ],
        steps: ["Prepare the grill", "Wilt the spinach",
        "Clean the mushrooms and brush with oil", "Grill the onion rounds, mushroom caps, and buns",
        "Assemble"],
        url: "https://www.simplyrecipes.com/recipes/portobello_mushroom_burger/"
    },
    {
        id: "1007",
        name: "Lemon Chicken",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "chicken", qty: 4, unit: "lb"}, 
            {name: "lemons", qty: 2, unit: ""}, 
            {name: "garlics", qty: 2, unit: ""},
        ],
        steps: ["Marinate chicken", "Place chicken in baking dish, brush with butter",
        "Bake and baste with marinade", "Let the chicken rest", "Save meat juices to serve with chicken"],
        url: "https://www.simplyrecipes.com/recipes/lemon_chicken/"
    },
    {
        id: "1008",
        name: "Crispy Cheese and Mushroom Quesadillas",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "mushrooms", qty: 1, unit: "lb"}, 
            {name: "tortillas", qty: 10, unit: ""}, 
            {name: "garlics", qty: 1, unit: ""},
            {name: "cheese", qty: 1.5, unit: "cup"},
            {name: "salsa", qty: 0.5, unit: "cup"}
        ],
        steps: ["Cook the mushrooms", "Assemble and cook the quesadillas", "Serve"],
        url: "https://www.simplyrecipes.com/recipes/crispy_cheese_and_mushroom_quesadillas/"
    },
    {
        id: "1009",
        name: "Apple Chicken Quesadilla",
        category: "Dinner",
        servings: 2,
        mainIngredients: [
            {name: "chicken", qty: 1, unit: "cup"}, 
            {name: "tortillas", qty: 4, unit: ""}, 
            {name: "apple", qty: 1, unit: ""},
            {name: "cheese", qty: 0.25, unit: "lb"},
            {name: "salsa", qty: 0.25, unit: "cup"}
        ],
        steps: ["Heat the tortilla until puffy", "Add cheese and chicken, fold over",
        "Add apple slices and salsa, cut into triangles", "Repeat with the remaining tortillas"],
        url: "https://www.simplyrecipes.com/recipes/apple_chicken_quesadilla/"
    },
    {
        id: "1010",
        name: "Vegan Mushroom Stroganoff",
        category: "Dinner",
        servings: 6,
        mainIngredients: [
            {name: "onion", qty: 1, unit: ""},
            {name: "pasta", qty: 1, unit: "lb"}, 
            {name: "mushrooms", qty: 1, unit: "lb"}, 
            {name: "garlics", qty: 3, unit: ""},
        ],
        steps: ["Cook the pasta", "Cook the vegetables",
        "Add the flour, wine, broth, and Worcestershire sauce", "Stir in the coconut milk", "Serve"],
        url: "https://www.simplyrecipes.com/vegan-mushroom-stroganoff-recipe-5216638"
    }
]

const Meals = data.map( meal => {
    return new Meal(meal.id, meal.name, meal.category, meal.servings, meal.mainIngredients, meal.steps, meal.url)
})




// ## Functions //

// Picker Function
// Filtering is on mainIngredient & it is optional
const randomPicker = (lastMeal, ingredientFilter) => {
    const filteredMeals = getFilteredMeal(ingredientFilter)
    const length = filteredMeals.length; 
    if (length == 1 ) return filteredMeals[0]
    const randomNumber = Math.floor(Math.random() * length);
    let pickedMeal = filteredMeals[randomNumber];
    
    //avoid duplications
    if (lastMeal.id == pickedMeal.id) {
        pickedMeal = randomPicker(pickedMeal, ingredientFilter)
    }
    return pickedMeal;
};


const getAllIngredients = (meals) => {
    let ingredients = []
    if (!meals) meals = Meals;
    meals.map( meal => {
        meal.getAllIngredients().map(ingredient => {
            if (!ingredients.find(v => v == ingredient)) ingredients.push(ingredient)
        })
    })
    return ingredients;
}

const getFilteredMeal = (filters) => {
    if (!filters || filters.length == 0) return Meals;
    let filtered = Meals.filter( meal => {
        let haveIngredients = filters.map( filter => {
            //Check whether the requried ingredient is used in the meal
            return meal.mainIngredients.some(ingredient => ingredient.name == filter)
        })
        //return true if all required ingredients are found
        return haveIngredients.every(v => v == true)
    })
    return filtered
}


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
    Meals.push(new Meal(nextId, meal.name, meal.category, meal.servings, meal.mainIngredients, meal.steps, meal.url));
    return true
};


// load page

const loadPage = () => {

    let picked = false;
    let pickedMeal = Meals[0];
    let isFilterShown = false;
    let ingredientFilter = [];

    //render filter
    const ingredients = getAllIngredients()
    ingredients.map( ingredient => {
        let checkbox = `<div class="checkbox"><input type="checkbox" id="${ingredient}" name="${ingredient}" value="${ingredient}"><label for="${ingredient}"> ${ingredient}</label></div>`;
        $('#checkbox-container').append(checkbox);
        $(`#${ingredient}`).change(function() {
            if(this.checked) {
                ingredientFilter.push(ingredient)
            } else {
                ingredientFilter = ingredientFilter.filter( v => v!= ingredient)
            }

            let filteredMeals = getFilteredMeal(ingredientFilter)
            let availableIngredients = getAllIngredients(filteredMeals)

            //Disable checkbox with no options
            $(".checkbox").each( function() {
                if (availableIngredients.some(ingredient => $(this).find("input")[0].id == ingredient)) {
                    $(this).find("input").attr("disabled", false);
                } else{
                    $(this).find("input").attr("disabled", true);
                }
            })
            
            //Update text
            $("#filter-result").text(`There are ${filteredMeals.length} results.`)
        })
    })

    //add onclick to filter button
    $("#filter-button").on("click", function () {
        if (!isFilterShown) {
            $("#filter-container").css("display", "flex");
            isFilterShown = true;
        } else {
            $("#filter-container").hide();
            isFilterShown = false;
        }
    })

    //add onclick to pick button
    $("#pick-button").on("click", function () {
        pickedMeal = randomPicker(pickedMeal, ingredientFilter)
        $("#image-container").find("img").attr("src", pickedMeal.getImageSrc())
        $("#image-container").find("img").attr("alt", `An image of ${pickedMeal.name}.`)
        $("#image-container").find("p").text(pickedMeal.name)
        $("#image-container").attr("name", "picked-meal")
        $("#filter-container").hide();
        picked = true;
    })

    //add onclick to image
    $("#image-container").on("click", function () {
        window.open(pickedMeal.url)
    })

    //add timer to slideshow
    const updatePicker = () => {
        if (picked) return;
        let currentMealId = Number($("#image-container")[0].attributes.name.value)
        let nextMealId = currentMealId == Meals.length? 1 : currentMealId + 1
        const nextMeal = Meals[nextMealId-1]

        $("#image-container").find("img").attr("src", nextMeal.getImageSrc())
        $("#image-container").find("img").attr("alt", `An image of ${nextMeal.name}.`)
        $("#image-container").find("p").text(nextMeal.name)
        $("#image-container").attr("name", nextMealId)

    }
    setInterval(function() {
        updatePicker()
    }, 3000);
}

$(window).on("load", loadPage)