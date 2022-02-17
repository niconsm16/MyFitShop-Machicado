function addProduct() {

    // Mostrar Título

    currentTitle = 'option2'
    title(currentTitle)

    // Cambio de color de fondo de título
    changeCTitle('bg-verde', 'bg-yellow-400', 'bg-red-600')

    // Cambiamos el color del botón y nombre
    document.querySelector('#addButton').classList.remove('text-yellow-400')
    document.querySelector('#addButton').classList.remove('hover:text-yellow-200')
    document.querySelector('#addButton').classList.add('text-verde')
    document.querySelector('#addButton').classList.add('hover:text-white')
    document.getElementById('addButton').innerHTML = 'Agregar Producto'

    // Chequeamos color de hover de lista
    showAddProduct(noshow, show)
    for (n in productsList) {
        a = document.querySelector(`#${cleanVar(productsList[n].name)} div`)
        a.classList.replace('hover:bg-red-600', 'hover:bg-verde')
    }
    // Mostrar Formulario

    resetFields()


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

            // CUADRO DE ALERTA: Producto existente

            document.querySelector('#alert div p').innerHTML = 'El producto ya se encuentra en el sistema<br> ¿Desea actualizarlo?'
            showAlert(noshow, show)

            const updateYes = document.getElementById('updateYes')
            const updateNo = document.getElementById('updateNo')

            // Sí: Update / Ocultar Alert / Resetear Celdas
            updateYes.onclick = () => {

                existProduct.name = x.value
                existProduct.price = y.value
                existProduct.stock = z.value

                showAlert(show, noshow)
                resetFields()
                listProducts()
            }

            // NO: Cierra cuadro y resetea valores de inputs
            updateNo.onclick = () => {

                showAlert(show, noshow)
                resetFields()
            }
        }

        else {
            // Si no existe
            let newProduct = new Product(x.value, y.value, z.value)
            productsList.push(newProduct)

            //Limpiar inputs
            resetFields()
            listProducts()
        }
    }


    function resetFields() {
        document.getElementById('nameProduct').value = ''
        document.getElementById('priceProduct').value = ''
        document.getElementById('stockProduct').value = ''
    }
}