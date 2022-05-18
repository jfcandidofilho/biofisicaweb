// Variables list
var val = null;

// Updates variables
function update_variables() {

    var ranger = document.getElementsByClassName("ranger input");

    val = {

        pK      : parseFloat( ranger[0].value ),
        CiK     : parseFloat( ranger[1].value ),
        CeK     : parseFloat( ranger[2].value ),
        gK      : parseFloat( ranger[3].value ),
        
        pNa     : parseFloat( ranger[4].value ),
        CiNa    : parseFloat( ranger[5].value ),
        CeNa    : parseFloat( ranger[6].value ),
        gNa     : parseFloat( ranger[7].value ),
        
        pCl     : parseFloat( ranger[8].value ),
        CiCl    : parseFloat( ranger[9].value ),
        CeCl    : parseFloat( ranger[10].value ),
        gCl     : parseFloat( ranger[11].value ),

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
    document.getElementsByClassName("nernst target EK")[0].innerHTML = round( val.EK );
    document.getElementsByClassName("nernst target ENa")[0].innerHTML = round( val.ENa );
    document.getElementsByClassName("nernst target ECl")[0].innerHTML = round( val.ECl );

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
    document.getElementsByClassName("goldman target")[0].innerHTML = round( Em );

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
    document.getElementsByClassName("condutividade target")[0].innerHTML = round( Em );

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