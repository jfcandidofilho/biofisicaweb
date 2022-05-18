// This "object" will "bubble" the events and update ranger inputs
var set_bubble = function () {
    
    var slider  = document.querySelectorAll(".ranger"),
        ranger  = document.querySelectorAll(".ranger input"),
        values  = document.querySelectorAll(".ranger value");

    slider.forEach( function ( _slider ) {
        
        values.forEach( function ( _value ) {

            console.log( "value", _value );

            var value = _value
                        .previousElementSibling
                        .value;

            _value.innerHTML = value;

        });

        ranger.forEach( function( _range ){

            _range.addEventListener( 'input', function () {

                var range = _range.value;

                _range.nextElementSibling.innerHTML = range;

            });

        });

    });
};

// Set the given input range value and invokes the event
function set_range( target, value ){

    var e = document.getElementsByClassName(
        "ranger input " + target
    )[0];

    e.value = value;

    e.dispatchEvent( new Event( "input" ) );

}