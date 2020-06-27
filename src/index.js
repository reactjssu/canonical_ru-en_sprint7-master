import FormValidator from './js/FormValidator.js';
import Section, { renderer } from "./js/Section";
import Popup from "./js/Popup";
import PopupWithForm from './js/PopupWithForm';
import { isEscEvent } from './helpers';
import UserInfo from "./js/UserInfo";

import "./css/pages/index.css";

// Константы

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Врапперы
const placesWrap = document.querySelector('.places__list');
const editFormModalWindow = document.querySelector('.popup_type_edit');
const cardFormModalWindow = document.querySelector('.popup_type_new-card');
const imageModalWindow = document.querySelector('.popup_type_image');
// С submit ребята еще плохо работают.

// Кнопки и прочие дом узлы
const openEditFormButton = document.querySelector('.profile__edit-button');
const openCardFormButton = document.querySelector('.profile__add-button');

// Данные форм и элементы форм
const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_name');
const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');
// решение на минималках. Конечно, студент может корректно обобрать велью инпутов в форме.

const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEscUp);
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalWindow);
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  const userInfo = new UserInfo({
    elementName: titleInputValue,
    elementDescription: descriptionInputValue
  });

  userInfo.setUserInfo();
};

const cardFormSubmitHandler = (evt) => {
  evt.preventDefault();
};

const popupEdit = new PopupWithForm(editFormModalWindow, formSubmitHandler);
openEditFormButton.addEventListener('click', () => {
  popupEdit.open();
});

const popupCard = new PopupWithForm(cardFormModalWindow, cardFormSubmitHandler);
openCardFormButton.addEventListener('click', () => {
  popupCard.open();
});

editFormModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    popupEdit.close();
  }
});
cardFormModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    popupCard.close();
  }
});
const popupImage = new Popup(imageModalWindow);

imageModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    popupImage.close();
  }
});

const section = new Section({ items: initialCards, renderer }, placesWrap);
section.renderList();

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
