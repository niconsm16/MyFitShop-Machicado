function addProduct() {

    // Mostrar Título

    currentTitle = 'option2'
    title(currentTitle)

    // Mostrar Formulario

    showAddProduct(noshow, show)

    // Obtengo datos del formulario

    let form = document.getElementById('createProduct')
    // Agregar Producto
    form.onsubmit = receiveProduct.bind(form)

    function receiveProduct(e) {

        e.preventDefault()

        let x = document.getElementById('nameProduct')
        x.value = x.value.toUpperCase()
        let y = document.getElementById('priceProduct')
        let z = document.getElementById('stockProduct')

        // Comprobar existencia

        existProduct = (productsList.find(object => cleanVar(object.name) === cleanVar(x.value)))

        if (existProduct != undefined) {

            // Cuadro de Alerta: Producto existente

            showAlert(noshow, show)

            const updateYes = document.getElementById('updateYes')
            const updateNo = document.getElementById('updateNo')

            updateYes.onclick = () => {

                // Sí: Update / Ocultar Alert / Resetear Celdas

                existProduct.name = x.value
                existProduct.price = y.value
                existProduct.stock = z.value

                showAlert(show, noshow)
                resetFields()
                listProducts()
            }

            updateNo.onclick = () => {

                showAlert(show, noshow)
                resetFields()

            }
        }

        else {

            // Si no existe

            let newProduct = new Product(x.value, y.value, z.value)
            productsList.push(newProduct)

            resetFields()
            listProducts()

        }

        //Limpiar inputs


    }
}

function resetFields() {

    document.getElementById('nameProduct').value = ''
    document.getElementById('priceProduct').value = ''
    document.getElementById('stockProduct').value = ''

}