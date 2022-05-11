function graph_draw() {

    const ctx = document.getElementById('cekek').getContext('2d');

    const labels = [
        [0.1,100,60], 
        [0.5,104,64], 
        [1,109,69], 
        [1.5,114,74], 
        [2,119,79], 
        [2.5,124,84], 
        [3,129,89], 
        [3.5,134,94], 
        [4,139,99], 
        [4.5,144,104], 
        [5,149,109], 
        [5.5,154,114], 
        [6,159,119]
    ];

    const datapoints = [

        [-193.74, -151.10, -132.74, -122.00, -114.38, -108.47, -103.64, -99.55, -96.02, -92.90, -90.10, -87.58, -85.27],

        [50.26, 51.30, 52.54, 53.73, 54.87, 55.96, 57, 58.01, 58.98, 59.92, 60.82, 61.70, 62.54],

        [-65.83, -67.54, -69.53, -71.39, -73.12, -74.74, -76.28, -77.72, -79.10, -80.40, -81.65, -82.83, -83.97]

    ];

    /*const labels = [

        [0.1, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6],

        [100, 104, 109, 114, 119, 124, 129, 134, 139, 144, 149, 154, 159],
        
        [60, 64, 69, 74, 79, 84, 89, 94, 99, 104, 109, 114, 119]

    ];*/



    // const datapoints = [

    //     [-193.74, -151.10, -132.74, -122.00, -114.38, -108.47, -103.64, -99.55, -96.02, -92.90, -90.10, -87.58, -85.27],

    //     [50.26, 51.30, 52.54, 53.73, 54.87, 55.96, 57, 58.01, 58.98, 59.92, 60.82, 61.70, 62.54],

    //     [-65.83, -67.54, -69.53, -71.39, -73.12, -74.74, -76.28, -77.72, -79.10, -80.40, -81.65, -82.83, -83.97]

    // ];

    const data = {
        labels: labels,
        datasets: [{
            label: '[K]e x Ek',
            data: datapoints[0],
            borderColor: 'rgb(54, 162, 235)',
            fill: false,
            tension: 0.4
        },
        {
            label: '[Na]e x ENa',
            data: datapoints[1],
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            tension: 0.4
        },
        {
            label: '[Cl]e x ECl',
            data: datapoints[2],
            borderColor: 'rgb(75, 192, 192)',
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
                    text: 'Interpolação cúbica das concentrações de externas potássio e potencial do potássio'
                },
                tooltip: {
                    callbacks: {

                        title: function( data ){

                            //console.log("title");
                            //console.table(data);

                            return data[0].dataset.label;

                        },

                        label: function( data ){

                            //console.log("label");
                            //console.table(data);

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
                        text: '[K]e'
                    },
                    ticks: {
                        callback: function (label_list, index) {
                            var lab = this.getLabelForValue(label_list);
                            return lab[0];
                        }
                    }
                },
                x2: {
                    display: true,
                    title: {
                        display: true,
                        text: '[Na]e'
                    },
                    ticks: {
                        callback: function (label_list, index) {
                            var lab = this.getLabelForValue(label_list);
                            return lab[1];
                        }
                    }
                },
                x3: {
                    display: true,
                    title: {
                        display: true,
                        text: '[Cl]e'
                    },
                    ticks: {
                        callback: function (label_list, index) {
                            var lab = this.getLabelForValue(label_list);
                            return lab[2];
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