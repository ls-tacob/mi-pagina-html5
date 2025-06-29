// Seleccionamos los elementos necesarios del DOM
const inputUrl = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const gallery = document.getElementById("gallery");
const deleteBtn = document.getElementById("deleteBtn");

// Función para agregar una nueva imagen a la galería
function agregarImagen() {
  const url = inputUrl.value.trim();

  // Validamos que la URL no esté vacía
  if (url === "") {
    alert("Por favor, ingresa una URL válida.");
    return;
  }

  // Creamos el nuevo elemento <img>
  const img = document.createElement("img");
  img.src = url;

  // Evento al hacer clic en la imagen (selección)
  img.addEventListener("click", () => {
    // Quitamos la clase 'selected' de todas las demás imágenes
    const todas = gallery.querySelectorAll("img");
    todas.forEach(i => i.classList.remove("selected"));

    // Agregamos la clase 'selected' a la imagen clickeada
    img.classList.add("selected");
  });

  // Agregamos la imagen al DOM
  gallery.appendChild(img);

  // Limpiamos el campo
  inputUrl.value = "";
}

// Función para eliminar la imagen seleccionada
function eliminarImagenSeleccionada() {
  const seleccionada = gallery.querySelector("img.selected");

  if (seleccionada) {
    gallery.removeChild(seleccionada);
  } else {
    alert("Primero selecciona una imagen para eliminar.");
  }
}

// Eventos
addImageBtn.addEventListener("click", agregarImagen);

// También puedes presionar ENTER en el input para agregar
inputUrl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que se recargue la página
    agregarImagen();
  }
});

deleteBtn.addEventListener("click", eliminarImagenSeleccionada);
