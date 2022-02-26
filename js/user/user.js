//# Obtengo precios del dolar blue y BTC
// Variables Divisas
let dolarblue
let btc

// Dolar Blue
fetch('https://api.bluelytics.com.ar/v2/latest')
    .then((response) => response.json())
    .then((a) => {
        dolarblue = parseFloat(a['blue'].value_sell)
    })

// BTC (Binance) - Ralenteo porque la api de Binance es mucho mas rápida que la del Dolar Blue
setInterval(() => {
    fetch('https://api.binance.com/api/v3/ticker/price')
        .then((response) => response.json())
        .then((a) => {
            btc = parseFloat(a[11].price).toFixed(8)
        })
}, 60000);

// Vinculo Carrito con LocalStorage
function updateCart() {
    // Si tengo productos en el carrito (por ende cart.length es mayor a 0) guardo los datos en el localstorage localCart
    cart.length > 0 && localStorage.setItem('localCart', JSON.stringify(cart))
    if (localStorage.getItem('localCart')) {
        let tempcart = JSON.parse(localStorage.getItem('localCart'))

        cart = []
        tempcart.forEach(n => {
            let p = new Carrito(n.product, n.amount, n.price)
            cart.push(p)
        })
    }

} updateCart()

//# Carrito
// Contador para la cantidad de elementos que hay en el carrito
const cartCount = () => {
    let x = 0
    if (cart.length > 0) {
        for (a in cart) { x += cart[a].amount }
        return x
    } else { return x }
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
    updateCart()
}