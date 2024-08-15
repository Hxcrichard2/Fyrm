let cart = [];

function addToCart(pizzaName) {
    const found = cart.find(pizza => pizza.name === pizzaName);
    if (found) {
        found.quantity += 1;
    } else {
        cart.push({ name: pizzaName, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(pizza => {
        const item = document.createElement('div');
        item.textContent = `${pizza.name} - Cantidad: ${pizza.quantity}`;
        cartItems.appendChild(item);
        total += pizza.quantity;
    });

    document.getElementById('total-amount').textContent = `Total: ${total} Pizzas`;
}

function checkout() {
    // Lógica para proceder al pago
    alert('Pago realizado!');
}

function showPromoInfo(promoId) {
    document.getElementById(`promo${promoId}`).style.display = 'block';
}

function hidePromoInfo(promoId) {
    document.getElementById(`promo${promoId}`).style.display = 'none';
}

function uploadProfilePicture() {
    // Lógica para subir la foto del perfil
    alert('Subir Foto');
}

//menu--------------------------------------------------------------------

const nav= document.querySelector("#nav");
const abrir= document.querySelector("#abrir");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//Modal-------------------------------------------------------------------

const btnAbrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal=
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})