document.getElementById('formReserva').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const hora = document.getElementById('hora').value;
  const dia = document.getElementById('dia').value;

  document.getElementById('confirmacionReserva').innerHTML =
    `<p><strong>${nombre}</strong>, tu visita fue reservada para el <strong>${dia}</strong> a las <strong>${hora}</strong>.</p>`;
});
