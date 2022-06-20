/** DEPENDENDS ON lib_lab.js */

// Adds events to elements regarding whatever callbacks
function add_event_to( classes, events, callbacks ) {

    for( var i = 0; i < classes.length; i++ ){
    
        var input_list = this.document.getElementsByClassName( 
            classes[i] 
        );

        Array.prototype.filter.call( input_list, function( e ){

            e.addEventListener( events[i], callbacks[i] );

        });
    
    }

}

/** Some clarification
 * 
 * classes: lists the classes for add_event_to fn
 * events: lists the events for add_event_to fn
 * callbacks: lists the callbacks for add_event_to fn
 * 
 * ranger - for input sliders
 * percon - for input of permeability and conductivity defaults
 * concen - for input concentration defaults
 * 
 */

 var classes = {

    ranger: ["ranger input"],

    percon: ["state input", "state input"],

    concen: ["concentration input", "concentration input"]

};

var events = {

    ranger: ["change"],

    percon: ["change", "click"],

    concen: ["change", "click"]

};

var callbacks = {

    ranger: function(e){

        update_variables();

        calc_nernst();
        calc_condutividade();
        calc_goldman();

        //update_variables();

        // Set the graph to [K]e x EK
        dataset_labels = create_x( val.CeK );
        dataset_points = create_y( dataset_labels, 1, val.CiK );

        console.table( "labels", dataset_labels );
        console.table( "datapoints", dataset_points );
        
        // Destroy graph to build graph
        cenaena.destroy();
        
        // Draws the graph of correlations
        graph_draw();

    },

    percon: function(e){

        if( e.target.className ){
            
            var state = e.target.className.replace( 
                "default state input ", "" 
            );
    
            set_state( state );

        } else console.log( "default state input NOT OK" );

        update_variables();

        calc_nernst();
        calc_condutividade();
        calc_goldman();

    },

    concen: function(e){

        if( e.target.className ){
            
            var state = e.target.className.replace( 
                "default concentration input ", "" 
            );

            set_state( state );

        } else console.log( "default concentration input NOT OK" );

        update_variables();
    
        calc_nernst();
        calc_condutividade();
        calc_goldman();

    }

};