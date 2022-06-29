function set_answer( prefix, number, option ){

    _ANSWERS[ prefix.toUpperCase() ][ (number - 1) ] = option;

    // DEBUG
    console.log( 
        "Selected answer", 
        prefix.toUpperCase(), number, 
        _ANSWERS[prefix.toUpperCase()][number-1] 
        );

}

function populate_options( prefix ){

    // DEBUG
    console.log( 'populate_options()' );

    var qty_questions = window[ prefix + '_entries' ]['q_num'].length;

    for(var i = 0; i < qty_questions; i++ ){ 
        
        // DEBUG
        console.log('for');

        var answer = _ANSWERS[ prefix.toUpperCase() ][ i ];

        if ( answer !== undefined){

            // DEBUG
            console.log('if');

            var id = prefix + "_" + (i+1) + "_" + answer;

            // DEBUG
            console.log('id', id);

            document.querySelectorAll( ".options.box #" + id )[0].checked = true;

        }

    }

}