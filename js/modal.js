function cartStructure() {
    let firstDivCart = document.getElementById('swACart')

    cart.forEach(n => {

        let childCart = document.createElement('div')
        childCart.className = 'd-flex flex-row'


        childCart.innerHTML = `<div>${n.product}</div><div>${n.price}</div><div>${n.amount}</div><button onclick='cart[${cart.indexOf(n)}].addToCart()'>+</button><button onclick='cart[${cart.indexOf(n)}].removeToCart()'>-</button><button onclick='cart[${cart.indexOf(n)}].delToCart()'>Borrar</button>`
        firstDivCart.append(childCart)
    });
}

const modal = document.getElementById('cartItemsCount')
modal.onclick = () => {
    Swal.fire({
        title: 'TuCarrito <img src="https://raw.githubusercontent.com/niconsm16/Myfit-Machicado/master/src/images/myfitlogo3.webp" width="15%">',
        html: '<div id="swACart"></div>',
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