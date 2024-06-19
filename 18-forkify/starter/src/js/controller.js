import * as model from './model.js';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

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
    bookmarksView.update(model.state.bookmarks);
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
    resultView.renderSpinner();
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
const controlAddBookmark = function () {
  // 1) Thêm/Xóa bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  // 2) Cập nhật Recipe view
  recipeView.update(model.state.recipe);
  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

// const controlBookmarks = function () {
//   bookmarksView.render(model.state.bookmarks);
// };

function init() {
  bookmarksView.addHandlerRender(controlAddBookmark);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandleClick(controlPagination);
}
init();
