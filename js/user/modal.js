function cartStructure() {
    let firstDivCart = document.getElementById('swACart')

    cart.forEach(n => {

        let childCart = document.createElement('div')
        childCart.className = 'row align-items-center cart-letters'


        childCart.innerHTML = `<div class="col">${n.product}</div>
                                <div class="col-3">$${n.price}</div>
                                <div class="col-1">${n.amount}</div>
                                <div class="col-1">
                                    <button class="buttonCart button-verde" title="Agregar un item" onclick='cart[${cart.indexOf(n)}].addToCart()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                    </svg></button>
                                </div>
                                <div class="col-1">
                                    <button class="buttonCart button-naranja" title="Quitar un item" onclick='cart[${cart.indexOf(n)}].removeToCart()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
                                    </svg></button>
                                </div>
                                <div class="col-1">
                                    <button class="buttonCart button-rojo" title="Remover Producto" onclick='cart[${cart.indexOf(n)}].delToCart()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg></button>
                                </div>`
        firstDivCart.append(childCart)
    });
}

const modal = document.getElementById('cartItemsCount')
modal.onclick = () => {
    Swal.fire({
        title: 'TuCarrito <img src="https://raw.githubusercontent.com/niconsm16/Myfit-Machicado/master/src/images/myfitlogo3.webp" width="15%">',
        html: `<div id="swACart" class="container overflow-hidden">
            <div class="row align-items-center cart-letters">
                <div class="col">Producto</div>
                <div class="col-3">Precio</div>
                <div class="col-3 text-start">Cant</div>
                <div class="col-1"></div>
            </div>
        </div>`,
        confirmButtonText: 'PAGAR',
        confirmButtonColor: '#70D70C',
        showCancelButton: true,
        cancelButtonText: 'Vaciar',
        cancelButtonColor: '#FF8000',
        showDenyButton: true,
        denyButtonText: 'Volver',
        denyButtonColor: '#424242',
        backdrop: false,
        toast: false,
        color: 'white',
        background: 'black',
        position: 'center-end',
        grow: 'column',
    })
    cartStructure()
}