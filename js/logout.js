let logoutbtn = document.getElementById('logout')
logoutbtn.onclick = () => {
    localStorage.clear()

    sessionStorage.setItem('stockATM', JSON.stringify(productsList))
    localStorage.setItem('localCart', JSON.stringify(cart))



} 