// Variables list

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
    
    _VAL = {

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

    //console.table( _VAL );

}

// Calculates NERNST Equation
function nernst( valence, internal, external ){

    return ( ( -61 / valence ) * Math.log10( internal / external ) );

}

// Calculates GOLDMAN Equation
function goldman( p, ci, ce ){

   return ( 
        -61 * Math.log10( (
            ( ci.K * p.K ) + ( ci.Na * p.Na ) + ( ce.Cl * p.Cl )
        ) / (
            ( ce.K * p.K ) + ( ce.Na * p.Na ) + ( ci.Cl * p.Cl ) 
        ) ) 
    );

}

// Calculates CONDUTIVITY Equation
function condutivity( e, g ){

    return ( ( 
        ( g.K * e.K ) + ( g.Na * e.Na ) + ( g.Cl * e.Cl ) 
        ) / ( 
        g.K + g.Na + g.Cl 
        ) );

}

// Calculates NERNST equation and upates it
function calc_nernst(){

    // Calculates
    _VAL.EK  = nernst( 1, _VAL.CiK, _VAL.CeK );
    _VAL.ENa = nernst( 1, _VAL.CiNa, _VAL.CeNa );
    _VAL.ECl = nernst( -1, _VAL.CiCl, _VAL.CeCl );

    // Updates screen
    var ek = document.getElementsByClassName("nernst target EK");
    var ena = document.getElementsByClassName("nernst target ENa");
    var ecl = document.getElementsByClassName("nernst target ECl");

    var opChain;
    
    opChain = nullishRet( optionalChain( ek, 0 ), false );
    opChain ? opChain.innerHTML = round( _VAL.EK ) + " mV" : null;
    
    opChain = nullishRet( optionalChain( ena, 0 ), false );
    opChain ? opChain.innerHTML = round( _VAL.ENa ) + " mV" : null;

    opChain = nullishRet( optionalChain( ecl, 0 ), false );
    opChain ? opChain.innerHTML = round( _VAL.ECl ) + " mV" : null;

    // Console
    if( _VAL.EK == _VAL.ENa && _VAL.ENa == _VAL.ECl )
        console.log( "Nernst -> EK = ENa = ECl =", _VAL.EK );
    else {
        console.log(
            "Nernst", 
            "\nEK =", _VAL.EK, 
            "\nENa =", _VAL.ENa, 
            "\nECl =", _VAL.ECl
            );

        // DEBUG
        // console.table( _VAL );
        }

}

// Calculates GOLDMAN equation
function calc_goldman(){

    // Calculates
    var Em = goldman( 
        { K : _VAL.pK, Na: _VAL.pNa, Cl: _VAL.pCl },
        { K : _VAL.CiK, Na: _VAL.CiNa, Cl: _VAL.CiCl },
        { K : _VAL.CeK, Na: _VAL.CeNa, Cl: _VAL.CeCl }
    );

    // Updates screen
    var goldtar = document.getElementsByClassName("goldman target");

    var opChain;
    
    opChain = nullishRet( optionalChain( goldtar, 0 ), false );
    opChain ? opChain.innerHTML = round( Em ) + " mV" : null;

    // Console
    console.log( "Goldman -> Em =", Em );

}

// Calculates CONDUTIVITY equation
function calc_condutividade(){

    // In case it condutividade is called first, wrong values for
    // Nernst will be used. So, need to call it here.
    calc_nernst();

    // Calculates
    var Em = condutivity( 
        { K : _VAL.EK, Na: _VAL.ENa, Cl: _VAL.ECl },
        { K : _VAL.gK, Na: _VAL.gNa, Cl: _VAL.gCl }
    );

    // Updates screen
    var condtar = document.getElementsByClassName("condutividade target");

    var opChain;
    
    opChain = nullishRet( optionalChain( condtar, 0 ), false );
    opChain ? opChain.innerHTML = round( Em ) + " mV" : null;

    // Console
    console.log( "Condutividade -> Em =", Em );

}

// Set the pre-defined state for the variables
function set_state( state ){

    switch( state ){

        case "rest":

            // Permeability
            set_range( "pK", 100 );   // OLD 650
            set_range( "pNa", 4995 );// OLD 15
            set_range( "pCl", 0 ); // OLD 45

            // Condutivity
            set_range( "gK", 0.001 );
            set_range( "gNa", 5 );
            set_range( "gCl", 0.001 );

            break;

        case "hyper":

            // Permeability
            set_range( "pK", 1000 );    // OLD 1000
            set_range( "pNa", 7500 ); // OLD 15
            set_range( "pCl", 100 );  // OLD 45

            // Condutivity
            set_range( "gK", 1 );
            set_range( "gNa", 100 );
            set_range( "gCl", 1 );

            break;

        case "pike":

            // Permeability
            set_range( "pK", 650 );      // OLD 650
            set_range( "pNa", 3500 );    // OLD 75000
            set_range( "pCl", 50 );      // OLD 2

            // Condutivity
            set_range( "gK", 5 );
            set_range( "gNa", 50 );
            set_range( "gCl", 5 );
    
            break;

        case "propagation":

            // Concentration
            set_range( "CiK", 150 );
            set_range( "CiNa", 10 );
            set_range( "CiCl", 5 );

            set_range( "CeK", 6 );
            set_range( "CeNa", 150 );
            set_range( "CeCl", 115 );
    
            break;

        case "plasma":
        case "ecm":
        default:

            set_state( "rest" );

            set_state( "propagation" );

            break;

    }

}