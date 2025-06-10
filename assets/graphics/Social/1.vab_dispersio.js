
const scatterChartCtx = document.getElementById('scatterChart').getContext('2d');
new Chart(scatterChartCtx, {
    type: 'scatter',
    data: {
    datasets: [
        {
        label: 'Comarques',
        data: [
            { x: 7.52, y: 4.57, r: 20, label: 'Vallès Occidental' },
            { x: 8.09, y: 3.91, r: 18, label: 'Baix Llobregat' },
            { x: 23.60, y: 2.78, r: 5, label: 'Segarra' },
            { x: 38.00, y: 4.23, r: 3, label: 'Ribera d’Ebre' },
            { x: 5.78, y: 6.88, r: 4, label: 'Garrigues' }
        ],
        backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 1,
        pointHoverRadius: 12
        },
        {
        label: 'Línia de regressió',
        data: [
            { x: 0, y: 5.5 },
            { x: 40, y: 4.0 }
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
        title: { display: true, text: "VAB industrial per càpita (milers d'euros)" },
        min: 0,
        max: 45
        },
        y: {
        title: { display: true, text: "Taxa d'atur (%)" },
        min: 0,
        max: 8
        }
    },
    plugins: {
        legend: { display: true },
        tooltip: {
        callbacks: {
            label: function(context) {
            return `${context.raw.label}: VAB ${context.raw.x} milers €, Atur ${context.raw.y}%`;
            }
        }
        }
    },
    animation: { duration: 1000, easing: 'easeOutQuart' }
    }
});
