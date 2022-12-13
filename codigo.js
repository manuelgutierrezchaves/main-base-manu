// Obtener elementos de la página
const pantalla = document.getElementById('pantalla');
const botones = document.getElementById('botones');

// Agregar listener a los botones
botones.addEventListener('click', e => {
  // Obtener el contenido del botón pulsado
  const boton = e.target.innerText;

  // Actualizar la pantalla en función del botón pulsado
  switch (boton) {
    case 'CE':
      pantalla.value = '';
      break;
    case '=':
      pantalla.value = eval(pantalla.value);
      break;
    default:
      pantalla.value += boton;
      break;
  }
});
