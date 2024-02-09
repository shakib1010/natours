// Popup functionality
const popup = document.getElementById('popup')
const popupButtons = document.querySelectorAll('.popup-button')
const popupCloseButton = document.getElementById('popup-close-btn')
popupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popup.classList.add('show')
  })
})

popupCloseButton.addEventListener('click', () => {
  popup.classList.remove('show')
})
