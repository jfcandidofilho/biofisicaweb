var rangeSlider = function () {

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

window.addEventListener('load', function () {
    
    rangeSlider();

});