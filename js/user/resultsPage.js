// Creo la variable que avisará si encontró resultados o no
let notFound = true

// Creo variable para almacenar valor de busqueda almacenada en SessionStorage
let searchKey = sessionStorage.getItem('searchKey')


// Verifico que la búsqueda tiene más de 3 caracteres
if (searchKey.length >= 3) {

    // Primero Busco coincidencia exacta
    productsList.forEach(n => {
        if (searchKey.toUpperCase() === n.name) {

            // Me posiciono donde se agregarán los resultados
            let results = document.getElementById('results')

            // Creo el div de contenido de la búsqueda
            let result = document.createElement('div')
            result.className = 'd-flex mx-5 mt-2'
            // Ingreso su valor
            result.innerHTML = `<div class="w-50" id="${cleanVar(n.name)}">${n.name}</div><div class="w-25">${n.price}</div><div class="w-25">${n.stock}</div>`

            // Agrego el valor
            results.append(result)
            // Aviso al sistema que se encontró al menos un resultado
            notFound = false
        }
    })


    // Separo la búsqueda en palabras dentro de un array
    let skArray = searchKey.split(" ")

    // Procedo a compararlo con cada uno de los productos de Lista
    productsList.forEach(n => {

        // Verifico igualdades de las palabras de la búsqueda
        for (let a = 0; a < skArray.length; a++) {

            // Creo variable de la palabra de turno para un mejor orden
            let skArrayLttr = skArray[a].toLowerCase()

            //Dividir el nombre del producto en palabras
            let plArray1 = n.name
            let plArray = plArray1.split(" ")
            // Verifico por cada palabra que contenga el producto de Lista
            for (let a2 = 0; a2 < plArray.length; a2++) {

                // Creo variable de la palabra de turno para un mejor orden
                let plArrayLttr = plArray[a2].toLowerCase()

                // Recorro letra por letra
                for (let b = 0; b < skArrayLttr.length; b++) {


                    // Verifico coincidencia
                    if (skArrayLttr[b] === plArrayLttr[b]) {

                        // Corroboro que la coincidencia sea mayor a 3 caracteres
                        if (b >= 2) {

                            let c = document.getElementById(cleanVar(n.name))

                            if (c) { continue }

                            else {
                                // Me posiciono donde se agregarán los resultados
                                let results = document.getElementById('results')

                                // Creo el div de contenido de la búsqueda
                                let result = document.createElement('div')
                                result.className = 'd-flex mx-5 mt-2'
                                // Ingreso su valor
                                result.innerHTML = `<div class="w-50" id="${cleanVar(n.name)}">${n.name}</div><div class="w-25">${n.price}</div><div class="w-25">${n.stock}</div>`

                                // Agrego el valor
                                results.append(result)
                                // Aviso al sistema que se encontró al menos un resultado
                                notFound = false

                                // Si no sigo buscando coincidencias
                            }
                        }
                        // Si no hay coincidencia rompo el bucle de comparación
                    } else { break }
                }
            }
        }
    })

} else {
    // Notifico que la cantidad de caracteres es insuficiente, me posiciono sobre el elemento a interactuar
    let results = document.getElementById('results')

    // Creo el div de contenido de la búsqueda
    let result = document.createElement('div')
    result.className = 'd-flex mx-5 mt-2'
    // Ingreso su valor
    result.innerHTML = `<p>La búsqueda debe tener al menos 3 caracteres</p>`

    // Agrego el valor
    results.append(result)

    // Notifico el error para no ejectuar mensaje de ningún resultado
    notFound = false

}

// Si no se encuentra creo el mensaje para avisarlo
if (notFound) {
    let results = document.getElementById('results')

    // Creo el div de contenido de la búsqueda
    let result = document.createElement('div')
    result.className = 'd-flex mx-5 mt-2'
    // Ingreso su valor
    result.innerHTML = `<p>No se encontraron resultados</p>`

    // Agrego el valor
    results.append(result)
}

// Limpio el sessionstorage
sessionStorage.removeItem('searchKey')
