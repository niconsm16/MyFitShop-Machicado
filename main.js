// Clases

class Product {
    constructor(product, price, amount) {
        this.name = product
        this.price = price
        this.stock = amount
    }
}

class Carrito {
    constructor(product, amount, partial) {
        this.product = product
        this.amount = amount
        this.partial = partial
    }
}

// Impresora 

const cl = (a) => { return console.log(a) }

// Limpiadores

const cleanOption = (a) => { return a.trim().toLowerCase() }
const cleanVar = (a) => { return a.replace(/\s/g, '').toLowerCase() }

//Arreglos

const productsList = []
const cart = []

// Variables

let product
let productSelected

// Datos prueba

let p1 = new Product('GAS', 20, 200)
productsList.push(p1)

let p2 = new Product('JUGO', 10, 100)
productsList.push(p2)

let p3 = new Product('GALLETAS', 100, 20)
productsList.push(p3)

let p4 = new Product('BOLEADORAS', 250, 5)
productsList.push(p4)

let p5 = new Product('PONCHO ZARPADO', 1000, 2)
productsList.push(p5)

let p6 = new Product('PIRULINOS', 5, 300)
productsList.push(p6)


/////////////////////////////////////////////////////////////////

// Menu Cliente

function addToCart(cart) {

    let arrayProductsList = ""
    let i = 1
    let stillPurchase = true

    // Conversión del Array en lista para mostrarlo en Alert
    productsList.forEach(n => { arrayProductsList += i + " - " + n.name + " - " + n.price + "\n"; i++ })
    cl(arrayProductsList)

    while (stillPurchase) {

        let keyProduct = parseInt(prompt(`Seleccione el producto que desea comprar:
${arrayProductsList}999 - 'VACIAR EL CARRITO'
0 - Salir`))

        if (keyProduct === 0) {

            stillPurchase = false
            break

        } else if (keyProduct === 999) {

            cart.splice(0, cart.length)
            alert('CARRITO VACIO')

        } else if (keyProduct <= productsList.length) {

            //trucamos el keyProduct para usarlo de key del arreglo
            keyProduct--

            //Comprobar existencia del producto en el carrito
            productSelected = (cart.find(object => cleanVar(object.product) === cleanVar(productsList[keyProduct].name)))

            if (productSelected != undefined) {
                //lo encontró

                answer = true

                while (answer) {

                    let select = parseInt(prompt(`Ya tienes cargado el producto, qué deseas hacer?
1- agregar más unidades al carrito
2- eliminar del carrito
3- salir`))

                    switch (select) {

                        case 1:

                            let amountProduct = parseInt(prompt('Cuántas unidades va a llevar?'))

                            let partial = (amountProduct * productsList[keyProduct].price)

                            productSelected.amount += amountProduct
                            productSelected.partial += partial

                            answer = false
                            break

                        case 2:

                            cart.splice(keyProduct, 1)

                            answer = false
                            break

                        case 3:

                            answer = false
                            break

                        default:

                            alert('Ingreso de dato inválido. Por favor ingrese un nuevo valor')
                            continue
                    }
                }


            } else {
                //no lo encontró
                cl('NO lo encontro')

                let amountProduct = parseInt(prompt('Cuántas unidades va a llevar?'))

                let partial = (amountProduct * productsList[keyProduct].price)

                let newOrder = new Carrito(productsList[keyProduct].name, amountProduct, partial)
                cart.push(newOrder)

            }

        } else {
            alert('Ingreso de dato inválido. Por favor ingrese un nuevo valor')
            continue
        }
    }

    return cart
}

/////////////////////////////////////////////////////////////////

function Client() {


    addToCart(cart)

    i = 1
    arrayProductsList = ""

    // Creo variable del carrito para la lista del alert
    cart.forEach(n => { arrayProductsList += i + " - " + n.product + " - " + n.amount + " unidades - $" + n.partial + "\n"; i++ })

    let subtotal = 0

    // Creo el subtotal del carrito
    for (let n in cart) {
        subtotal += cart[n].partial
    }

    cl(arrayProductsList)
    cl(subtotal)

    alert(`Su carrito:
${arrayProductsList}
Subtotal: ${subtotal}
`)

}

/////////////////////////////////////////////////////////////////

// Menu Administrador

//Obtener nombre del producto y comprobar existencia del mismo 

