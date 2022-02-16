//Obtener nombre del producto y comprobar existencia del mismo

function listProducts() {

    // Titulo
    currentTitle = 'option1'
    title(currentTitle)

    // Ocultar Add Product
    showAddProduct(show, noshow)

    // Creacion de tabla

    let table = document.getElementById('dataList')

    for (let i = 0; i < productsList.length; i++) {

        // Verificamos la existencia del producto en la tabla

        let idCompare = document.getElementById(cleanVar(productsList[i].name))

        if (idCompare) {

            // Si existe reemplaza el actual por variacion de valores
            continue

        } else {
            // Si no existe se crea su respectiva fila con sus datos
            let tr = document.createElement('tr')

            if (i % 2 == 0) {

                tr.innerHTML = `<td class="w-3/5 bg-zinc-200" id=${cleanVar(productsList[i].name)}>${productsList[i].name}</td><td class="w-1/5 bg-zinc-200">${productsList[i].price}</td><td class="w-1/5 bg-zinc-200">${productsList[i].stock}</td>`

                table.appendChild(tr)

            } else {

                tr.innerHTML = `<td class="w-3/5 bg-zinc-300" id=${cleanVar(productsList[i].name)}>${productsList[i].name}</td><td class="w-1/5 bg-zinc-300">${productsList[i].price}</td><td class="w-1/5 bg-zinc-300">${productsList[i].stock}</td>`

                table.appendChild(tr)
            }
        }
    }
}
