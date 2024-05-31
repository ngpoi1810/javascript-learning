import * as model from './model.js';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // Chỗ này là cắt chuỗi sau dấu # để lấy id

    if (!id) return;
    //1 loading recipe
    recipeView.renderSpinner();
    //
    resultView.update(model.getSearchResultsPage());
    // Vì bên model là một Promise nên khi gọi model bên này thêm "await" vào
    await model.loadRecipe(id);
    console.log(model.state.recipe);
    //2 rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);

    resultView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};
const controlPagination = function (goToPage) {
  // 1. Render new results
  resultView.render(model.getSearchResultsPage(goToPage));
  // 2. Render new pagination button
  paginationView.render(model.state.search);
};
const controlServings = function (newServings) {
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
function init() {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandleClick(controlPagination);
}
init();
