// Sets ans stores the question's answer's value upon the user click
function set_answer( prefix, number, option ){

    // DEBUG
    console.log( "set_answer()" );

    console.log( prefix );

    _ANSWERS[ prefix.toUpperCase() ][ (number - 1) ] = option;

    // DEBUG
    console.log( 
        "Selected answer", 
        prefix.toUpperCase(), number, 
        _ANSWERS[prefix.toUpperCase()][number-1] 
        );

}

// Populates the test with the answers selected by the user
function populate_options( prefix ){

    // DEBUG
    console.log( 'populate_options()' );

    var qty_questions = window[ prefix + '_entries' ][q_num].length;

    for(var i = 0; i < qty_questions; i++ ){ 
        
        // DEBUG
        console.log('for', i);

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

// Verify the answers of the user - if any
function check_answers(){

    // DEBUG
    console.log( "check_answers()" );

    var qty_questions = window[ 'pre_entries' ][q_num].length;

    for( var i = 0; i < qty_questions; i++ ){

        if( _ANSWERS.PRE[ i ] !== undefined ){
            if( 
                _ANSWERS.PRE[ i ].localeCompare( pre_entries[correct][ i ] ) == 0 
            ){

                document.getElementById("aq" + (i + 1)).innerHTML = "Certo!";
                
            } else {

                document.getElementById("aq" + (i + 1)).innerHTML = "Errado! Resposta correta: " + pre_entries[correct][ i ];

            }
        } else {

            document.getElementById("aq" + (i + 1)).innerHTML = "Alternativa não selecionada";

        }

        if( _ANSWERS.POS[ i ] !== undefined ){
            if( 
                _ANSWERS.POS[ i ].localeCompare( pos_entries[correct][ i ] ) == 0 
            ){

                document.getElementById("bq" + (i + 1)).innerHTML = "Certo!";
                
            } else {

                document.getElementById("bq" + (i + 1)).innerHTML = "Errado! Resposta correta: " + pos_entries[correct][ i ];

            }
        } else {

            document.getElementById("bq" + (i + 1)).innerHTML = "Alternativa não selecionada";

        }

    }

}

// Generates each test against a template
function gen_tests( prefix ){

    // DEBUG
    console.log( "gen_tests()" );

    for( var i = 0; i < pre_entries[q_num].length; i++ ){
    
        console.log( "for", i );

        var data = [

            window[prefix + "_entries"][q_num][i],
            window[prefix + "_entries"][q_text][i],
            [
                window[prefix + "_entries"][ans][i][0],
                window[prefix + "_entries"][ans][i][1],
                window[prefix + "_entries"][ans][i][2],
                window[prefix + "_entries"][ans][i][3]
            ]

        ]

        act_tests( template_tests( prefix, data ) );
    
    }

}