// Vinculo Carrito con LocalStorage
cart = JSON.parse(localStorage.getItem('localCart'))

//# Carrito
// Contador para la cantidad de elementos que hay en el carrito
const cartCount = () => {
    let x = 0
    for (a in cart) { x += cart[a].amount }
    return x
}

function cartIconShow() {
    // Muestro la cantidad de productos que tiene la compra

    let cartItemsCount = document.getElementById('cartItemsCount')
    cartItemsCount.innerHTML = `${cartCount()}`

    // Si no tiene contenido tiene color gris y negro, si se llena cambia a verde y blanco

    let cola = 'bg-verde'
    let colb = 'text-black'
    let colc = 'bg-gris3'
    let cold = 'text-white'

    cart.length === 0 ? cartCColor(cartItemsCount, cola, colb, colc, cold) : cartCColor(cartItemsCount, colc, cold, cola, colb)
} cartIconShow()


//# Funciones

// Cambiar clases de color
function cartCColor(item, a, b, c, d) {
    item.classList.remove(a, b)
    item.classList.add(c, d)
}

//# Agregar productos desde pantalla
// Se agrega producto por primera vez
function prodAddToCart(array, indice, a = 1) {
    // Busco si el producto ingresado ya existe en el carrito (array cart)

    let found = cart.find(n => n.product === array[indice].name)
    // Si no existe y devuelve undefined entonces ingreso el producto, si existe aumento la cantidad de productos adquiridos
    found == undefined ? cart.push(new Carrito(array[indice].name, 1, array[indice].price)) : found.amount++
    // actualizo el número del icono Carrito
    cartIconShow()
    // Actualizar el código
    cartStructure()
}