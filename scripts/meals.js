//  ## Declare Global Variables //
const itemPerPage = 5

// ## Functions //
const getSearchedMeal = (searchKey) => {
    if (searchKey == "") return mealsData;
    let matched = mealsData.filter( meal => {
        // search searchKey on Name
        let regex = new RegExp(searchKey.toLowerCase())
        if (meal.name.toLowerCase().match(regex)) return true

        // search searchKey on mainIngredients
        return meal.mainIngredients.some( ingredient => {
            return ingredient.toLowerCase().match(regex)
        })
    })
    return matched
}

const addMealSummary = (meal) => {
    const mealSummary = `<div class="meal-summary" id="summary-${meal.id}"></div>`
    $('#all-meals').append(mealSummary);
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

const addPagination = (totalItems, itemPerPage, currentPage) => {
    const numberOfPage = Math.ceil(totalItems.length / itemPerPage)
    if (numberOfPage == 1) return
    const pagination = `<div id="pagination"></div>`
    $('#all-meals').append(pagination);

    for (let i=0; i<numberOfPage; i++) {
        if ( currentPage == i+1) {
            $('#pagination').append(`<div class="page page--active" id="page-${i+1}">${i+1}</div>`);
        } else {
            $('#pagination').append(`<div class="page" id="page-${i+1}">${i+1}</div>`);
            $(`#page-${i+1}`).on("click", function(){
                $('#all-meals').empty();
                addPagination(totalItems, itemPerPage, i+1)
                totalItems.slice(i*5, (i+1)*5).map(meal => addMealSummary(meal))
            })
        }
    }
}

const addSearchBarEvent = () => {
    $("#search-bar").on("submit", function(event){
        const filteredMeal = getSearchedMeal($(this).find("#search-input").val())
        $('#all-meals').empty();
        addPagination(filteredMeal, itemPerPage, 1)
        filteredMeal.slice(0,5).map(meal => addMealSummary(meal))
        event.preventDefault();
        return false;
    })
}

// load page
const loadPage = () => {
    const searchKey = "";
    const filteredMeal = getSearchedMeal(searchKey)
    addPagination(filteredMeal, itemPerPage, 1)
    filteredMeal.slice(0,5).map(meal => addMealSummary(meal))
    addSearchBarEvent()
}

$(window).on("load", function (){
    loadData()
    loadPage()
 })