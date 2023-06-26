import * as model from './model.js'


import recipeView from "./views/recipeView.js";

const recipeContainer = document.querySelector('.recipe');



//

///////////////////////////////////////


const controlRecipe = async function () {
    try {
        const id = window.location.hash.slice(1)
        console.log(id)
        if (!id) return
        //1 loading recipe
        recipeView.renderSpinner();
        await model.loadRecipe(id);

        //2 rendering recipe
        recipeView.render(model.state.recipe);

    } catch (err) {
        alert(err)
    }
};

['hashchange','load'].forEach(ev => window.addEventListener(ev, controlRecipe));