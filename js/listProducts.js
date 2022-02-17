//Obtener nombre del producto y comprobar existencia del mismo

function listProducts() {

    // Titulo
    currentTitle = 'option1'
    title(currentTitle)

    // Cambio de color de fondo de título
    changeCTitle('bg-verde', 'bg-yellow-400', 'bg-red-600')

    // Ocultar Add Product
    showAddProduct(show, noshow)

    //Borrar Leyenda de Seleccion
    let legendSel = document.getElementById('legendSel')
    if (legendSel) { legendSel.remove() }

    // Creacion de tabla

    let table = document.getElementById('dataList')

    for (let i = 0; i < productsList.length; i++) {

        // Verificamos la existencia del producto en la tabla

        let idCompare = document.getElementById(cleanVar(productsList[i].name))

        if (idCompare) {

            // Si existe remover de la lista para actualizar
            idCompare.remove()
        }

        // Si no existe se crea su respectiva fila con sus datos
        let divtr = document.createElement('div')
        divtr.id = cleanVar(productsList[i].name)
        divtr.className = 'flex'

        if (i % 2 == 0) {

            divtr.innerHTML = `<span class="w-3/5 inline-block bg-zinc-200">${productsList[i].name}</span><span class="w-1/5 inline-block bg-zinc-200">${productsList[i].price}</span><span class="w-1/5 inline-block bg-zinc-200">${productsList[i].stock}</span>`

            table.appendChild(divtr)

        } else {

            divtr.innerHTML = `<span class="w-3/5 inline-block bg-zinc-300">${productsList[i].name}</span><span class="w-1/5 inline-block bg-zinc-300">${productsList[i].price}</span><span class="w-1/5 inline-block bg-zinc-300">${productsList[i].stock}</span>`

            table.appendChild(divtr)
        }

    }
}
