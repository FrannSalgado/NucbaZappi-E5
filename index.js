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

const renderPizza = () => {
  pizzasBtn.classList.toggle("active")
  renderProductos(0)
}
const renderBurger = () => {
  burgerBtn.classList.toggle("active")
  renderProductos(1)
}
const renderPapas = () => {
  papasBtn.classList.toggle("active")
  renderProductos(2)
}
const renderWraps = () => {
  wrapsBtn.classList.toggle("active")
  renderProductos(3)
}
const renderMxFood = () => {
  MxFoodBtn.classList.toggle("active")
  renderProductos(4)
}
const renderMilkShakes = () => {
  batidosBtn.classList.toggle("active")
  renderProductos(5)
}

const renderPopulares = () => {
  popularesBtn.classList.toggle("active")
  renderProductos(6)
}



const renderProductos = (numero) => {
  productoContainer.innerHTML = ``;
  productos[numero].map(iterador => {

    const producto = `<div class="popular-products-card">
   <div class="popular-products-img">
   <img src=${iterador.img} alt="" />
   </div>
  <div class="popular-products-data-container">
   <div class="popular-products-data">
     <p>${iterador.nombre}</p>
     <h6>${iterador.descripcion}</h6>
     <span> $${iterador.precio}</span>
   </div>
   <div class="popular-products-btn-container">
     <button class="btn-buy popular-products-btn">Agregar</button>
   </div>
 </div>
</div>`
    productoContainer.innerHTML += (producto);
  })



  // whoActive()


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
  pizzasBtn.addEventListener("click", renderPizza);
  popularesBtn.addEventListener("click", renderPopulares);
  burgerBtn.addEventListener("click", renderBurger);
  papasBtn.addEventListener("click", renderPapas);
  wrapsBtn.addEventListener("click", renderWraps);
  MxFoodBtn.addEventListener("click", renderMxFood);
  batidosBtn.addEventListener("click", renderMilkShakes);

  console.log(productos)
  renderProductos(2);
};

init();
