const modalBtn = document.querySelector('.button');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalWrap = document.querySelector('.modal-wrap');

modalBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrap.classList.add('active');
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrap.classList.remove('active');
})

document.addEventListener('click' , function(evt){
  if (!$(evt.target).closest(modalWindow, modalBtn).length) {
    document.querySelector('body').find(modalWindow).removeClass("active");
  }
})

modalWrap.addEventListener("click", function (event) {
const isOutside = !event.target.closest(".modal");
if (isOutside) {
  modalWrap.classList.remove('active');

}
});

window.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
  modalWrap.classList.remove('active');

}
});
