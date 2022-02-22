const modal = document.getElementById('cartItemsCount')
modal.onclick = () => {

    Swal.fire({
        title: 'TuCarrito',
        text: 'Do you want to continue',
        confirmButtonText: 'Cool',
        backdrop: false,
    })

}