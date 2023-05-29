function checkout() {
  let checkoutButton = document.querySelector(".checkout-button");

  checkoutButton.innerHTML = `<img class="loading" src="./assets/icons/Spinner.svg" alt="loading" />`;

  setTimeout(() => {
    checkoutButton.innerHTML = "Finalizar compra";
  }, 2500);
}

function addCupom(e) {
  e.classList.toggle("hidden");
  document.querySelector(".cart-add-cupom form").classList.toggle("hidden");
}
