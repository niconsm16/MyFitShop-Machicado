let allpage = document.getElementById('all')

productsList.forEach(n => {


    // Creo el div de contenido de la búsqueda

    allt = document.createElement('div')
    allt.className = 'd-flex mx-3 mt-2 cuadrito'
    allt.innerHTML = `<div class="card" id="${cleanVar(n.name)}" style="min-width:12rem">
                <img src="../src/images/shop/${cleanVar(n.name).toLowerCase()}.jpg" height="133.71px" class="card-img-top"
                    alt="card-group-image" onerror='this.src="../src/images/shop/notfound.jpg"'>
                <div class="card-body bg-light h6em">
                    <h5 class="card-title title-card h-50">${n.name}</h5>
                    <p class="card-text fs-5">$${n.price}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Stock: ${n.stock} u.</small>
                </div>
                <button type="button" onclick="prodAddToCart(productsList,${productsList.indexOf(n)})" class="btn btn-success bg-verde border-light">Comprar</button>`

    allpage.append(allt)

})


