
document.addEventListener('DOMContentLoaded', function () {
  const barChartCtxOcup = document.getElementById('barChartOcupacio').getContext('2d');
  new Chart(barChartCtxOcup, {
    type: 'bar',
    data: {
      labels: ['Segarra', 'Garrotxa', 'Conca de Barberà', 'Osona', 'Alt Camp', 'Anoia', 'Berguedà', 'Vallès Oriental', 'Bages', 'Baix Llobregat'],
      datasets: [
        {
          label: 'Ocupació industrial (%)',
          data: [37.72, 33.77, 31.45, 29.90, 27.73, 25.45, 24.50, 20.10, 19.80, 15.14],
          backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
          yAxisID: 'y'
        },
        {
          label: 'Taxa d\'atur (%)',
          data: [2.78, 3.20, 3.50, 4.13, 4.79, 5.14, 4.50, 4.20, 4.30, 3.91],
          type: 'line',
          borderColor: 'rgba(30, 64, 175, 1)', // #1E40AF
          backgroundColor: 'rgba(30, 64, 175, 1)',
          yAxisID: 'y1',
          fill: false,
          pointRadius: 5
        }
      ]
    },
    options: {
      scales: {
        y: {
          title: { display: true, text: 'Ocupació industrial (%)' },
          position: 'left',
          min: 0,
          max: 50
        },
        y1: {
          title: { display: true, text: 'Taxa d\'atur (%)' },
          position: 'right',
          min: 0,
          max: 8,
          grid: { display: false }
        },
        x: {
          title: { display: true, text: 'Comarques' }
        }
      },
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw}%`;
            }
          }
        }
      },
      animation: { duration: 1000, easing: 'easeOutQuart' }
    }
  });
});
