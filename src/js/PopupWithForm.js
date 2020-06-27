import Popup from "./Popup";

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

class PopupWithForm extends Popup {
  constructor(popupElement, submitForm) {
    super(popupElement);
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const nameField = document.querySelector('input[name="name"]');
    const descriptionField = document.querySelector('input[name="description"]');

    if (nameField && descriptionField) {
      nameField.value = profileTitle.textContent;
      descriptionField.value = profileDescription.textContent;
    }
  }

  setEventListeners() {
    this._getInputValues();
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      this._submitForm(evt);
      this.close();
    });
  }

  close() {
    super.close();

    const placeNameField = document.querySelector('input[name="place-name"]');
    const linkField = document.querySelector('input[name="link"]');

    if(placeNameField || linkField) {
      placeNameField.value = "";
      linkField.value = "";
    }
  }
}

export default PopupWithForm;
