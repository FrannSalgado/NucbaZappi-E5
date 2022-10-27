import { productos } from "./productos.js";
const cartMenu = document.querySelector(".cart");
const cartBtn = document.querySelector(".cart-div");
const backBlur = document.querySelector(".blur");

//categorias --
const popularesBtn = document.getElementById("populares");
const pizzasBtn = document.getElementById("pizzas");
const burgerBtn = document.getElementById("burgers");
const papasBtn = document.getElementById("papas");
const wrapsBtn = document.getElementById("wraps");
const MxFoodBtn = document.getElementById("MxFood");
const batidosBtn = document.getElementById("batidos");
//categorias fin

const productoContainer = document.querySelector(".popular-products-container");

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

//Falta logica de carrito//

//Renderizar Productos--
const renderProductos = () => {

  whoActive()


}

// const whoActive = () => {
//   if (popularesBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }
//   if (pizzasBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }
//   if (burgerBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }
//   if (papasBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }
//   if (wrapsBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }
//   if (MxFoodBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }
//   if (batidosBtn.classList.contains("active")) {
//     return (console.log("sisi"))
//   }

//   else {
//     return (console.log("ERROR"))
//   }
// }




const init = () => {
  cartBtn.addEventListener("click", toggleCart);
  cartMenu.addEventListener("click", closeCart);
  window.addEventListener("scroll", closeOnScroll);
  pizzasBtn.addEventListener("click", renderProductos);
  popularesBtn.addEventListener("click", renderProductos);
  burgerBtn.addEventListener("click", renderProductos);
  papasBtn.addEventListener("click", renderProductos);
  wrapsBtn.addEventListener("click", renderProductos);
  MxFoodBtn.addEventListener("click", renderProductos);
  batidosBtn.addEventListener("click", renderProductos);

  console.log(productos)
};

init();
