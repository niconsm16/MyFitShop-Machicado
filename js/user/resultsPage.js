// Creo la variable que avisará si encontró resultados o no
let notFound = true

productsList.forEach(n => {

    // Creo variable para almacenar valor de busqueda almacenada en SessionStorage
    let searchKey = sessionStorage.getItem('searchKey')
    // Comparo lo ingresado con los valores del array de Lista de Productos
    if (n.name === searchKey.toUpperCase()) {

        // Me posiciono donde se agregarán los resultados
        let results = document.getElementById('results')

        // Creo el div de contenido de la búsqueda
        let result = document.createElement('div')
        result.className = 'd-flex mx-5 mt-2'
        // Ingreso su valor
        result.innerHTML = `<div class="w-50">${n.name}</div><div class="w-25">${n.price}</div><div class="w-25">${n.stock}</div>`

        // Agrego el valor
        results.append(result)
        // Aviso al sistema que se encontró
        notFound = false
    }
})

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
sessionStorage.clear()