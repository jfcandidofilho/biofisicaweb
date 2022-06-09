// List of possible pages
var page_list = [
    "introducao", 
    "objetivos", 
    "pre-teste", 
    "experimento", 
    "pos-teste" 
];

// Loads the desired page
function load_page( file_name ){

    fetch( file_name + ".html", null, "GET", true, act_content );

    // Case the loaded page is the "Introdução" page:
    if( file_name.localeCompare( "introducao" ) == 0 ) {

        console.log("intro");

        // Cleans MathJax
        MathJax.typesetClear();

        // Draws LATEX with MathJax after an AJAX async page load
        MathJax.typeset();

        console.log("intro ok");

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
        
        // Draws LATEX with MathJax after an AJAX async page load
        MathJax.typeset();

        // Bubbles the values calculated
        set_bubble();

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