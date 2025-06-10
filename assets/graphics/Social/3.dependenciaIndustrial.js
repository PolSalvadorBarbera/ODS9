
const industryChartCtx = document.getElementById('industryDependenceChart').getContext('2d');
new Chart(industryChartCtx, {
    type: 'scatter',
    data: {
    datasets: [
        {
        label: 'Comarques',
        data: [
            { x: 12.34, y: 4.57, label: 'Vallès Occidental' },
            { x: 10.78, y: 3.91, label: 'Baix Llobregat' },
            { x: 18.20, y: 6.40, label: 'Bages' },
            { x: 25.00, y: 5.90, label: 'Alt Camp' },
            { x: 30.00, y: 7.10, label: 'Conca de Barberà' }
        ],
        backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 10
        },
        {
        label: 'Línia de regressió',
        data: [
            { x: 0, y: 3.5 },
            { x: 35, y: 7.5 }
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
        title: { display: true, text: "% ocupació industrial" },
        min: 0,
        max: 35
        },
        y: {
        title: { display: true, text: "Taxa d'atur (%)" },
        min: 0,
        max: 10
        }
    },
    plugins: {
        legend: { display: true },
        tooltip: {
        callbacks: {
            label: function(context) {
            return `${context.raw.label}: ${context.raw.x}% ocupació, ${context.raw.y}% atur`;
            }
        }
        }
    },
    animation: { duration: 1000, easing: 'easeOutQuart' }
    }
});
