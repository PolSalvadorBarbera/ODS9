document.addEventListener('DOMContentLoaded', function () {
    const lineChartCtx = document.getElementById('emissionsLineChart').getContext('2d');
    new Chart(lineChartCtx, {
    type: 'line',
    data: {
        labels: ['2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020'],
        datasets: [
        {
            label: 'Barcelona',
            data: [4800, 4700, 4600, 4500, 4400, 4300, 4200, 4100, 4000, 3900],
            borderColor: 'rgba(249, 115, 22, 1)', // #F97316
            backgroundColor: 'rgba(249, 115, 22, 0.2)',
            fill: false,
            pointRadius: 5
        },
        {
            label: 'Tarragona',
            data: [3000, 2950, 2900, 2850, 2800, 2750, 2700, 2650, 2600, 2550],
            borderColor: 'rgba(30, 64, 175, 1)', // #1E40AF
            backgroundColor: 'rgba(30, 64, 175, 0.2)',
            fill: false,
            pointRadius: 5
        },
        {
            label: 'Girona',
            data: [1600, 1580, 1560, 1540, 1520, 1500, 1480, 1460, 1440, 1420],
            borderColor: 'rgba(34, 197, 94, 1)', // Verd
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            fill: false,
            pointRadius: 5
        },
        {
            label: 'Lleida',
            data: [1300, 1280, 1260, 1240, 1220, 1200, 1180, 1160, 1140, 1120],
            borderColor: 'rgba(234, 179, 8, 1)', // Groc
            backgroundColor: 'rgba(234, 179, 8, 0.2)',
            fill: false,
            pointRadius: 5
        }
        ]
    },
    options: {
        scales: {
        x: {
            title: { display: true, text: 'Any' }
        },
        y: {
            title: { display: true, text: 'Consum energètic (ktep)' },
            min: 0,
            max: 6000
        }
        },
        plugins: {
        legend: { display: true },
        tooltip: {
            callbacks: {
            label: function(context) {
                return `${context.dataset.label}: ${context.raw} ktep`;
            }
            }
        }
        },
        animation: { duration: 1000, easing: 'easeOutQuart' }
    }
    });
});
