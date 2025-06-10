document.addEventListener('DOMContentLoaded', function () {
const ctx = document.getElementById('graficTendenciaInversio').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
            {
                label: 'Barcelonès (Barcelona)',
                data: [335.94, 1003.33, 406.18, 511.95, 486.82, 364.15, 254.49, 307.83, 310.46, 321.73, 399.32, 430.90, 502.94],
                borderColor: '#F97316',
                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                fill: true
            },
            {
                label: 'Gironès (Girona)',
                data: [36.39, 27.76, 10.76, 15.78, 13.14, 12.41, 15.57, 16.45, 14.68, 17.02, 25.69, 37.22, 33.95],
                borderColor: '#1E40AF',
                backgroundColor: 'rgba(30, 64, 175, 0.2)',
                fill: true
            },
            {
                label: 'Segrià (Lleida)',
                data: [64.62, 126.05, 89.99, 50.45, 27.30, 14.87, 12.92, 12.67, 16.20, 20.18, 42.46, 34.40, 36.12],
                borderColor: '#059669',
                backgroundColor: 'rgba(5, 150, 105, 0.2)',
                fill: true
            },
            {
                label: 'Tarragonès (Tarragona)',
                data: [38.07, 53.62, 35.02, 19.67, 14.98, 17.24, 24.75, 27.98, 19.46, 23.74, 27.85, 46.75, 43.42],
                borderColor: '#DC2626',
                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                fill: true
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: { display: true, text: 'Any' }
            },
            y: {
                title: { display: true, text: 'Inversió total (milions d’euros)' },
                min: 0,
                max: 1200
            }
        },
        plugins: {
            legend: { display: true },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.parsed.y} M€`;
                    }
                }
            }
        },
        animation: { duration: 1000, easing: 'easeOutQuart' }
    }
});
});