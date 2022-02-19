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
p1 = new Product('JUGO', 10, 100)
productsList.push(p1)
//2
p1 = new Product('GALLETAS', 100, 20)
productsList.push(p1)
//3
p1 = new Product('BOLEADORAS', 250, 5)
productsList.push(p1)
//4
p1 = new Product('PONCHO ZARPADO', 1000, 2)
productsList.push(p1)
//5
p1 = new Product('PIRULINOS', 5, 300)
productsList.push(p1)
//6
p1 = new Product('PONCHO ROSA', 2, 8000)
productsList.push(p1)

p1 = new Product('CUERDAS PROFESIONALES', 659.99, 10)
productsList.push(p1)

p1 = new Product('GUANTES DE BOX', 1399.99, 8)
productsList.push(p1)

p1 = new Product('KIT INICIAL GYM', 3509, 99, 4)
productsList.push(p1)

p1 = new Product('FRUTOS SECOS', 499.99, 5)
productsList.push(p1)

p1 = new Product('YOGURT NATURAL PROTEICO', 349.99, 2)
productsList.push(p1)

p1 = new Product('VIANDA FRESCA', 499.99, 6)
productsList.push(p1)

p1 = new Product('MORAS FRESCAS', 399.99, 8)
productsList.push(p1)

p1 = new Product('BOCADITOS PROTEICOS', 499.99, 60)
productsList.push(p1)

p1 = new Product('ACEITE NATURAL DE OLIVA', 0.99, 1)
productsList.push(p1)

p1 = new Product('CANASTA DE VERDURAS', 0.99, 5)
productsList.push(p1)

p1 = new Product('PIZZA VEGANA', 45.99, 8)
productsList.push(p1)

p1 = new Product('CHORIZOS JUGOSOS', 999.99, 9)
productsList.push(p1)