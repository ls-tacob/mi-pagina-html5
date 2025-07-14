// Arreglo de productos fitness
const productos = [
  {
    nombre: 'Yogurt griego con frutas y miel',
    precio: '$2.50',
    descripcion: 'Yogurt natural con frutas frescas y miel orgánica.'
  },
  {
    nombre: 'Barra energética de avena y nueces',
    precio: '$1.80',
    descripcion: 'Con avena, nueces, semillas y cacao.'
  },
  {
    nombre: 'Smoothie de proteína vegetal',
    precio: '$3.00',
    descripcion: 'Con leche de almendras, plátano y chía.'
  },
  {
    nombre: 'Mix de frutos secos con cacao amargo',
    precio: '$2.00',
    descripcion: 'Almendras, nueces, pasas y chips de cacao sin azúcar.'
  },
  {
    nombre: 'Galletas integrales de zanahoria',
    precio: '$1.20',
    descripcion: 'Galletas hechas con harina integral y zanahoria natural.'
  },
  {
    nombre: 'Pudin de chía con leche de coco',
    precio: '$2.80',
    descripcion: 'Postre saludable con omega-3 y sabor tropical.'
  }
];

// Referencias al DOM
const lista = document.getElementById('lista-productos');
const btnAgregar = document.getElementById('agregar-producto');

// Función para renderizar con plantilla dinámica
function renderizarProductos() {
  lista.innerHTML = ''; // Limpiar lista
  productos.forEach((p) => {
    const plantilla = `
      <li class="list-group-item">
        <h5 class="mb-1">${p.nombre}</h5>
        <p class="mb-1 text-muted">${p.descripcion}</p>
        <small class="text-success fw-bold">${p.precio}</small>
      </li>
    `;
    lista.innerHTML += plantilla;
  });
}

// Evento para agregar un nuevo producto
btnAgregar.addEventListener('click', () => {
  productos.push({
    nombre: 'Bowl de frutas con granola sin azúcar',
    precio: '$3.20',
    descripcion: 'Frutas frescas con granola artesanal y semillas.'
  });
  renderizarProductos();
});

// Renderizar al cargar
document.addEventListener('DOMContentLoaded', renderizarProductos);
