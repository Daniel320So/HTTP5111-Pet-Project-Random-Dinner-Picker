// ## Declare Global Variables //
let difficulty = 0;
let addedIngredients = []
let newImage;

// ## Functions //
// Add Menu Function
const addMealObject = (name, servings, difficulty, mainIngredients, prepTime, url) => {
    const nextId = 1001 + mealsData.length;
    const newMeal = new Meal(nextId, name, servings, difficulty, mainIngredients, prepTime, url)
    mealsData.push(newMeal);
    return newMeal
};

//update stars 
const updateStarsClass = (rating) => {
    $("#star-container").find("span").each( function(i) {
        if ( i <= rating ) {
            $(this).addClass("checked")
        } else {
            $(this).removeClass("checked")
        }
    })
}

const addIngredient = (event, input) => {
    const userInput = input? input : $("#input-ing").val().trim().toLowerCase()
    const eleId = userInput.replace(" ", "-")
    event.preventDefault()
    if (!addedIngredients.find( v=> v.toLowerCase() == userInput) && userInput !== "") {
        addedIngredients.push(userInput);
        const element = `<p class="ingredient" id="ing-${eleId}">${userInput}</p>`;
        $("#ingredients-container").append(element);
        // Add on hover to ingredient element
        $(`#ing-${eleId}`).on("mouseenter", function() {
            const width = $(this).width();
            $(this).text("Remove");
            $(this).width(width);
        });

        // Add mouse out to ingredient element
        $(`#ing-${eleId}`).on("mouseout", function() {
            $(this).text($(this)[0].id.slice(4).replace("-", " "));
        });

        // Add on click to ingredient element
        $(`#ing-${eleId}`).on("click", function() {
            const index = addedIngredients.indexOf(userInput);
            addedIngredients.splice(index, 1);
            $(this).remove()
        });

        // Remove user input
        $("#input-ing").val("");
    }
};

// load page
const loadPage = () => {

    // Add on click to stars
    $("#star-container").find("span").each( function(i) {
        $(this).on("click", function() {
            updateStarsClass(i)
            difficulty = i + 1;
        })
    });

    // Add on load to image upload 
    $("#input-image").change(function(event){

        // Show uploaded Image
        newImage = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            newImage.imageSrc = event.target.result;
            $("#display-image").attr("src", newImage.imageSrc)
            $("#display-image").attr("alt", newImage.name)
            $("#display-image").addClass("image-show")
            $("#display-image").show();
            $("#select-text").hide();
        });
        reader.readAsDataURL(newImage);
    })

    // Add Ingredients to datalist
    const ingredients = getAllIngredients()
    ingredients.map( ingredient => {
        const element = `<option>${ingredient}</option>`
        $("#input-container").find("datalist").append(element)
    })

    // Add on click to Add Ingredient button
    $("#button-add").on("click", addIngredient)

    // Submit Form
    const submitForm = (event) => {
        event.preventDefault();

        // Load data from Form
        const name = $("#input-name").val();
        const prepTime = $("#input-prep").val();
        const servings = $("#input-serve").val();
        const url = $("#input-url").val();

        // add Meal
        let newMeal = addMealObject(name, servings, difficulty, addedIngredients, prepTime, url);

        // Store img in local storage
        localStorage.setItem(`meal_${newMeal.id}`, newImage.imageSrc);
        setMealsInLocalStorage();
    }
    $("#submit-button").on("click", submitForm)
}

$(window).on("load", function (){
    loadData()
    loadPage()
 })