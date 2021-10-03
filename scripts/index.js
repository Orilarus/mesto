let modalWindow = document.querySelector('.popup');
let modalWindowCloseBtn = document.querySelector('.popup__close-button');
let editForm = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name')
let userStatus = document.querySelector('.profile__status')
let inputName = document.querySelector('#name')
let inputStatus = document.querySelector('#status')

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_opened');
  inputName.value = userName.textContent;
  inputStatus.value = userStatus.textContent;
}

editForm.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);

function overlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    toggleModalWindow();
  }
}

modalWindow.addEventListener('click', overlayClick);

function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userStatus.textContent = inputStatus.value;
}

modalWindow.addEventListener('submit', formSubmitHandler);

