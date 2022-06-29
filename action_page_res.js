function set_answer( prefix, number, option ){

    _ANSWERS[ prefix.toUpperCase() ][ (number - 1) ] = option;

    // DEBUG
    console.log( 
        "Selected answer", 
        prefix.toUpperCase(), number, 
        _ANSWERS[prefix.toUpperCase()][number-1] 
        );

}