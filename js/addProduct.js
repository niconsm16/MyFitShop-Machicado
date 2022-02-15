function addProduct() {

    // Titulo

    currentTitle = 'option2'
    title(currentTitle)

    showAddProduct(noshow, show)

    // nameProduct priceProduct stockProduct

    let form = document.getElementById('createProduct')

    form.onsubmit = receiveProduct.bind(form)

    function receiveProduct(e) {

        e.preventDefault()

        let x = document.getElementById('nameProduct')
        let y = document.getElementById('priceProduct')
        let z = document.getElementById('stockProduct')

        // Comprobar existencia
        existProduct = (productsList.find(object => cleanVar(object.name) === cleanVar(x.value)))

        if (existProduct != undefined) {
            // Si existe
            let s2 = true

            while (s2) {

                let answer = cleanOption(prompt('El producto ingresado ya existe, desea actualizar sus datos? (s/n)'))

                if (answer === 's') {

                    // updateProduct(productSelected)

                    break

                } else if (answer === 'n') {

                    s2 = false

                } else {

                    invalidInput()
                    continue

                }
            }

        } else {
            // Si no existe
            let newProduct = new Product(x.value, y.value, z.value)
            productsList.push(newProduct)
            cl(productsList)
            listProducts()
        }
    }
}

