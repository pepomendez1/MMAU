const ctx = document.getElementById('graficoAfluencia').getContext('2d');
const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [{
      label: 'Visitantes por día (estimado)',
      data: [80, 60, 70, 90, 150, 300, 250],
      backgroundColor: '#d05421'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad de personas'
        }
      }
    }
  }
});
// Visitantes por d�a (ya lo ten�as)
const ctx1 = document.getElementById('graficoAfluencia').getContext('2d');
const grafico1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [{
      label: 'Visitantes por día (estimado)',
      data: [80, 60, 70, 90, 150, 300, 250],
      backgroundColor: '#3f88c5'
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Nuevos: visitantes por hora
const ctx2 = document.getElementById('graficoHoras').getContext('2d');
const grafico2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
    datasets: [{
      label: 'Promedio por hora',
      data: [20, 35, 60, 50, 80, 120, 90],
      borderColor: '#8f9c67',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
let totalVisitantes = 0;
let visitasPorHora = {
  "8:00": 0, "10:00": 0, "12:00": 0, "14:00": 0, "16:00": 0, "18:00": 0, "20:00": 0
};

function obtenerHoraActual() {
  const h = new Date().getHours();
  if (h < 9) return "8:00";
  else if (h < 11) return "10:00";
  else if (h < 13) return "12:00";
  else if (h < 15) return "14:00";
  else if (h < 17) return "16:00";
  else if (h < 19) return "18:00";
  else return "20:00";
}

function sumarVisitante() {
  totalVisitantes++;
  document.getElementById('contador').textContent = totalVisitantes;

  const hora = obtenerHoraActual();
  visitasPorHora[hora]++;
  actualizarGraficoManual();
}

// Crear el gr�fico de visitas manuales
const ctxManual = document.getElementById('graficoManual').getContext('2d');
const graficoManual = new Chart(ctxManual, {
  type: 'bar',
  data: {
    labels: Object.keys(visitasPorHora),
    datasets: [{
      label: 'Visitantes manuales por hora',
      data: Object.values(visitasPorHora),
      backgroundColor: '#009688'
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Actualiza el gr�fico cuando se suma un visitante
function actualizarGraficoManual() {
  graficoManual.data.datasets[0].data = Object.values(visitasPorHora);
  graficoManual.update();
}
