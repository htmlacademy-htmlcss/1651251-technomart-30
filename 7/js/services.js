const delivery = document.querySelector(".delivery");
const warranty = document.querySelector(".warranty");
const credit = document.querySelector(".credit");
const delivery_btn = document.querySelector(".show-delivery");
const warranty_btn = document.querySelector(".show-warranty");
const credit_btn = document.querySelector(".show-credit");

const deliveryShow = () => {
  warranty.style.display = "none";
  credit.style.display = "none";
  delivery.style.display = "flex";
  delivery_btn.style.backgroundColor = "var(--white)";
  delivery_btn.style.color = "#32425C";
  warranty_btn.style.backgroundColor = "#32425C";
  warranty_btn.style.color = "var(--white)";
  credit_btn.style.backgroundColor = "#32425C";
  credit_btn.style.color = "var(--white)";
};

const warrantyShow = () => {
  delivery.style.display = "none";
  credit.style.display = "none";
  warranty.style.display = "flex";
  warranty_btn.style.backgroundColor = "var(--white)";
  warranty_btn.style.color = "#32425C";
  delivery_btn.style.backgroundColor = "#32425C";
  delivery_btn.style.color = "var(--white)";
  credit_btn.style.backgroundColor = "#32425C";
  credit_btn.style.color = "var(--white)";
};

const creditShow = () => {
  warranty.style.display = "none";
  delivery.style.display = "none";
  credit.style.display = "flex";
  credit_btn.style.backgroundColor = "var(--white)";
  credit_btn.style.color = "#32425C";
  warranty_btn.style.backgroundColor = "#32425C";
  warranty_btn.style.color = "var(--white)";
  delivery_btn.style.backgroundColor = "#32425C";
  delivery_btn.style.color = "var(--white)";
};

deliveryShow();
