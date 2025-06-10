document.addEventListener('DOMContentLoaded', function () {
    const consumPibChartCtx = document.getElementById('consumPibChart').getContext('2d');
    new Chart(consumPibChartCtx, {
    type: 'scatter',
    data: {
        datasets: [
        {
            label: 'Anys',
            data: [
            { x: 5000, y: -5, r: 10, label: '2008' },
            { x: 4200, y: -8, r: 12, label: '2020' },
            { x: 4800, y: 2, r: 8, label: '2004' },
            { x: 4600, y: 1, r: 8, label: '2010' },
            { x: 4400, y: 3, r: 8, label: '2016' }
            ],
            backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
            borderColor: 'rgba(249, 115, 22, 1)',
            borderWidth: 1,
            pointHoverRadius: 12
        },
        {
            label: 'Línia de referència',
            data: [
            { x: 4000, y: -10 },
            { x: 5000, y: 5 }
            ],
            type: 'line',
            borderColor: 'rgba(30, 64, 175, 1)', // #1E40AF
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        }
        ]
    },
    options: {
        scales: {
        x: {
            title: { display: true, text: 'Consum energètic industrial (ktep)' },
            min: 3500,
            max: 5500
        },
        y: {
            title: { display: true, text: 'Variació PIB industrial (%)' },
            min: -10,
            max: 10
        }
        },
        plugins: {
        legend: { display: true },
        tooltip: {
            callbacks: {
            label: function(context) {
                return `${context.raw.label}: Consum ${context.raw.x} ktep, PIB ${context.raw.y}%`;
            }
            }
        }
        },
        animation: { duration: 1000, easing: 'easeOutQuart' }
    }
    });
});
