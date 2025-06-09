const burgerButton = document.getElementById('burger')


const linksOnBurgerMenu = document.querySelectorAll('.linkOnBurgerMenu')

for (let i = 0; i < linksOnBurgerMenu.length; i++) {
    linksOnBurgerMenu[i].onclick = () => {
        burgerButton.checked = !burgerButton.checked
    }
}
