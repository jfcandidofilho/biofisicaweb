/** DEPENDENDS ON chart.js (CDN) */

// Default X-Axis
var dataset_labels = [
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

// Default Y-Axis
var dataset_points = [

    [-193.74, -151.10, -132.74, -122.00, -114.38, -108.47, -103.64, -99.55, -96.02, -92.90, -90.10, -87.58, -85.27]

];

// Creates Labels (X-axis)
function create_x( c ){

    var dataset = [    
            [(c - 3)], [(c - 2.5)], [(c - 2)], [(c - 1.5)], [(c - 1)], [(c - 0.5)], 
            [(c)], 
            [(c + 0.5)], [(c + 1)], [(c + 1.5)], [(c + 2)], [(c + 2.5)], [(c + 3)] 
        ];

    if( dataset[0][0] > 0 ){

        for( var i = 0; i < dataset.length; i++ ) {
        
            dataset[i][0] = round_nasty( dataset[i][0], 0.5 );

        }

    } else while ( dataset[0][0] <= 0 ){

            for( var i = 0; i < dataset.length; i++ ) {
            
                dataset[i][0] = round_nasty( dataset[i][0], 0.5 );

            }

        }

    console.log("create_x dataset : ");
    console.table( dataset );

    return dataset;

}

// Creates Datapoints (Y-axis)
function create_y( x, valence, c_internal ){

    var dataset = [];

    for( var i = 0; i < x.length; i++ ){

        dataset.push( nernst( valence, c_internal, x[i] ) );

    }

    return [ dataset ];

}

function refresh_graph(){

    // Set the graph to [ion]e x E(ion)
    dataset_labels = create_x( _VAL['Ce' + _ION] );
    dataset_points = create_y( dataset_labels, 1, _VAL['Ci' + _ION] );

    // DEBUG
    console.table( "labels", dataset_labels );
    console.table( "datapoints", dataset_points );

    // Destroy graph to build graph
    _GRAPH.destroy();

    // Draws the graph of correlations
    graph_draw( _ION );

}

function graph_draw( ion = "K" ) {

    var ctx = document.getElementById('graph_canva');

    if( ctx != null ) { ctx = ctx.getContext('2d'); }
    else { return 0; }

    // Cor azul: rgb(54, 162, 235)

    const data = {
        labels: dataset_labels,
        datasets: [{
            label: '[' + ion + ']e x E' + ion,
            data: dataset_points[0],
            borderColor: 'rgb(237, 73, 27)',
            fill: false,
            tension: 0.4
        }]
    };

    
    _GRAPH = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {

                zoom: {
                    pan: {
                        enabled: true,
                        overScaleMode: 'xy'
                    },
                    zoom: {
                        wheel: {
                        enabled: true,
                        },
                        mode: 'xy'
                    }
                },

                title: {
                    display: true,
                    text: 'Interpolação cúbica das concentrações externas e do potencial do íon ' + ion
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
                        text: '[' + ion + ']e (mM)'
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
                        text: 'E' + ion + ' (mV)'
                    }
                }
            }
        },
    });

}