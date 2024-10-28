let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  soppingCart.classList.remove("active");
  userLogin.classList.remove("active");
  navbar.classList.remove("active");
};

let soppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  searchForm.classList.remove("active");
  soppingCart.classList.toggle("active");
  userLogin.classList.remove("active");
  navbar.classList.remove("active");
};

let userLogin = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  searchForm.classList.remove("active");
  soppingCart.classList.remove("active");
  userLogin.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  searchForm.classList.remove("active");
  soppingCart.classList.remove("active");
  userLogin.classList.remove("active");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  soppingCart.classList.remove("active");
  userLogin.classList.remove("active");
  navbar.classList.remove("active");
};
