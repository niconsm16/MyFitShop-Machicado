//# Carrito
function cartIconShow() {
    // Muestro la cantidad de productos que tiene la compra

    let cartItemsCount = document.getElementById('cartItemsCount')
    cartItemsCount.innerHTML = cart.length

    // Si no tiene contenido tiene color gris y negro, si se llena cambia a verde y blanco

    let cola = 'bg-verde'
    let colb = 'text-black'
    let colc = 'bg-black'
    let cold = 'text-white'

    cart.length === 0 ? cartCColor(cartItemsCount, cola, colb, colc, cold) : cartCColor(cartItemsCount, colc, cold, cola, colb)
} cartIconShow()


//# Funciones

// Cambiar clases de color
function cartCColor(item, a, b, c, d) {
    item.classList.remove(a, b)
    item.classList.add(c, d)
}