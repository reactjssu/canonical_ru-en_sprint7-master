import Popup from "./Popup";

const imageModalWindow = document.querySelector('.popup_type_image');
const imageElement = imageModalWindow.querySelector('.popup__image');
const imageCaption = imageModalWindow.querySelector('.popup__caption');
const imageClose = imageModalWindow.querySelector(".popup__close");

class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    const urlElem = this._popupElement.querySelector(".card__image");
    const url = urlElem.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    const titleElem = this._popupElement.querySelector(".card__title");
    const title = titleElem.textContent;

    imageElement.src = url;
    imageElement.alt = `Изображение ${url}`;
    imageCaption.textContent = title;

    imageModalWindow.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose);

    imageClose.addEventListener('click', () => {
      imageModalWindow.classList.remove('popup_is-opened');
      document.removeEventListener('keyup', this._handleEscClose);
    })
  }
}

export default PopupWithImage;
