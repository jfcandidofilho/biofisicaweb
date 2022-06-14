// Variables list
var val = null;

/**
 * 
 * DEPRECATED
 * Does not work exactly as imagined because it almost never
 * is true
 * 
 * USING '?.' (Optional Chaining)
 * By the use of polyfill
 * 
 * "..." in window
 * verifies if '...' was created but not exactly defined
 * meaning the structure is there but not the values
 * something like that...
 * 
 */

// Updates variables
function update_variables() {

    var ranger = document.getElementsByClassName("ranger input");
    
    val = {

        pK      :   parseFloat( nullishRet( 
                        optionalChain( ranger, 0 ), '1' ).value ),
        CiK     :   parseFloat( nullishRet( 
                        optionalChain( ranger, 1 ), '1' ).value ),
        CeK     :   parseFloat( nullishRet( 
                        optionalChain( ranger, 2 ), '1' ).value ),
        gK      :   parseFloat( nullishRet( 
                        optionalChain( ranger, 3 ), '1' ).value ),
        
        pNa     :   parseFloat( nullishRet( 
                        optionalChain( ranger, 4 ), '1' ).value ),
        CiNa    :   parseFloat( nullishRet( 
                        optionalChain( ranger, 5 ), '1' ).value ),
        CeNa    :   parseFloat( nullishRet( 
                        optionalChain( ranger, 6 ), '1' ).value ),
        gNa     :   parseFloat( nullishRet( 
                        optionalChain( ranger, 7 ), '1' ).value ),
        
        pCl     :   parseFloat( nullishRet( 
                        optionalChain( ranger, 8 ), '1' ).value ),
        CiCl    :   parseFloat( nullishRet( 
                        optionalChain( ranger, 9 ), '1' ).value ),
        CeCl    :   parseFloat( nullishRet(
                        optionalChain( ranger, 10 ), '1' ).value ),
        gCl     :   parseFloat( nullishRet(
                        optionalChain( ranger, 11 ), '1' ).value ),

        EK      : isNaN(this.EK) ? 0 : this.EK,
        ENa     : isNaN(this.ENa) ? 0 : this.ENa,
        ECl     : isNaN(this.ECl) ? 0 : this.ECl

    }

    //console.table( val );

}

// Calculates NERNST equation
function calc_nernst(){

    // Calculates
    val.EK  = ( -61 / 1 ) * Math.log10( val.CiK / val.CeK );
    val.ENa = ( -61 / 1 ) * Math.log10( val.CiNa / val.CeNa );
    val.ECl = ( -61 / -1 ) * Math.log10( val.CiCl / val.CeCl );

    // Updates screen
    var ek = document.getElementsByClassName("nernst target EK");
    var ena = document.getElementsByClassName("nernst target ENa");
    var ecl = document.getElementsByClassName("nernst target ECl");

    var opChain;
    
    opChain = nullishRet( optionalChain( ek, 0 ), false );
    opChain ? opChain.innerHTML = round( val.EK ) : null;
    
    opChain = nullishRet( optionalChain( ena, 0 ), false );
    opChain ? opChain.innerHTML = round( val.ENa ) : null;

    opChain = nullishRet( optionalChain( ecl, 0 ), false );
    opChain ? opChain.innerHTML = round( val.ECl ) : null;

    // Console
    if( val.EK == val.ENa && val.ENa == val.ECl )
        console.log( "Nernst -> EK = ENa = ECl =", val.EK );
    else {
        console.log(
            "Nernst", 
            "\nEK =", val.EK, 
            "\nENa =", val.ENa, 
            "\nECl =", val.ECl
            );

        // DEBUG
        // console.table( val );
        }

}

// Calculates GOLDMAN equation
function calc_goldman(){

    // Calculates
    var Em = -61 * Math.log10( 
        (
            ( val.CiK * val.pK ) + 
            ( val.CiNa * val.pNa ) + 
            ( val.CeCl * val.pCl )
        ) / (
            ( val.CeK * val.pK ) + 
            ( val.CeNa * val.pNa ) + 
            ( val.CiCl * val.pCl )
            ) 
    );

    // Updates screen
    var goldtar = document.getElementsByClassName("goldman target");

    var opChain;
    
    opChain = nullishRet( optionalChain( goldtar, 0 ), false );
    opChain ? opChain.innerHTML = round( Em ) : null;

    // Console
    console.log( "Goldman -> Em =", Em );

}

// Calculates CONDUTIVITY equation
function calc_condutividade(){

    // In case it condutividade is called first, wrong values for
    // Nernst will be used. So, need to call it here.
    calc_nernst();

    // Calculates
    var Em =( 
            ( val.gK * val.EK ) + 
            ( val.gNa * val.ENa ) + 
            ( val.gCl * val.ECl ) 
        ) / ( val.gK + val.gNa + val.gCl ) 
    ;

    // Updates screen
    var condtar = document.getElementsByClassName("condutividade target");

    var opChain;
    
    opChain = nullishRet( optionalChain( condtar, 0 ), false );
    opChain ? opChain.innerHTML = round( Em ) : null;

    // Console
    console.log( "Condutividade -> Em =", Em );

}

// Set the pre-defined state for the variables
function set_state( state ){

    switch( state ){

        case "rest":

            // Permeability
            set_range( "pK", 650 );
            set_range( "pNa", 15 );
            set_range( "pCl", 45 );

            // Condutivity
            set_range( "gK", 0.45 );
            set_range( "gNa", 0.03 );
            set_range( "gCl", 0.15 );

            break;

        case "hyper":

            // Permeability
            set_range( "pK", 1000 );
            set_range( "pNa", 15 );
            set_range( "pCl", 45 );

            // Condutivity
            set_range( "gK", 1 );
            set_range( "gNa", 0.03 );
            set_range( "gCl", 0.15 );

            break;

        case "pike":

            // Permeability
            set_range( "pK", 650 );
            set_range( "pNa", 75000 );
            set_range( "pCl", 2 );

            // Condutivity
            set_range( "gK", 0.4 );
            set_range( "gNa", 100 );
            set_range( "gCl", 0.18 );
    
            break;

        case "propagation":

            // Concentration
            set_range( "CiK", 150 );
            set_range( "CiNa", 50 );
            set_range( "CiCl", 10 );

            set_range( "CeK", 5 );
            set_range( "CeNa", 460 );
            set_range( "CeCl", 125 );
    
            break;

        case "plasma":
        case "ecm":
        default:

            set_state( "rest" );

            set_state( "propagation" );

            break;

    }

}