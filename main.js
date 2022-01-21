// VARIABLES GLOBALES

let purchaseMore = true
// Precio Total sin descuentos
let totalPrice = 0

let deliveryPrice = 0
let deliveryOption

// Datos del descuento
let discountPercent = 0
let discountType
let totalDiscount

// Puntos del usuario
let points = 0

// FUNCIONES

// Ingresando productos, valor y unidades de compra

function productPurchase() {

    while (purchaseMore) {
        let product = prompt("Ingrese el nombre del producto")
        let amount = parseInt(prompt("Ingrese la cantidad que llevará del mismo producto"))
        let price = parseFloat(prompt("Ingrese el precio del producto"))
        let totalProduct = amount * price
        totalPrice = totalPrice + totalProduct
        partialCost(amount, product, totalPrice)

    }
}

// Opcion "Seguir comprando"

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

// Delivery

function deliverySelect() {

    let deliveryTrue = true

    while (deliveryTrue) {
        deliveryOption = prompt("desea recibirlo en su casa? (s/n): Recuerde que el envío tiene un costo de $500").trim().toLowerCase()

        if (deliveryOption === "s") {
            deliveryOption = "Ha elegido recibirlo en su casa (costo $500)"
            deliveryPrice = 500
            deliveryTrue = false
        } else if (deliveryOption === "n") {
            deliveryOption = "Ha elegido retirarlo por el local"
            deliveryTrue = false
        } else {
            alert("Respuesta inválida, inténtelo nuevamente")
        }
    }
}

// Discounts

function discount(price) {

    const FAMILIAR = 10000
    const MAYORISTA = 25000

    if (price > MAYORISTA) {
        discountType = "Mayorista"
        discountPercent = 20
        totalDiscount = (price / 100) * discountPercent
    } else if (price > FAMILIAR) {
        discountType = "Familiar"
        discountPercent = 10
        totalDiscount = (price / 100) * discountPercent
    } else {
        // discountType Undefined
        totalDiscount = 0
    }
}

// Proceso final: Precio Final

function finalPrice() {

    const IVA = 21

    let ivaPrice = ((totalPrice - totalDiscount) / 100) * IVA

    realPrice = (totalPrice - totalDiscount) + ivaPrice + deliveryPrice

    switch (discountType) {
        case "Mayorista":

            points = points + 2

            alert(`Su compra tiene un valor de $${totalPrice}

Ud. ha recibido el descuento ${discountType} de un ${discountPercent}%,
su descuento es de $${totalDiscount}

${IVA}% IVA = ${ivaPrice}

${deliveryOption}

El costo total de su compra es de $${realPrice} (imp. incluidos)

Ha sumado un total de 2 puntos con su compra, lleva acumulados un total de ${points} puntos.

Gracias por comprar en nuestra tienda, vuelva pronto.`)
            break;

        case "Familiar":

            points = points + 1

            alert(`Su compra tiene un valor de $${totalPrice}

Ud. ha recibido el descuento ${discountType} de un ${discountPercent}%,
su descuento es de $${totalDiscount}

${IVA}% IVA = ${ivaPrice}

${deliveryOption}

El costo total de su compra es de $${realPrice} (imp. incluidos)

Ha sumado un total de 1 punto con su compra, lleva acumulados un total de ${points} puntos.

Gracias por comprar en nuestra tienda, vuelva pronto.`)
            break;

        default:

            points = points + 0

            alert(`Su compra tiene un valor de $${totalPrice}

${IVA}% IVA = ${ivaPrice}

${deliveryOption}

El costo total de su compra es de $${realPrice} (imp. incluidos)

Tiene acumulado ${points} puntos. Su compra no ha generado nuevos puntos.

Gracias por comprar en nuestra tienda, vuelva pronto.`)

            break;
    }
}

productPurchase()
deliverySelect()
discount(totalPrice)
finalPrice()