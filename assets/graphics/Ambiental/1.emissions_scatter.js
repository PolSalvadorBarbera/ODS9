document.addEventListener('DOMContentLoaded', function () {
    const scatterChartCtx = document.getElementById('emissionsScatterChart').getContext('2d');
    new Chart(scatterChartCtx, {
    type: 'scatter',
    data: {
        datasets: [
        {
            label: 'Províncies',
            data: [
            { x: 4500, y: 450, r: 20, label: 'Barcelona' },
            { x: 2800, y: 400, r: 15, label: 'Tarragona' },
            { x: 1500, y: 300, r: 10, label: 'Girona' },
            { x: 1200, y: 250, r: 8, label: 'Lleida' }
            ],
            backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
            borderColor: 'rgba(249, 115, 22, 1)',
            borderWidth: 1,
            pointHoverRadius: 12
        },
        {
            label: 'Línia de referència',
            data: [
            { x: 0, y: 0 },
            { x: 5000, y: 500 }
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
            title: { display: true, text: 'Consum energètic no renovable (ktep)' },
            min: 0,
            max: 6000
        },
        y: {
            title: { display: true, text: 'Consum energètic renovable (ktep)' },
            min: 0,
            max: 600
        }
        },
        plugins: {
        legend: { display: true },
        tooltip: {
            callbacks: {
            label: function(context) {
                return `${context.raw.label}: No renovable ${context.raw.x} ktep, Renovable ${context.raw.y} ktep`;
            }
            }
        }
        },
        animation: { duration: 1000, easing: 'easeOutQuart' }
    }
    });
});
