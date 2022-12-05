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



const addPagination = (totalItems, itemPerPage, currentPage) => {
    const numberOfPage = Math.ceil(totalItems.length / itemPerPage)
    if (numberOfPage == 1) return
    const pagination = `<div id="pagination"></div>`
    $('#all-meals').append(pagination);

    for (let i=0; i<numberOfPage; i++) {
        if ( currentPage == i+1) {
            $('#pagination').append(`<div class="page page--active" id="page-${i+1}"><p>${i+1}</p></div>`);
        } else {
            $('#pagination').append(`<div class="page" id="page-${i+1}"><p>${i+1}</p></div>`);
            $(`#page-${i+1}`).on("click", function(){
                $('#all-meals').empty();
                addPagination(totalItems, itemPerPage, i+1)
                totalItems.slice(i*5, (i+1)*5).map(meal => addMealSummary('#all-meals', meal))
            })
        }
    }
}

const addSearchBarEvent = () => {
    $("#search-bar").on("submit", function(event){
        const filteredMeal = getSearchedMeal($(this).find("#search-input").val())
        $('#all-meals').empty();
        addPagination(filteredMeal, itemPerPage, 1)
        filteredMeal.slice(0,5).map(meal => addMealSummary('#all-meals', meal))
        event.preventDefault();
        return false;
    })
}

// load page
const loadPage = () => {
    const searchKey = "";
    const filteredMeal = getSearchedMeal(searchKey)
    addPagination(filteredMeal, itemPerPage, 1)
    filteredMeal.slice(0,5).map(meal => addMealSummary('#all-meals', meal))
    addSearchBarEvent()
}

$(window).on("load", function (){
    loadData()
    loadPage()
 })