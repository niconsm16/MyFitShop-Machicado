function updateProduct() {

    // Titulo
    currentTitle = 'option3'
    title(currentTitle)

    // Cambio de color de fondo de título
    changeCTitle('bg-yellow-400', 'bg-verde', 'bg-red-600')

    // Ocultar Formulario
    showAddProduct(show, noshow)


    // Vaciamos tabla existente salvo tr descriptivo

    let table = document.getElementById('dataList')

    for (let i = 0; i < productsList.length; i++) {

        let cleanName = cleanVar(productsList[i].name)

        let delRow = document.getElementById(cleanName)
        delRow.remove()


        // Creamos el Boton para cada celda y borrado

        let delButton = document.createElement('button')
        delButton.id = cleanName
        delButton.className = 'contents '

        // Creamos la celda con su color y hover
        if (i % 2 == 0) {

            delButton.innerHTML = `<div class="bg-zinc-200 selUpdProduct"><span class="w-3/5 inline-block">${productsList[i].name}</span><span class="w-1/5 inline-block">${productsList[i].price}</span><span class="w-1/5 inline-block">${productsList[i].stock}</span></div>`

            table.append(delButton)

        } else {

            delButton.innerHTML = `<div class="bg-zinc-300 selUpdProduct"><span class="w-3/5 inline-block">${productsList[i].name}</span><span class="w-1/5 inline-block">${productsList[i].price}</span><span class="w-1/5  inline-block">${productsList[i].stock}</span></div>`

            table.append(delButton)
        }

        // ABRIMOS FORMULARIO PARA UPDATE DE PRODUCTOS

        // Creamos Array de Variables de botones para la actualización
        let tempUpdBtns = []
        // Guardamos función en variable para cada boton
        tempUpdBtns[i] = document.getElementById(cleanName).onclick = () => {
            // Cargamos Formulario

            addProduct()

            // Corregimos el cambio de color del titulo
            changeCTitle('bg-yellow-400', 'bg-verde', 'bg-red-600')
            currentTitle = 'option3'
            title(currentTitle)
            // Etiquetamos los nombres a modificar en los inputs
            document.getElementById('nameProduct').value = productsList[i].name
            document.getElementById('priceProduct').value = productsList[i].price
            document.getElementById('stockProduct').value = productsList[i].stock
            // Cambiamos el color del botón y nombre
            document.querySelector('#addButton').classList.remove('text-verde')
            document.querySelector('#addButton').classList.remove('hover:text-white')
            document.querySelector('#addButton').classList.add('text-yellow-400')
            document.querySelector('#addButton').classList.add('hover:text-yellow-200')
            document.getElementById('addButton').innerHTML = 'Modificar Producto'
        }
    }
}







