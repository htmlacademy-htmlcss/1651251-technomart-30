const modalmap = document.querySelector(".modal-map");
const modalcontact = document.querySelector(".modal-contact");
const modalbasket = document.querySelector(".modal-basket");

const openMap = () => {
    modalmap.style.display = "block";
};

const openContact = () => {
    modalcontact.style.display = "block";
};

const openBasket = () => {
    modalbasket.style.display = "block";
}

const closeModalindex = () => {
    modalmap.style.display = "none";
    modalcontact.style.display = "none";
};

const closeModalcatalog = () => {
    modalbasket.style.display = "none";
};