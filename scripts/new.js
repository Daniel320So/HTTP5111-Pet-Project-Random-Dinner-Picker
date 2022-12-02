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

const addIngredient = (event) => {
    const userInput = $("#input-ing").val().trim()
    event.preventDefault()
    if (!addedIngredients.find( v=> v == userInput) && userInput !== "") {
        const newIndex = addedIngredients.length;
        addedIngredients.push(userInput)
        const element = `<p class="ingredient" id="ing-${newIndex}">${userInput}</p>`
        $("#ingredients-container").append(element)
        // Add on hover to ingredient element
        $(`#ing-${newIndex}`).hover(function() {
            $(this).text("Remove")
        })

        // Add mouse out to ingredient element
        $(`#ing-${newIndex}`).on("mouseout", function() {
            $(this).text(addedIngredients[$(this)[0].id.split("-")[1]])
        })

        // Add on click to ingredient element
        $(`#ing-${newIndex}`).on("click", function() {
            const index = addedIngredients.indexOf(userInput);
            addedIngredients.splice(index, 1);
            $(this).remove()
        })

        // Remove user input
        $("#input-ing").val("");
    }
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
    $("#button-add").on("click",addIngredient)


}

$(window).on("load", function (){
    loadData()
    loadPage()
 })