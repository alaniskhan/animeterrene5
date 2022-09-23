const menu = document.getElementById('site_menu-list')


const menu_icon = document.getElementById('header_menu-icon')

menu_icon.addEventListener(('click'), function () {
    menu.classList.toggle('active')
} )