const cartMenu = document.querySelector(".cart");
const cartBtn = document.querySelector(".cart-div");
const backBlur = document.querySelector(".blur");

const toggleCart = () => {
  cartMenu.style.display = "flex";
  cartMenu.classList.toggle("open-cart");
  backBlur.classList.toggle("see-blur");
};

const closeCart = (e) => {
  if (!e.target.classList.contains("close-cart")) return;
  cartMenu.style.display = "none";

  cartMenu.classList.remove("open-cart");
  backBlur.classList.remove("see-blur");
};

const closeOnScroll = () => {
  if (!cartMenu.classList.contains("open-cart")) return;
  cartMenu.classList.remove("open-cart");
  backBlur.classList.remove("see-blur");
};

//Falta logica de carrito

const init = () => {
  cartBtn.addEventListener("click", toggleCart);
  cartMenu.addEventListener("click", closeCart);
  window.addEventListener("scroll", closeOnScroll);
};

init();
