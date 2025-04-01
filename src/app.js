//para seleccionar un apartado del nav

// Esperar hasta que el contenido HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los elementos con la clase "navlink"
    const navLinks = document.querySelectorAll(".navlink");

    // Agregar un evento de clic a cada enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
         // Al hacer clic en un enlace, quitar la clase "active" de todos los enlaces
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });

//FUCTION MOSTRAR MENU AL HACER CLICK EN EL RESPNSIVE
let mostrarMenu = false;

function mostrarOcultarMenu() {
    if (mostrarMenu) {
        document.getElementById("nav").classList = "";
        mostrarMenu = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        mostrarMenu = true;
    }
}

//OCULTAR AL HACER CLICK EN UN AOPCION DEL MENU 
function Selection() {
    document.getElementById("nav").classList = "";
    mostrarMenu = false;
}

//FUCTION PARA DESCARGAR CV
