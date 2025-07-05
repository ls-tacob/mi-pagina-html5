// Obtenemos referencias a los elementos del formulario
const form = document.getElementById('registroForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const edad = document.getElementById('edad');
const submitBtn = document.getElementById('submitBtn');

// Mensajes de error
const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const edadError = document.getElementById('edadError');

// Expresión regular para el correo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Expresión para contraseña segura (mínimo 8 caracteres, un número y un carácter especial)
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

// Escuchamos los eventos input en cada campo para validación dinámica
nombre.addEventListener('input', () => {
  if (nombre.value.trim().length >= 3) {
    setValid(nombre, nombreError);
  } else {
    setInvalid(nombre, nombreError, 'El nombre debe tener al menos 3 caracteres.');
  }
  checkFormValidity();
});

email.addEventListener('input', () => {
  if (emailRegex.test(email.value)) {
    setValid(email, emailError);
  } else {
    setInvalid(email, emailError, 'Correo electrónico inválido.');
  }
  checkFormValidity();
});

password.addEventListener('input', () => {
  if (passwordRegex.test(password.value)) {
    setValid(password, passwordError);
  } else {
    setInvalid(password, passwordError, 'Debe tener mínimo 8 caracteres, un número y un símbolo.');
  }
  checkFormValidity();
  // También validamos confirmación en caso de cambio
  confirmPassword.dispatchEvent(new Event('input'));
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value === password.value && password.value !== '') {
    setValid(confirmPassword, confirmPasswordError);
  } else {
    setInvalid(confirmPassword, confirmPasswordError, 'Las contraseñas no coinciden.');
  }
  checkFormValidity();
});

edad.addEventListener('input', () => {
  if (parseInt(edad.value) >= 18) {
    setValid(edad, edadError);
  } else {
    setInvalid(edad, edadError, 'Debes tener al menos 18 años.');
  }
  checkFormValidity();
});

// Función para marcar campo como válido
function setValid(input, errorElement) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorElement.textContent = '';
}

// Función para marcar campo como inválido y mostrar mensaje
function setInvalid(input, errorElement, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errorElement.textContent = message;
}

// Verifica si todos los campos son válidos
function checkFormValidity() {
  const allValid = [...form.elements].every(input =>
    (input.type !== 'submit' && input.type !== 'reset') ? input.classList.contains('valid') : true
  );
  submitBtn.disabled = !allValid;
}

// Mostrar mensaje al enviar
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Formulario enviado correctamente!');
});
