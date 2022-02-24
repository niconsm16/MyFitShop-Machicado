let logoutbtn = document.getElementById('logout')
logoutbtn.onclick = () => {
    localStorage.clear()

    localStorage.setItem('stockATM', JSON.stringify(productsList))




} 