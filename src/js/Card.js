// Эти функции и переменные -- дубли из index.js. Они нарушают DRY, но в следующем спринте студенты удалят этот код.
// Как "Можно лучше" посоветуйте вынести эти функции и переменные в модуль utils.js и импортировать их в класс Card.

class Card {
  constructor(cardSelector, handleCardClick) {
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardSelector.querySelector('.card__like-button')
      .addEventListener('click', () => this._handleLikeIcon());

    this._cardSelector.querySelector('.card__delete-button')
      .addEventListener('click', () => this._handleDeleteCard());

    this._cardSelector.querySelector('.card__image')
      .addEventListener('click', () => this._handleCardClick(this._cardSelector));
  }

  _handleLikeIcon() {
    this._cardSelector.querySelector('.card__like-button').
      classList.toggle('card__like-button_is-active');
  }

  _handleDeleteCard() {
    this._cardSelector.remove();
    this._cardSelector = null;
  }
}

export default Card;
