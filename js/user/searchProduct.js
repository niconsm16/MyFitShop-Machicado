// SrchProd

// Obtengo datos para la búsqueda

let searchProd = document.getElementById('searchProd')
searchProd.onsubmit = showResult.bind(searchProd)

// Genero la función de almacenamiento y búsqueda
function showResult(e) {

    e.preventDefault()

    // Almaceno en memoria de sesión el input para buscarlo en otra página
    sessionStorage.setItem('searchKey', document.getElementById('nameSearch').value)

    // Redirecciono a Results.html
    location.replace("./results.html")
}

toastError()