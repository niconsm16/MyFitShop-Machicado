var purchaseMore = true
let totalPrice = 0


function partialCost(amount, product, totalPrice) {
    let selectOption = true
    while (selectOption) {
        let purchaseSelect = prompt(`Usted está llevando ${amount} unidades del producto ${product}
Su compra tiene un costo de ${totalPrice})
Quiere seguir llevando productos?(s/n)`).trim().toLowerCase()

        if (purchaseSelect === "s") {
            selectOption = false
        } else if (purchaseSelect === "n") {
            selectOption = false
            purchaseMore = false
        } else {
            alert("Respuesta inválida, inténtelo nuevamente")
        }
    }
}

function productSingle() {

    while (purchaseMore) {
        let product = prompt("Ingrese el nombre del producto")
        let price = parseFloat(prompt("Ingrese el precio del producto"))
        let amount = parseInt(prompt("Ingrese la cantidad que llevará del mismo producto"))
        let totalProduct = amount * price
        totalPrice = totalPrice + totalProduct
        console.log(product)
        console.log(totalProduct)
        console.log(totalPrice)
        partialCost(amount, product, totalPrice, purchaseMore)
    }
}

productSingle()
