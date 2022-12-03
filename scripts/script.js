// ## Functions //

// Picker Function
// Filtering is on mainIngredient & it is optional
const randomPicker = (lastMeal, ingredientFilter) => {
    const filteredmealsData = getFilteredMeal(ingredientFilter)
    const length = filteredmealsData.length; 
    if (length == 1 ) return filteredmealsData[0]
    const randomNumber = Math.floor(Math.random() * length);
    let pickedMeal = filteredmealsData[randomNumber];
    
    //avoid duplications
    if (lastMeal.id == pickedMeal.id) {
        pickedMeal = randomPicker(pickedMeal, ingredientFilter)
    }
    return pickedMeal;
};

const getFilteredMeal = (filters) => {
    if (!filters || filters.length == 0) return mealsData;
    let filtered = mealsData.filter( meal => {
        let haveIngredients = filters.map( filter => {
            //Check whether the requried ingredient is used in the meal
            return meal.mainIngredients.some(ingredient => ingredient == filter)
        })
        //return true if all required ingredients are found
        return haveIngredients.every(v => v == true)
    })
    return filtered
}

// load page

const loadPage = () => {

    let picked = false;
    let pickedMeal = mealsData[0];
    let isFilterShown = false;
    let ingredientFilter = [];

    //render filter
    const ingredients = getAllIngredients()
    ingredients.map( ingredient => {
        let ingredientId = ingredient.replace(" ", "-")
        let checkbox = `<div class="checkbox"><input type="checkbox" id="${ingredientId}" name="${ingredient}" value="${ingredient}"><label for="${ingredient}"> ${ingredient}</label></div>`;
        $('#checkbox-container').append(checkbox);
        $(`#${ingredientId}`).change(function() {
            if(this.checked) {
                ingredientFilter.push(ingredient)
            } else {
                ingredientFilter = ingredientFilter.filter( v => v!= ingredient)
            }

            let filteredmealsData = getFilteredMeal(ingredientFilter)
            let availableIngredients = getAllIngredients(filteredmealsData)

            //Disable checkbox with no options
            $(".checkbox").each( function() {
                if (availableIngredients.some(ingredient => $(this).find("input")[0].id == ingredient.replace(" ", "-"))) {
                    $(this).find("input").attr("disabled", false);
                } else{
                    $(this).find("input").attr("disabled", true);
                }
            })
            
            //Update text
            $("#filter-result").text(`There are ${filteredmealsData.length} results.`)
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
        let nextMealId = currentMealId == mealsData.length? 1 : currentMealId + 1
        const nextMeal = mealsData[nextMealId-1]

        $("#image-container").find("img").attr("src", nextMeal.getImageSrc())
        $("#image-container").find("img").attr("alt", `An image of ${nextMeal.name}.`)
        $("#image-container").find("p").text(nextMeal.name)
        $("#image-container").attr("name", nextMealId)

    }

    setInterval(function() {
        updatePicker()
    }, 3000);
}

$(window).on("load", function (){
    loadData()
    loadPage()
 })