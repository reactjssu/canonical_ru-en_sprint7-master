const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

class UserInfo {
  constructor({ elementName, elementDescription }) {
    this._elementName = elementName;
    this._elementDescription = elementDescription;
  }

  getUserInfo() {
    return {
      name: this._elementName.value,
      description: this._elementDescription.value
    }
  }

  setUserInfo() {
    const { name, description } = this.getUserInfo();
    profileTitle.textContent = name;
    profileDescription.textContent = description
  }
}

export default UserInfo;
