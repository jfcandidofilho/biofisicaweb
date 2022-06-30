// MENU entries
var menu_entries = [

    [   // [] item
        "introducao", 
        //"objetivos", 
        "pre-teste", 
        "experimento", 
        "pos-teste",
        "resultados"
    ],

    [   // [] alt
        "Uma Introdução ao Biofísica Web", 
        //"Os Objetivos do Biofísica Web", 
        "Pré-Testes dos Experimentos", 
        "Experimentos a serem explorados", 
        "Pós-Testes dos Experimentos",
        "Resultados do Testes"
    ],

    [   // [] text
        "INTRODUÇÃO",
        //"OBJETIVOS",
        "PRÉ-TESTE",
        "EXPERIMENTOS",
        "PÓS-TESTE",
        "RESULTADOS"
    ]

];

// Generate the MENU
function gen_menu(){

    // DEBUG
    console.log( "gen_menu()" );

    for( var i = 0; i < menu_entries[item].length; i++ ){

        console.log( "for", i );

        var data = [

            menu_entries[item][i],

            menu_entries[alt][i],

            menu_entries[text][i]

        ];

        act_menu( template_menu( data ) );
    
    }

}