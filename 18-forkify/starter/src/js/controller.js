import * as model from './model.js';

import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    //1 loading recipe
    recipeView.renderSpinner();
    // Vì bên model là một Promise nên khi gọi model bên này thêm "await" vào
    await model.loadRecipe(id);

    //2 rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

function init() {
  recipeView.addHandlerRender(controlRecipe);
}
init();
