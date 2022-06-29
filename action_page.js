// List of possible pages
var page_list = [
    "introducao", 
    "objetivos", 
    "pre-teste", 
    "experimento", 
    "pos-teste",
    "resultados"
];

// Loads the desired page and 
// makes different actions depending on the page
function load_page( file_name ){

    fetch(  "page_" + file_name + ".html", 
            null, "GET", true, act_content 
        );

    // Cleans MathJax
    MathJax.typesetClear();

    // Draws LATEX with MathJax after an AJAX async page load
    MathJax.typeset();
    
    // Case the loaded page is the "Pré-teste" page:
    if ( file_name.localeCompare( 'pre-teste' ) == 0 ){

        console.log( ":: pre-test loading..." );

        gen_pre( "pre" );

        console.log( ":: pre-test OK!" );

    }
    
    // Case the loaded page is the "Pós-teste" page:
    if ( file_name.localeCompare( 'pos-teste' ) == 0 ){

        console.log( ":: pos-test loading..." );

        gen_pos("pos");

        console.log( ":: pos-test OK!" );

    }
    
    // Case the loaded page is the "Resultados" page:
    if ( file_name.localeCompare( 'resultados' ) == 0 ){

        console.log( ":: resultados loading..." );

        console.log( ":: resultados OK!" );

    }

    // Case the loaded page is the "Experimentos" page:
    if( file_name.localeCompare( "experimento" ) == 0 ) {

        console.log( "filename", file_name, "equal" );

        // Updates variables holding values for calculation
        update_variables();

        // Add action to elements events
        add_event_to( classes.ranger, events.ranger, [callbacks.ranger] );

        add_event_to( classes.percon, events.percon, 
            [callbacks.percon, callbacks.percon] 
            );

        add_event_to( classes.concen, events.concen, 
            [callbacks.concen, callbacks.concen] 
            );

        // Updates variables holding values for calculation
        update_variables();

        // Calculates and (internally) updates variables
        calc_nernst();
        calc_condutividade();
        calc_goldman(); 
        
        // Updates variables holding values for calculation
        update_variables();
        
        // Draws LATEX with MathJax after an AJAX async page load
        MathJax.typeset();

        // Bubbles the values calculated
        set_bubble(); 

        // DEBUG
        console.table( "labels", dataset_labels );
        console.table( "datapoints", dataset_points );
        
        // Draws the graph of correlations
        graph_draw();
    
    }

}

// Use hash to load a page
function hash_page_loader(){

    let hash = location.hash.replace('#','');

    console.log( "HASH: ", hash );

    if( page_list.includes( hash ) ) load_page( hash );
    else load_page( "introducao" );

}