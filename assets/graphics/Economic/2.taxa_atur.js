document.addEventListener('DOMContentLoaded', function () {
const ctx = document.getElementById('graficAturInversio').getContext('2d');
new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Barcelona',
                data: [
                    { x: 502.94, y: 4.09, label: 'Barcelonès' },
                    { x: 133.35, y: 3.91, label: 'Baix Llobregat' },
                    { x: 125.86, y: 4.57, label: 'Vallès Occidental' },
                    { x: 73.37, y: 4.42, label: 'Vallès Oriental' }
                ],
                backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
                borderColor: 'rgba(249, 115, 22, 1)',
                borderWidth: 1,
                pointRadius: 5
            },
            {
                label: 'Girona',
                data: [
                    { x: 33.95, y: 4.06, label: 'Gironès' },
                    { x: 27.26, y: 3.71, label: 'Alt Empordà' },
                    { x: 8.24, y: 3.07, label: 'Baix Empordà' },
                    { x: 5.72, y: 3.20, label: 'Garrotxa' }
                ],
                backgroundColor: 'rgba(30, 64, 175, 0.6)', // #1E40AF
                borderColor: 'rgba(30, 64, 175, 1)',
                borderWidth: 1,
                pointRadius: 5
            },
            {
                label: 'Lleida',
                data: [
                    { x: 36.12, y: 4.04, label: 'Segrià' },
                    { x: 14.96, y: 4.01, label: 'Noguera' },
                    { x: 12.82, y: 3.81, label: 'Urgell' },
                    { x: 2.91, y: 3.41, label: 'Pla d\'Urgell' }
                ],
                backgroundColor: 'rgba(5, 150, 105, 0.6)', // #059669
                borderColor: 'rgba(5, 150, 105, 1)',
                borderWidth: 1,
                pointRadius: 5
            },
            {
                label: 'Tarragona',
                data: [
                    { x: 43.42, y: 4.31, label: 'Tarragonès' },
                    { x: 17.11, y: 4.66, label: 'Baix Camp' },
                    { x: 18.74, y: 4.38, label: 'Baix Ebre' },
                    { x: 6.87, y: 4.56, label: 'Montsià' }
                ],
                backgroundColor: 'rgba(220, 38, 38, 0.6)', // #DC2626
                borderColor: 'rgba(220, 38, 38, 1)',
                borderWidth: 1,
                pointRadius: 5
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: { display: true, text: 'Inversió total (milions d’euros)' },
                min: 0,
                max: 600
            },
            y: {
                title: { display: true, text: 'Taxa d\'atur proxy (%)' },
                min: 0,
                max: 6
            }
        },
        plugins: {
            legend: { display: true },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.raw.label}: Inversió ${context.raw.x} M€, Taxa d'atur ${context.raw.y}%`;
                    }
                }
            },
            datalabels: {
                display: true,
                align: 'top',
                offset: 4,
                font: {
                    size: 10
                },
                formatter: function(value) {
                    return value.label;
                }
            }
        },
        animation: { duration: 1000, easing: 'easeOutQuart' }
    },
    plugins: [ChartDataLabels]
});
});