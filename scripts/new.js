// ## Declare Global Variables //
let difficulty = 0;
let addedIngredients = []

// ## Functions //
// Add Menu Function
const addMealObject = (meal) => {
    const nextId = mealsData.length;
    mealsData.push(new Meal(nextId, meal.name, meal.category, meal.servings, meal.mainIngredients, meal.steps, meal.url));
    return true
};

//update stars 
const updateStarsClass = (rating) => {
    console.log("clicked", rating)
    $("#star-container").find("span").each( function(i) {
        if ( i <= rating ) {
            $(this).addClass("checked")
        } else {
            $(this).removeClass("checked")
        }
    })
}

// load page
const loadPage = () => {

    // Add on click to stars
    $("#star-container").find("span").each( function(i) {
        $(this).on("click", function() {
            updateStarsClass(i)
            difficulty = i + 1;
        })
    });

    // Add Ingredients to datalist
    const ingredients = getAllIngredients()
    ingredients.map( ingredient => {
        const element = `<option>${ingredient}</option>`
        $("#input-container").find("datalist").append(element)
    })

    // Add on click to Add Ingredient button
    $("#button-add").on("click", function(event){
        const userInput = $("#input-ing").val()
        event.preventDefault()
        if (!addedIngredients.find( v=> v == userInput)) {
            addedIngredients.push(userInput)
            const element = `<p class="ingredient">${userInput}</p>`
            $("#ingredients-container").append(element)
        }
    })


}

$(window).on("load", function (){
    loadData()
    loadPage()
 })