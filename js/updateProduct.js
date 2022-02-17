function updateProduct() {

    // Titulo
    currentTitle = 'option3'
    title(currentTitle)

    // Ocultar Add Product
    showAddProduct(show, noshow)


    // Vaciamos tabla existente salvo tr descriptivo

    let table = document.getElementById('dataList')

    for (let i = 0; i < productsList.length; i++) {

        let delTr = document.getElementById(cleanVar(productsList[i].name))
        delTr.remove()
    }

    // Creamos tr dentro de botones para el borrado
    for (let i = 0; i < productsList.length; i++) {

        // Creamos el Boton
        let delButton = document.createElement('button')
        delButton.id = cleanVar(productsList[i].name)
        delButton.className = 'contents '

        if (i % 2 == 0) {

            delButton.innerHTML = `<div class="bg-zinc-200 selUpdProduct"><span class="w-3/5 inline-block">${productsList[i].name}</span><span class="w-1/5 inline-block">${productsList[i].price}</span><span class="w-1/5 inline-block">${productsList[i].stock}</span></div>`

            table.append(delButton)

        } else {

            delButton.innerHTML = `<div class="bg-zinc-300 selUpdProduct"><span class="w-3/5 inline-block">${productsList[i].name}</span><span class="w-1/5 inline-block">${productsList[i].price}</span><span class="w-1/5  inline-block">${productsList[i].stock}</span></div>`

            table.append(delButton)
        }

    }
}







