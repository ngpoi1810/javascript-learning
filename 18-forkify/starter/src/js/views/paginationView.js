import View from './View';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    if (curPage === 1 && numPages > 1) {
      return `${this._generateMarkupButtonNext(curPage)}`;
    }
    if (curPage === numPages && numPages > 1) {
      return `${this._generateMarkupButtonPrev(curPage)}`;
    }
    if (curPage < numPages) {
      return `${this._generateMarkupButtonPrev(curPage)}
      ${this._generateMarkupButtonNext(curPage)} `;
    }
    return '';
  }
  _generateMarkupButtonPrev(curPage) {
    return `
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
  }
  _generateMarkupButtonNext(curPage) {
    return `<button class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
  }
}
export default new PaginationView();