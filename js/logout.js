let logoutbtn = document.getElementById('logout')
logoutbtn.onclick = () => {
    localStorage.clear()

    sessionStorage.setItem('stockATM', JSON.stringify(productsList))
    sessionStorage.setItem('cart', JSON.stringify(cart))



} 