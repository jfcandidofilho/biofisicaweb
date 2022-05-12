// MENU entries
var menu = {

    item :  [
        "introducao", 
        "objetivos", 
        "pre-teste", 
        "experimento", 
        "pos-teste"
    ],

    alt :   [
        "Uma Introdução ao Biofísica Web", 
        "Os Objetivos do Biofísica Web", 
        "Pré-Testes dos Experimentos", 
        "Experimentos a serem explorados", 
        "Pós-Testes dos Experimentos"
    ],

    text :  [
        "INTRODUÇÃO",
        "OBJETIVOS",
        "PRÉ-TESTE",
        "EXPERIMENTOS",
        "PÓS-TESTE"
    ]

};

// Execute code after page is loaded
window.addEventListener('load', function () {

    // Generate the MENU
    for( var i = 0; i < menu.item.length; i++ ){
    
        fetch(
    
            "template_menu.php", 
            
            "item=" + menu.item[i] + "&alt=" + menu.alt[i] + "&text=" + menu.text[i],
            
            "GET", true, act_menu
            
            );

        setTimeout( function() {}, 100 );
    
    }

});