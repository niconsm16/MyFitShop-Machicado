function cartStructure() {
    // Busco el div creado en el SwA modal
    let firstDivCart = document.getElementById('swACart')
    // Si no tiene elementos muestra el mensaje de carrito vacío
    if (cart.length === 0) {
        // Si existe la fila CARRITO VACIO la borro para no encimar otra
        document.getElementById('emptyCart') && document.getElementById('emptyCart').remove()
        // Creo la celda
        let childCart = document.createElement('div')
        childCart.id = 'emptyCart'
        childCart.className = 'row align-items-center cart-letters'
        childCart.innerHTML = '<div class="col-12"><i>El carrito está vacío.</i></div>'
        firstDivCart.append(childCart)
        // Borro posible existencia de fila TOTAL
        document.getElementById('totalCart') && document.getElementById('totalCart').remove()

        // Sino empiezo a crear la estructura de cada fila
    } else {
        // Creo variables para fila TOTAL
        let totalPriceCart = 0
        let totalProdCart = 0

        // Si existe fila DESCRIPCION la borro para crearla sin que se encimen mas de una
        document.getElementById('cartDescription') && document.getElementById('cartDescription').remove()
        // Creo fila DESCRIPCION
        let cartDescription = document.createElement('div')
        cartDescription.className = 'row align-items-center cart-letters'
        cartDescription.id = 'cartDescription'
        cartDescription.innerHTML = `<div class="col"> Producto</div>
                <div class="col-3">Precio</div>
                <div class="col-3 text-start">Cant</div>
                <div class="col-1"></div>
            </div >`
        firstDivCart && firstDivCart.append(cartDescription)

        // Agrega cada item de su bd
        cart.forEach(n => {

            let tempVar = document.getElementById(`cart-${cleanVar(n.product)}`)
            tempVar !== null && tempVar.remove()

            let childCart = document.createElement('div')
            childCart.className = 'row align-items-center cart-letters'
            childCart.id = `cart-${cleanVar(n.product)}`
            childCart.innerHTML = `<div class="col">${n.product}</div>
                                <div class="col-3">$${n.price}</div>
                                <div class="col-1">${n.amount}</div>
                                <div class="col-1"> 
                                    <button class="buttonCart button-verde" title="Agregar un item" onclick='cart[${cart.indexOf(n)}].addToCart()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                    </svg></button>
                                </div>
                                <div class="col-1">
                                    <button class="buttonCart button-naranja" title="Quitar un item" onclick='cart[${cart.indexOf(n)}].removeToCart(${cart.indexOf(n)})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
                                    </svg></button>
                                </div>
                                <div class="col-1">
                                    <button class="buttonCart button-rojo" title="Remover Producto" onclick='cart[${cart.indexOf(n)}].delToCart(${cart.indexOf(n)})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg></button>
                                </div>`
            //Sumo cantidades totales de precios y productos para mostrar (en cada bucle se genera todo desde cero, no vale la pena mantener valores anteriores)
            totalPriceCart += (n.price * n.amount)
            totalProdCart += n.amount
            // Agrego la celda
            firstDivCart && firstDivCart.append(childCart)
        });

        // Ubico la celda Carrito Vacío  para borrarla y mostrar los valores de manera prolija
        let tempVar2 = document.getElementById('emptyCart')
        if (cart.length && tempVar2) {
            tempVar2.remove()
        }

        document.getElementById('totalCart') && document.getElementById('totalCart').remove()

        // Creo la fila del TOTAL
        let totalRow = document.createElement('div')
        totalRow.className = 'row align-items-center cart-letters button-verde'
        totalRow.id = 'totalCart'
        totalRow.innerHTML = `<div class="col">Total</div>
                <div class="col-3">${totalPriceCart.toFixed(2)}</div>
                <div class="col-3 text-start">${totalProdCart}</div>
                <div class="col-1"></div>`
        firstDivCart && firstDivCart.append(totalRow)
    }
}

// MODAL Sweet Alert

const modal = document.getElementById('cartItemsCount')
modal.onclick = () => {
    Swal.fire({
        title: 'Tu Carrito <img src="https://raw.githubusercontent.com/niconsm16/Myfit-Machicado/master/src/images/myfitlogo3.webp" width="15%">',
        html: `<div id="swACart" class="container overflow-hidden"></div>`,
        confirmButtonText: '<div title="No disponible (próximamente)">PAGAR</div>',
        confirmButtonColor: '#70D70C',
        showCancelButton: true,
        cancelButtonText: '<div title="Cerrar este cuadro" class="asap">Volver</div>',
        cancelButtonColor: '#424242',
        showDenyButton: true,
        denyButtonText: `<a title="Vaciar el carrito"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg></a>`,
        denyButtonColor: '#FF8000',
        backdrop: false,
        toast: false,
        color: 'white',
        background: 'black',
        position: 'center-end',
        grow: 'column',
    })
    // Listo los objetos dentro del div swACart creado en el modal SAlert
    cartStructure()

    // Creo la función para vaciar el carrito completo
    let abc = Swal.getDenyButton()
    abc.onclick = () => {
        cart = []
        document.getElementById('swACart').innerHTML = ''
        cartStructure()
        cartIconShow()
        localStorage.setItem('localCart', [])
    }
}








/*

// Creo las celdas de totales
let totalRow = document.createElement('div')
totalRow.className = 'row align-items-center cart-letters'
totalRow.innerHTML = `<div class="col">Total</div>
                <div class="col-3">${totalPriceCart}</div>
                <div class="col-3 text-start">${totalProdCart}</div>
                <div class="col-1"></div>`
firstDivCart.append(totalRow)   */