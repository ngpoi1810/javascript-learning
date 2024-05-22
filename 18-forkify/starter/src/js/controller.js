import * as model from './model.js';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import recipeSearch from './views/searchView.js';



///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // Chỗ này là cắt chuỗi sau dấu # để lấy id
    
    if (!id) return;
    //1 loading recipe
    recipeView.renderSpinner();
    // Vì bên model là một Promise nên khi gọi model bên này thêm "await" vào
    await model.loadRecipe(id);

    //2 rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    
  } catch (err) {
    throw err;
  }
};
controlSearchResults();
function init() {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults)
}
init();
