const delivery = document.querySelector(".delivery");
const warranty = document.querySelector(".warranty");
const credit = document.querySelector(".credit");
let currentService = "delivery";

const btnServiceOpenDelivery = document.querySelector(".show-delivery");

btnServiceOpenDelivery.addEventListener("click", (evt) => {
  btnServiceOpenDelivery.classList.add("active-service");
  if (currentService === "warranty") {
    btnServiceOpenWarranty.classList.remove("active-service");
    warranty.classList.remove("service-open");
  };
  if (currentService === "credit") {
    btnServiceOpenCredit.classList.remove("active-service");
    credit.classList.remove("service-open");
  };
  delivery.classList.add("service-open");
  currentService = "delivery";
  console.log(currentService);
})

const btnServiceOpenWarranty = document.querySelector(".show-warranty");

btnServiceOpenWarranty.addEventListener("click", (evt) => {
  btnServiceOpenWarranty.classList.add("active-service");
  if (currentService === "delivery") {
    btnServiceOpenDelivery.classList.remove("active-service");
    delivery.classList.remove("service-open");
  };
  if (currentService === "credit") {
    btnServiceOpenCredit.classList.remove("active-service");
    credit.classList.remove("service-open");
  };
  warranty.classList.add("service-open");
  currentService = "warranty";
  console.log(currentService);
})

const btnServiceOpenCredit = document.querySelector(".show-credit");

btnServiceOpenCredit.addEventListener("click", (evt) => {
  btnServiceOpenCredit.classList.add("active-service");
  if (currentService === "warranty") {
    btnServiceOpenWarranty.classList.remove("active-service");
    warranty.classList.remove("service-open");
  };
  if (currentService === "delivery") {
    btnServiceOpenDelivery.classList.remove("active-service");
    delivery.classList.remove("service-open");
  };
  credit.classList.add("service-open");
  currentService = "credit";
  console.log(currentService);
})
