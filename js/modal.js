const modal = document.getElementById('cartItemsCount')
modal.onclick = () => {

    Swal.fire({
        title: 'TuCarrito <img src="https://raw.githubusercontent.com/niconsm16/Myfit-Machicado/master/src/images/myfitlogo3.webp" width="15%">',
        text: 'Do you want to continue',
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

}