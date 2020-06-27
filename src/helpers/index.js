export const ESC_KEYCODE = 27;

export const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector('.popup_is-opened');
  if(!activePopup) return
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};
