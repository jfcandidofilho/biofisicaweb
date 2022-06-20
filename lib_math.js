// Rouding function
function round( x, decimals = 2 ){

    var multiplier = Math.pow( 10, decimals );

    return ( Math.round( x * multiplier ) / multiplier ).toFixed( 2 );

}

// Round a nasty float
function round_nasty( x, inc = 0 ){

    return parseFloat( (x + inc).toFixed(2).toString() );

}