document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('graficComplet').getContext('2d');
            const chart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Barcelona',
                            data: [
                                { x: 502.94, y: 6612.3, r: 20, label: 'Barcelonès' },
                                { x: 133.35, y: 6867.1, r: 15, label: 'Baix Llobregat' },
                                { x: 125.86, y: 7218.0, r: 10, label: 'Vallès Occidental' },
                                { x: 73.37, y: 4717.5, r: 8, label: 'Vallès Oriental' }
                            ],
                            backgroundColor: 'rgba(249, 115, 22, 0.6)', // #F97316
                            borderColor: 'rgba(249, 115, 22, 1)',
                            borderWidth: 1,
                            pointHoverRadius: 12
                        },
                        {
                            label: 'Girona',
                            data: [
                                { x: 33.95, y: 1235.9, r: 20, label: 'Gironès' },
                                { x: 27.26, y: 431.5, r: 15, label: 'Alt Empordà' },
                                { x: 8.24, y: 262.4, r: 10, label: 'Baix Empordà' },
                                { x: 5.72, y: 812.9, r: 8, label: 'Garrotxa' }
                            ],
                            backgroundColor: 'rgba(30, 64, 175, 0.6)', // #1E40AF
                            borderColor: 'rgba(30, 64, 175, 1)',
                            borderWidth: 1,
                            pointHoverRadius: 12
                        },
                        {
                            label: 'Lleida',
                            data: [
                                { x: 36.12, y: 710.3, r: 20, label: 'Segrià' },
                                { x: 14.96, y: 180.5, r: 15, label: 'Noguera' },
                                { x: 12.82, y: 344.3, r: 10, label: 'Urgell' },
                                { x: 2.91, y: 462.5, r: 8, label: 'Pla d\'Urgell' }
                            ],
                            backgroundColor: 'rgba(5, 150, 105, 0.6)', // #059669
                            borderColor: 'rgba(5, 150, 105, 1)',
                            borderWidth: 1,
                            pointHoverRadius: 12
                        },
                        {
                            label: 'Tarragona',
                            data: [
                                { x: 43.42, y: 2534.2, r: 20, label: 'Tarragonès' },
                                { x: 17.11, y: 1238.4, r: 15, label: 'Baix Camp' },
                                { x: 18.74, y: 340.5, r: 10, label: 'Baix Ebre' },
                                { x: 6.87, y: 278.0, r: 8, label: 'Montsià' }
                            ],
                            backgroundColor: 'rgba(220, 38, 38, 0.6)', // #DC2626
                            borderColor: 'rgba(220, 38, 38, 1)',
                            borderWidth: 1,
                            pointHoverRadius: 12
                        },
                        {
                            label: 'Línia de referència',
                            data: [
                                { x: 0, y: 0 },
                                { x: 800, y: 8000 }
                            ],
                            type: 'line',
                            borderColor: 'rgba(0, 0, 0, 1)', // Negre
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 0
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
                            title: { display: true, text: 'VAB total (milions d’euros)' },
                            min: 0,
                            max: 8000
                        }
                    },
                    plugins: {
                        legend: { display: true },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.raw.label}: Inversió ${context.raw.x} M€, VAB ${context.raw.y} M€`;
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
                plugins: [ChartDataLabels] // Necessari per mostrar etiquetes dins del gràfic
            });
        });