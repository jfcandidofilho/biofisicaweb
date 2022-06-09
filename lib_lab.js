// Variables list
var val = null;

/**
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

    // BUG - works for other pages but it never finds getEle... of more than one class. So it doesn't work for the experiments page where it should.
    var created = "ranger" in window;

    console.log("created? ", created, ranger, typeof ranger);

    val = {

        pK      : !created ? 0 : parseFloat( ranger[0].value ),
        CiK     : !created ? 0 : parseFloat( ranger[1].value ),
        CeK     : !created ? 0 : parseFloat( ranger[2].value ),
        gK      : !created ? 0 : parseFloat( ranger[3].value ),
        
        pNa     : !created ? 0 : parseFloat( ranger[4].value ),
        CiNa    : !created ? 0 : parseFloat( ranger[5].value ),
        CeNa    : !created ? 0 : parseFloat( ranger[6].value ),
        gNa     : !created ? 0 : parseFloat( ranger[7].value ),
        
        pCl     : !created ? 0 : parseFloat( ranger[8].value ),
        CiCl    : !created ? 0 : parseFloat( ranger[9].value ),
        CeCl    : !created ? 0 : parseFloat( ranger[10].value ),
        gCl     : !created ? 0 : parseFloat( ranger[11].value ),

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
    var ek = document.getElementsByClassName("nernst target EK")[0];
    var ena = document.getElementsByClassName("nernst target ENa")[0];
    var ecl = document.getElementsByClassName("nernst target ECl")[0];
  
    console.log("test...", "ek" in window);

    "ek" in window ? ek.innerHTML = round( val.EK ) : null;
    "ena" in window ? ena.innerHTML = round( val.ENa ) : null;
    "ecl" in window ? ecl.innerHTML = round( val.ECl ) : null;

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
    var goldtar = document.getElementsByClassName("goldman target")[0];
    
    "goldtar" in window ? goldtar.innerHTML = round( Em ) : null;

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
    var condtar = document.getElementsByClassName("condutividade target")[0];

    "condtar" in window ? condtar.innerHTML = round( Em ) : null;

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