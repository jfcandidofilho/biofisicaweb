// MENU entries
var menu_entries = {

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

// Generate the MENU
function gen_menu(){

    for( var i = 0; i < menu_entries.item.length; i++ ){
    
        fetch(
    
            "template_menu.php", 
            
            "item=" + menu_entries.item[i] + "&alt=" + menu_entries.alt[i] + "&text=" + menu_entries.text[i],
            
            "GET", true, act_menu
            
            );

        setTimeout( function() {}, 100 );
    
    }

}