import Card from "./Card";
import PopupWithImage from "./PopupWithImage";
const cardSelector = '.card-template';

function handleCardClick(cardSelector) {
  const popupWithImage = new PopupWithImage(cardSelector);
  popupWithImage.open();
}

export function renderer(name, link) {
  const cardElement = document
    .querySelector(cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').style.backgroundImage = `url(${link})`;

  return cardElement;
}

class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }

  renderList () {
    this._items.forEach(item => {
      const { name, link } = item;
      const cardElement = this._renderer(name, link);
      this.addItem(cardElement);
      const card = new Card(cardElement, handleCardClick);
      card._setEventListeners();
    })
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}

export default Section;
