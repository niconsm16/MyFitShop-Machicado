//# Generador de Boxes
// (boxy = div id donde se coloca, sortby = la lista que se utilizará (por defecto productsList), randomSelect para ver si formulamos un valor aleatorio o no -si tenemos un array ordenado entonces deberia ser false)
function boxGenerator(boxy, sortby = productsList, randomSelect = true) {
    // Creo un array para almacenar valores que no se deben repetir en el bucle, y checkRandom
    let forNoRepeat = []

    // Solo puedo poner 5 cards por fila
    for (let i = 1; i <= 5; i++) {
        // Genero un valor random para el índice, también redondeo el valor - Si está ordenado entonces tomo el valor de i - 1
        let random
        let arrayName

        randomSelect ? random = Math.floor(Math.random() * (sortby.length)) : random = i - 1
        //Compruebo el valor de Sortby para asignar el nombre del array al onclick del boton mediante arrayName
        sortby === productsList ? arrayName = 'productsList' : (sortby === cheap ? arrayName = 'cheap' : arrayName = 'sale')

        // Consulto si el valor ya fue agregado (se incluiría en el array forNoRepeat)
        if (forNoRepeat.includes(random)) {
            // Retraso el contador para tener una nueva chance
            i--
            continue

        } else {
            // Si el número random no se cargó anteriormente entonces se genera la card
            // Creo la card
            let box = document.getElementById(boxy)
            let boxInside = document.createElement('div')
            boxInside.className = 'card'
            boxInside.innerHTML = `<div class="card">
                <img src="../src/images/shop/${cleanVar(sortby[random].name).toLowerCase()}.jpg" height="133.71px" class="card-img-top"
                    alt="card-group-image" onerror='this.src="../src/images/shop/notfound.jpg"'>
                <div class="card-body bg-light h6em">
                    <h5 class="card-title title-card h-50">${sortby[random].name}</h5>
                    <p class="card-text fs-5">$${sortby[random].price}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Stock: ${sortby[random].stock} u.</small>
                </div>
                <button type="button" onclick="prodAddToCart(${arrayName},${random})" class="btn btn-success bg-verde border-light">Comprar</button>`
            box.append(boxInside)
            // Agrego el valor random a su lista forNoRepeat para no repetir el valor
            forNoRepeat.push(random)
        }
    }
}

//? Creación de las cajas

boxGenerator('box1')
boxGenerator('box2')
let cheap = productsList.slice()
cheap.sort((a, b) => a.price - b.price)
boxGenerator('box3', cheap, false)
let sale = productsList.slice()
sale.sort((a, b) => a.stock - b.stock)
boxGenerator('box4', sale, false)