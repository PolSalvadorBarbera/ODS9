
const barChartCtx = document.getElementById('barChart').getContext('2d');
new Chart(barChartCtx, {
    type: 'bar',
    data: {
    labels: ['Vallès Occidental', 'Baix Llobregat', 'Barcelonès', 'Bages', 'Vallès Oriental', 'Maresme', 'Tarragonès', 'Baix Camp', 'Anoia', 'Osona'],
    datasets: [
        {
        label: 'VAB industrial (M€)',
        data: [7218.0, 6867.1, 6500.0, 1800.0, 1700.0, 1600.0, 1500.0, 1400.0, 1300.0, 1200.0],
        backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
        yAxisID: 'y'
        },
        {
        label: 'Taxa d\'atur (%)',
        data: [4.57, 3.91, 4.15, 4.30, 4.20, 4.50, 5.22, 5.10, 5.14, 4.13],
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
        title: { display: true, text: 'VAB industrial (M€)' },
        position: 'left',
        min: 0,
        max: 8000
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
            return `${context.dataset.label}: ${context.raw}`;
            }
        }
        }
    },
    animation: { duration: 1000, easing: 'easeOutQuart' }
    }
});
