function toggleElement(id) {
    var element = document.getElementById(id);

    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';

    } else {
        element.style.display = 'none';
    }
}
function toggleSubmenu(id) {
    var submenu = document.getElementById(id);

    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}
function toggleMenuticket(id) {
    var menuticket = document.getElementById(id);
    if (menuticket.style.display === 'none' || menuticket.style.display === '') {
        menuticket.style.display = 'block';
    } else {
        menuticket.style.display = 'none';

    }
}

function toggleMenufisco(id) {
    var menufisco = document.getElementById(id);
    if (menufisco.style.display === 'none' || menufisco.style.display === '') {
        menufisco.style.display = 'block';
    } else {
        menufisco.style.display = 'none';
    }
}

function buscar() {
    var input, filtro, menu, menuItens, links;
    input = document.getElementById("busca");
    filtro = input.value.toUpperCase();
    menu = document.getElementsByClassName("menu")[0];
    menuItens = menu.getElementsByTagName("li");

    for (var i = 0; i < menuItens.length; i++) {
        links = menuItens[i].getElementsByTagName("a")[0];

        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            menuItens[i].style.display = "none" || menuItens[i].style;

        } else {
            menuItens[i].style.display = "none";
        }
    }
}






