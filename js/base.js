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

let p7 = new Product('PONCHO ROSA', 2, 8000)
productsList.push(p7)
