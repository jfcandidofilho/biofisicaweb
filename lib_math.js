// Rouding function
function round( x, decimals = 2 ){

    var multiplier = Math.pow( 10, decimals );

    return ( Math.round( x * multiplier ) / multiplier ).toFixed( 2 );

}