// SrchProd

let searchProd = document.getElementById('searchProd')
searchProd.onsubmit = showResult.bind(searchProd)

function showResult(e) {
    e.preventDefault()
    location.replace("./results.html")
}