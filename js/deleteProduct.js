function deleteProduct() {

    // Titulo
    currentTitle = 'option4'
    title(currentTitle)

    // Cambio de color de fondo de título
    changeCTitle('bg-red-600', 'bg-verde', 'bg-yellow-400')

    // Ocultar Formulario
    showAddProduct(show, noshow)

    // Mostrar leyenda de Selección
    LegendSelect()

    // Vaciamos tabla existente salvo tr descriptivo

    let table = document.getElementById('dataList')

    for (let i = 0; i < productsList.length; i++) {

        let cleanName = cleanVar(productsList[i].name)

        let delRow = document.getElementById(cleanName)
        delRow.remove()


        // Creamos el Boton para cada celda y borrado

        let delButton = document.createElement('button')
        delButton.id = cleanName
        delButton.className = 'contents'

        // Creamos la celda con su color y hover
        if (i % 2 == 0) {

            delButton.innerHTML = `<div class="bg-zinc-200 hover:bg-red-600 transition duration-200"><span class="w-3/5 inline-block">${productsList[i].name}</span><span class="w-1/5 inline-block">${productsList[i].price}</span><span class="w-1/5 inline-block">${productsList[i].stock}</span></div>`

            table.append(delButton)

        } else {

            delButton.innerHTML = `<div class="bg-zinc-300 hover:bg-red-600 transition duration-200"><span class="w-3/5 inline-block">${productsList[i].name}</span><span class="w-1/5 inline-block">${productsList[i].price}</span><span class="w-1/5  inline-block">${productsList[i].stock}</span></div>`

            table.append(delButton)
        }


        // CREAMOS OPCION DE BORRADO

        // Creamos Array de Variables de botones para la actualización
        let tempUpdBtns = []
        // Guardamos función en variable para cada boton
        tempUpdBtns[i] = document.getElementById(cleanName).onclick = () => {

            let a = productsList[i].name
            let b = productsList[i].price
            let c = productsList[i].stock
            // Pregunta de borrado
            document.querySelector('#alert div p').innerHTML = 'Desea borrar el artículo:<br>' + a + '<br>(Precio: ' + b + ' - Stock: ' + c + ')'
            showAlert(noshow, show)

            const updateYes = document.getElementById('updateYes')
            const updateNo = document.getElementById('updateNo')

            // Sí: Borra / Ocultar Alert / Resetear Celdas
            updateYes.onclick = () => {
                // Utilizo Splice para borrar del Array
                delRow = document.getElementById(cleanName)
                delRow.remove()
                productsList.splice(i, 1)

                showAlert(show, noshow)
                listProducts()

            }

            // NO: Cierra cuadro y resetea valores de inputs
            updateNo.onclick = () => {
                showAlert(show, noshow)
            }
        }
    }
}
