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
  cartMenu.style.display = "none";

  cartMenu.classList.remove("open-cart");
  backBlur.classList.remove("see-blur");
};

//Falta logica de carrito//

//Renderizar Productos--

const renderPizza = () => {
  whoActive()

  pizzasBtn.classList.toggle("active")

  renderProductos(productos, 0)
}
const renderBurger = () => {
  whoActive()

  burgerBtn.classList.toggle("active")
  renderProductos(productos, 1)
}
const renderPapas = () => {
  whoActive()

  papasBtn.classList.toggle("active")
  renderProductos(productos, 2)
}
const renderWraps = () => {
  whoActive()

  wrapsBtn.classList.toggle("active")
  renderProductos(productos, 3)
}
const renderMxFood = () => {
  whoActive()

  MxFoodBtn.classList.toggle("active")
  renderProductos(productos, 4)
}
const renderMilkShakes = () => {
  whoActive()

  batidosBtn.classList.toggle("active")
  renderProductos(productos, 5)
}

const renderPopulares = () => {
  whoActive()
  const productosPopulares = [];
  const todo = []
  productos.map(iterador => {
    iterador.map(esPopular => {
      if (esPopular.popularidad === true) { todo.push(esPopular) }
    })
  })

  productosPopulares.push(todo);

  popularesBtn.classList.toggle("active")
  renderProductos(productosPopulares, 0)
}



const renderProductos = (array, numero) => {
  productoContainer.innerHTML = ``;
  array[numero].map(iterador => {

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



}

const whoActive = () => {
  if (popularesBtn.classList.contains("active")) {
    popularesBtn.classList.toggle("active")
    return
  }
  if (pizzasBtn.classList.contains("active")) {
    pizzasBtn.classList.toggle("active")

    return
  }
  if (burgerBtn.classList.contains("active")) {
    burgerBtn.classList.toggle("active")

    return
  }
  if (papasBtn.classList.contains("active")) {
    papasBtn.classList.toggle("active")

    return
  }
  if (wrapsBtn.classList.contains("active")) {
    wrapsBtn.classList.toggle("active")

    return
  }
  if (MxFoodBtn.classList.contains("active")) {
    MxFoodBtn.classList.toggle("active")

    return
  }
  if (batidosBtn.classList.contains("active")) {
    batidosBtn.classList.toggle("active")

    return
  }

  else {
    return (console.log("ERROR"))
  }
}




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
  renderPopulares()
};

init();
