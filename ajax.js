function fetch_file( 
    method = "GET", file = "lab.html", func = set_page 
    ) {

    var xhr = new XMLHttpRequest();

    xhr.open( method, file, true );

    xhr.onload = function () {

        func( xhr.response );
    
    }

    xhr.send();

}

function set_page( text ) {

    document.getElementById( "content" ).innerHTML = text;

    after_ajax();
    
    MathJax.typeset();

    rangeSlider();

    graph_draw();

}

function after_ajax(){

    update_variables();

    var input_list = this.document.getElementsByClassName("ranger input");
    
    Array.prototype.filter.call( input_list, function(e){

        e.addEventListener("change", function(){

            //console.clear();

            update_variables();

            calc_nernst();
            calc_condutividade();
            calc_goldman();

        });

    });

    var input_list = this.document.getElementsByClassName("state input");

    Array.prototype.filter.call( input_list, function(e){

        e.addEventListener("change", function(){

            var state = e.className.replace( 
                "default state input ", "" 
            );

            set_state( state );

            update_variables();
        
            calc_nernst();
            calc_condutividade();
            calc_goldman();

        });

    });

    var input_list = this.document.getElementsByClassName("concentration input");

    Array.prototype.filter.call( input_list, function(e){

        e.addEventListener("change", function(){

            var state = e.className.replace( 
                "default concentration input ", "" 
            );

            set_state( state );

            update_variables();
        
            calc_nernst();
            calc_condutividade();
            calc_goldman();

        });

        e.addEventListener("click", function(){

            var state = e.className.replace( 
                "default concentration input ", "" 
            );

            set_state( state );

            update_variables();
        
            calc_nernst();
            calc_condutividade();
            calc_goldman();

        });

    });

    update_variables();

    calc_nernst();
    calc_condutividade();
    calc_goldman();



}

function hash_page_loader(){

    let hash = location.hash.replace('#','');

    console.log( "HASH: ", hash );

    switch( hash ){

        case "objetivos":

            fetch_file('GET','obj.html');

            break;

        case "pre-teste":

            fetch_file('GET','pre.html');

            break;

        case "experimentos":

            fetch_file('GET','lab.html');

            break;

        case "pos-teste":

            fetch_file('GET','pos.html');

            break;

        case "introducao":
        default:

            fetch_file('GET','intro.html');

            break;

    }

}

window.addEventListener('load', function () {

    //renderUnicodemath();

    hash_page_loader();

});

window.addEventListener('hashchange', function () {
    
    hash_page_loader();

});