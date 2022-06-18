/** DEPENDENDS ON chart.js (CDN) */

function graph_draw() {

    var ctx = document.getElementById('graph_canva');

    if( ctx != null ) ctx = ctx.getContext('2d');
    else return 0;

    const labels = [
        [0.1], 
        [0.5], 
        [1], 
        [1.5], 
        [2], 
        [2.5], 
        [3], 
        [3.5], 
        [4], 
        [4.5], 
        [5], 
        [5.5], 
        [6]
    ];

    const datapoints = [

        [-193.74, -151.10, -132.74, -122.00, -114.38, -108.47, -103.64, -99.55, -96.02, -92.90, -90.10, -87.58, -85.27]

    ];

    const data = {
        labels: labels,
        datasets: [{
            label: '[K]e x Ek',
            data: datapoints[0],
            borderColor: 'rgb(54, 162, 235)',
            fill: false,
            tension: 0.4
        }]
    };

    const cenaena = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Interpolação cúbica das concentrações externas e potencial'
                },
                tooltip: {
                    callbacks: {

                        title: function( data ){

                            return data[0].dataset.label;

                        },

                        label: function( data ){

                            var label = data.label.split(',');
                            var index = data.datasetIndex;

                            return  "x: " + label[index] + "\n" +
                                    "y: " + data.formattedValue;

                        }

                    }
                }
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '[K]e (mM)'
                    },
                    ticks: {
                        callback: function (label_list, index) {
                            var lab = this.getLabelForValue(label_list);
                            return lab[0];
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Ek (mV)'
                    },
                    suggestedMin: -200,
                    suggestedMax: 70
                }
            }
        },
    });

}