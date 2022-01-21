let purchaseMore = true
let totalPrice

while (purchaseMore) {
    productSingle()
}

// Products

function partialCost() {
    let purchaseSelect = prompt(`Usted está llevando ${amount} unidades del producto ${product}
Su compra tiene un costo de ${total})
Quiere seguir llevando productos?(s/n)`).trim().toLowerCase()
    while (purchaseMore) {
        if (purchaseSelect === "s") {
            purchaseMore = false
            break
        } else if (purchaseSelect === "n") {
            purchaseMore = false
            break
        } else {
            prompt("Respuesta inválida, inténtelo nuevamente")
        }
    }
}
function productSingle() {

    while (purchaseMore) {
        let product = prompt("Ingrese el nombre del producto")
        let amount = parseInt(prompt("Ingrese la cantidad que llevará del mismo producto"))
        let price = parseFloat(prompt("Ingrese el precio del producto"))
        let totalProduct = amount * price
        totalPrice = totalPrice + totalProduct
        partialCost(amount, product, totalPrice)

    }
}

// Delivery

let deliveryOption
let deliveryPrice
let deliveryTrue = true

function deliverySelect(delivery) {
    while (deliveryTrue) {
        deliveryOption = prompt("desea recibirlo en su casa? (s/n): Recuerde que el envío tiene un costo de $500").trim().toUpperCase()
        if (deliveryOption === "s") {
            deliveryOption = "Ha elegido recibirlo en su casa"
            deliveryPrice = 500
            deliveryTrue = false
        } else if (delivery === "n") {
            deliveryOption = "Ha elegido retirar por el local"
            deliveryPrice = 0
            deliveryTrue = false
        } else {
            prompt("Respuesta inválida, inténtelo nuevamente")
        }
    }
}

// Discounts



if 



    function totalDiscount() {

    }

totalProduct(amount, price)



totalPrice(){ }

totalDiscount(){ }



total(){ }




deliverySelect(deliveryOption)

prompt(`Su compra ha superado el valor de $${total}
tiene un descuento d %${discount}`)

prompt(`Su compra tiene un valor total de 

    `)