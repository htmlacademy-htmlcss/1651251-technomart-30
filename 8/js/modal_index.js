const modalmap = document.querySelector(".modal-map");
const modalcontact = document.querySelector(".modal-contact");
const modalbasket = document.querySelector(".modal-basket");

function toggleClassModal(modal) {
  modal.classList.toggle("modal-opened");
}

function openCloseModal(evt) {
  if (evt.target.classList.contains("modal-close") || evt.target.classList.contains("modal")) {
    toggleClassModal(evt.currentTarget);
  }
}

const btnModalOpenContact = document.querySelector(".contact-modal-btn");

btnModalOpenContact.addEventListener("click", (evt) => {
  evt.preventDefault();
  toggleClassModal(modalcontact);
})

const btnModalOpenMap = document.querySelector(".map-modal-btn");

btnModalOpenMap.addEventListener("click", (evt) => {
  evt.preventDefault();
  toggleClassModal(modalmap);
})

modalcontact.addEventListener("click", (evt) => {
  openCloseModal(evt);
})

modalmap.addEventListener("click", (evt) => {
  openCloseModal(evt);
})

const openBasket = () => {
  modalbasket.style.display = "flex";
}

const closeBasket = () => {
  modalbasket.style.display = "none";
}
