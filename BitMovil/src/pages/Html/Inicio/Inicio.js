document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM listo");
});

const imagenes = document.querySelectorAll(".img-modal");
const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");

imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    imgModal.src = img.src;
  }); 
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
  imgModal.src = "";
});

/* MENU DESPLEGABLE */
  const menu = document.getElementById('mainMenu');
  const toggle = document.querySelector('.menu-toggle');
  function toggleMenu() {
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