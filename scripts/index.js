let modalWindow = document.querySelector('.popup');
let modalWindowCloseBtn = document.querySelector('.popup__close-button');
let editForm = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name');
let userStatus = document.querySelector('.profile__status');
let inputName = document.querySelector('#name');
let inputStatus = document.querySelector('#status');
let form = document.querySelector('.popup__form')

function popupOpened() {
  modalWindow.classList.add('popup_opened');
  inputName.value = userName.textContent;
  inputStatus.value = userStatus.textContent;
}

function popupClosed() {
  modalWindow.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userStatus.textContent = inputStatus.value;
  modalWindow.classList.remove('popup_opened');
}

editForm.addEventListener('click', popupOpened);
modalWindowCloseBtn.addEventListener('click', popupClosed);
form.addEventListener('submit', formSubmitHandler);

