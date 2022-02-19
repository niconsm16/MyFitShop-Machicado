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
//0
let p1 = new Product('GAS', 20, 200)
productsList.push(p1)
//1
let p2 = new Product('JUGO', 10, 100)
productsList.push(p2)
//2
let p3 = new Product('GALLETAS', 100, 20)
productsList.push(p3)
//3
let p4 = new Product('BOLEADORAS', 250, 5)
productsList.push(p4)
//4
let p5 = new Product('PONCHO ZARPADO', 1000, 2)
productsList.push(p5)
//5
let p6 = new Product('PIRULINOS', 5, 300)
productsList.push(p6)
//6
let p7 = new Product('PONCHO ROSA', 2, 8000)
productsList.push(p7)

let p8 = new Product('CUERDAS PROFESIONALES', 15, 659)
productsList.push(p8)

let p9 = new Product('GUANTES DE BOX', 5, 1399)
productsList.push(p9)

let p10 = new Product('KIT INICIAL GYM', 4, 3509)
productsList.push(p10)

let p11 = new Product('FRUTOS SECOS', 20, 499)
productsList.push(p11)

let p12 = new Product('YOGURT NATURAL PROTEICO', 2, 349)
productsList.push(p12)

let p13 = new Product('VIANDA FRESCA', 9, 499)
productsList.push(p13)

let p14 = new Product('MORAS FRESCAS', 5, 399)
productsList.push(p14)

let p15 = new Product('BOCADITOS PROTEICOS', 11, 499)
productsList.push(p15)

let p16 = new Product('ACEITE NATURAL DE OLIVA', 1, 0.99)
productsList.push(p16)

let p17 = new Product('CANASTA DE VERDURAS', 5, 0.99)
productsList.push(p17)

let p18 = new Product('PIZZA VEGANA', 2, 0.99)
productsList.push(p18)