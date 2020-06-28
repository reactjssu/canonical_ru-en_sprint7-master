import {isEscEvent} from '../utils';

class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_is-opened');
    this.setEventListeners(this._popupElement);
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_is-opened');
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    isEscEvent(evt, elem => {
      elem.classList.remove('popup_is-opened');
      document.removeEventListener('keyup', this._handleEscClose);
    });
  }

  setEventListeners() {
    const popupCloseIcon = this._popupElement.querySelector('button.popup__close');
    popupCloseIcon.addEventListener('click', () => {
      this.close();
      document.removeEventListener('keyup', this._handleEscClose);
    })
  }
}

export default Popup;
