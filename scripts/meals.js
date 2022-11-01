// This file store all the meals data

export class Meal {
    constructor(id, name, servings, mainIngredients, steps, url) {
        this.id = id; //string
        this.name = name; //string
        this.servings = servings; //number
        this.category = category; //string
        this.mainIngredients = mainIngredients; //string{name:string, qty:number, unit:string}
        this.steps = steps; //string[]
        this.url = url; //string
    }

    //Return path of the image 
    getImageSrc() {
        return `./images/${this.id}.jpg`;
    }

    //Return ingredients in different portion
    getQtyWithDifferentServings(_servings) {
        const ratio = _servings / this.servings;
        let ingredients = this.mainIngredients.map( ingredient => {
            ingredient.qty = parseFloat((ingredient.qty*ratio).toFixed(2));
        })
        return ingredients;
    }

    //Return HTML element for steps
    renderSteps() {
        
    }

    //Return HTML element for ingredients
    renderIngredients() {

    }

}

export const data = [
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1002",
        name: "Hamburger and Macaroni",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/hamburger_and_macaroni/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    },
    {
        id: "1001",
        name: "Pasta Carbonara",
        category: "Dinner",
        servings: 5,
        mainIngredients: [
            {name: "bacons", qty: 0.5, unit: "lb"}, 
            {name: "spaghetti", qty: 1, unit: "lb"}, 
            {name: "eggs", qty: 4, unit: ""},
            {name: "garlics", qty: 2, unit: ""},
            {name: "cheese", qty: 1, unit: "cup"}
        ],
        steps: ["Heat the pasta water", "Sauté the bacon and garlic",
         "Beat the eggs and the cheese", "Cook the pasta", "Toss the pasta with bacon",
        "Add the beaten egg mixture", ],
        url: "https://www.simplyrecipes.com/recipes/spaghetti_alla_carbonara/"
    }
]