function getNameProduct() {

    product = prompt('Ingrese el nombre del producto').toUpperCase()

    //Buscamos la existencia del producto
    productSelected = (productsList.find(object => cleanVar(object.name) === cleanVar(product)))

    return product, productSelected
}

function updateProduct(productSelected) {

    productSelected.price = parseInt(prompt('Ingrese el precio unitario del producto'))
    productSelected.stock = parseInt(prompt('Ingrese la cantidad de unidades del producto'))
    //cl(productsList)
}

function addProduct() {

    getNameProduct()

    if (productSelected != undefined) {

        let s2 = true

        while (s2) {

            let answer = cleanOption(prompt('El producto ingresado ya existe, desea actualizar sus datos? (s/n)'))

            if (answer === 's') {

                updateProduct(productSelected)

                break

            } else if (answer === 'n') {

                s2 = false

            } else {

                alert('Ingreso no válido, intente nuevamente')
                continue

            }
        }

    } else {

        price = parseInt(prompt('Ingrese el precio unitario del producto'))
        amount = parseInt(prompt('Ingrese la cantidad de unidades del producto'))

        let newProduct = new Product(product, price, amount)
        productsList.push(newProduct)

    }
}

function listProduct() {

    getNameProduct()

    if (productSelected != undefined) {

        alert(`Detalles del producto:
Nombre: ${productSelected.name}
Precio por unidad: ${productSelected.price}
Cantidad en stock: ${productSelected.stock}`)

    } else {

        alert(`El producto ${product} es inexistente.`)
    }
}

function modifyProduct() {

    getNameProduct()

    if (productSelected != undefined) {

        alert(`Detalles del producto a modificar:
Nombre: ${productSelected.name}
Precio por unidad: ${productSelected.price}
Cantidad en stock: ${productSelected.stock}`)

        newName = prompt('Ingrese el nuevo nombre del producto:').toUpperCase()

        updateProduct(productSelected)

        productSelected.name = newName

        alert(`Nuevos valores del producto
Nombre: ${productSelected.name}
Precio por unidad: ${productSelected.price}
Cantidad en stock: ${productSelected.stock}
        `)

    } else {

        alert(`El producto ${product} es inexistente.`)
    }

}

function deleteProduct() {

    getNameProduct()

    if (productSelected != undefined) {

        let s3 = true

        while (s3) {
            let delOption = cleanOption(prompt(`DETALLES DEL PRODUCTO A ELIMINAR:
Nombre: ${productSelected.name}
Precio por unidad: ${productSelected.price}
Cantidad en stock: ${productSelected.stock}

ATENCION: EL PRODUCTO UNA VEZ BORRADO NO SE PODRÁ RECUPERAR
Está seguro de borrar este producto? (s/n)`))

            switch (delOption) {

                case 's':

                    let indexProduct = productsList.indexOf(productSelected)
                    productsList.splice(indexProduct, 1)
                    s3 = false
                    break

                case 'n':

                    s3 = false
                    break

                default:
                    alert('Dato ingresado no válido. Intente nuevamente')

            }
        }

    } else {
        alert(`El producto ${product} es inexistente.`)
    }

}

///////////////////////////

function Administrator() {

    let s1 = true

    while (s1) {

        cl(productsList)

        let answer = cleanOption(prompt(`Qué desea hacer?

a- Cargar un producto
b- Listar un producto
c- Modificar un producto
d- Borrar un producto
e- Salir
`))

        switch (answer) {

            case 'a':

                addProduct()

                continue

            case 'b':

                listProduct()

                continue

            case 'c':

                modifyProduct()

                continue

            case 'd':

                deleteProduct()

                continue

            case 'e':
                s1 = false
                break

            default:
                alert('Dato ingresado no válido. Intente nuevamente')
                continue
        }
    }

}

/////////////////////////////////////////////////////////////////

// Main

function main() {

    let s0 = true

    while (s0) {

        let answer = cleanOption(prompt(`Elija su usuario:

a- Administrador
b- Cliente
c- Salir
`))
        switch (answer) {

            case 'a':

                Administrator()
                break

            case 'b':

                Client()
                break

            case 'c':

                s0 = false
                break

            default:

                alert('Dato ingresado no válido. Intente nuevamente')
                continue
        }
    }
}

main()