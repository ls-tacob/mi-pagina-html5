function mostrarAlerta() {
  alert("¡Gracias por visitar Superándote!");
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let valid = true;

  [nombre, correo, mensaje].forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      valid = false;
    } else {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
    }
  });

  if (valid) {
    alert("Formulario enviado con éxito.");
    this.reset();
    document.querySelectorAll(".is-valid").forEach((el) => el.classList.remove("is-valid"));
  }
});
