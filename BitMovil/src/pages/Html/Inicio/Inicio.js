function abrirImagen(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('imgModal');
  modal.style.display = 'block';
  modalImg.src = src;
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

/* MENU DESPLEGABLE */
function toggleMenu() {
  const menu = document.getElementById('mainMenu');
  const toggle = document.querySelector('.menu-toggle');
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
}

/* FUNCION INTERACCION MENU */
document.querySelectorAll('#mainMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mainMenu').classList.remove('active');
    document.querySelector('.menu-toggle').classList.remove('active');
  });
});

$(document).ready(function () {

  // RESPONSIVE MENU
  $("#menutoggle").click(function () {
    $('.xs-menu').toggleClass('displaynone');

  });
  // AGREGAR CLASE ACTIVE AL MENU
  $('ul li').click(function (e) {
    e.preventDefault();
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  // ELIMINAR DROP MENU
  $(".drop-down").hover(function () {
    $('.mega-menu').addClass('display-on');
  });
  $(".drop-down").mouseleave(function () {
    $('.mega-menu').removeClass('display-on');
  });

});

document.getElementById('menuToggle').addEventListener('click', toggleMenu);