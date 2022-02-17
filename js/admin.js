// Variables

const show = 'appear'
const noshow = 'disappear'

// Cambio de titulo

function title(currentTitle) {
    titleSection = document.querySelector('#titleSection h2')
    titleSection.innerHTML = (document.getElementById(currentTitle)).innerHTML.toUpperCase()
}

// Cambio de colores de títulos
function changeCTitle(currentColor, remove1, remove2) {
    document.querySelector('#titleSection h2').classList.remove(remove1, remove2)
    document.querySelector('#titleSection h2').classList.add(currentColor)
}

// Menu Agregar Producto
const showAddProduct = (a, b) => { document.getElementById('createProduct').classList.replace(a, b) }

// Menu Alerta
const showAlert = (a, b) => { document.getElementById('alert').classList.replace(a, b) }

// Listado de Productos

let select1 = document.getElementById('option1')

select1.onclick = () => { listProducts() }

// Agregar Producto
let select2 = document.getElementById('option2')

select2.onclick = () => { addProduct() }

// Actualizar Producto

let select3 = document.getElementById('option3')

select3.onclick = () => { updateProduct() }

// Borrar Producto

let select4 = document.getElementById('option4')

select4.onclick = () => { deleteProduct() }

listProducts()