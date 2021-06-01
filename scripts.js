const modalBtn = document.querySelector('.button');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.classList.add('active');
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove('active');
})
