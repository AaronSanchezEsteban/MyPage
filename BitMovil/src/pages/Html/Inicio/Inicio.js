function abrirImagen(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('imgModal');
  modal.style.display = 'block';
  modalImg.src = src;
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

/* MENU DEZPLEGANTE */
function toggleMenu() {
  var menu = document.getElementById('mainMenu');
  menu.classList.toggle('active');
}