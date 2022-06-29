// MENU entries
const pre_entries = {

    q_num :  [
        encodeURIComponent( "1" ), 
        encodeURIComponent( "2" ), 
        encodeURIComponent( "3" ), 
        encodeURIComponent( "4" ),
        encodeURIComponent( "5" ),
        encodeURIComponent( "6" ),
        encodeURIComponent( "7" ),
        encodeURIComponent( "8" )
    ],

    q_text :   [
        encodeURIComponent( 
            "Determine o potencial de equilíbrio eletroquímico do K&plus;, sabendo que [K&plus;]i = 135 mM; [K&plus;]e = 5 mM, aproximadamente:"
            ), 
        encodeURIComponent( 
            "Determine o potencial de equilíbrio do Na&plus;, sabendo que [Na&plus;]i = 10 mM; [Na&plus;]e = 145 mM, aproximadamente:"
            ), 
        encodeURIComponent( 
            "Determine o potencial de equilíbrio do Ca&plus;&plus;, sabendo que [Ca&plus;&plus;]i = 0,0001 mM; [Ca&plus;&plus;]e = 5 mM, aproximadamente:"
            ), 
        encodeURIComponent( 
            "Considerando uma célula somente permeável ao K&plus;, com concentrações iguais a: [K&plus;]i = 135 mM; [K&plus;]e = 5 mM, sofresse uma redução da concentração extracelular de K&plus; de 5 para 1 milimolar, o que ocorreria?"
            ), 
        encodeURIComponent( 
            "Em uma célula, quando ocorre a abertura dos canais de sódio e influxo do mesmo íon, ela se encontra em qual fase do potencial de ação?"
            ),
        encodeURIComponent( 
            "Em uma célula, quando ocorre a inativação dos canais de sódio, abertura dos canais de potássio e o efluxo de potássio, a célula se encontra em qual fase do potencial de ação?"
            ),
        encodeURIComponent( 
            "O potencial de ação de uma célula excitável pode ser dividido nas seguintes fases:"
            ),
        encodeURIComponent( 
            "Uma diminuição da concentração de potássio no LEC, hipocalemia, deixará o potencial da membrana?"
            )
    ],

    ans :  [
        [ //Q1
            encodeURIComponent(
                "-87,31 mV"),
            encodeURIComponent(
                "&plus;88,32 mV"
                ),
            encodeURIComponent(
                "-75,33 mV"
                ),
            encodeURIComponent(
                "&plus;74,24 mV"
                )
        ],
        [ //Q2
            encodeURIComponent(
                "&plus;70,84 mV"
                ),
            encodeURIComponent(
                "-71,01 mV"
                ),
            encodeURIComponent(
                "&plus;87,42 mV"
                ),
            encodeURIComponent(
                "-88,45 mV"
                )
        ],
        [ //Q3
            encodeURIComponent(
                "&plus;143 mV"
                ),
            encodeURIComponent(
                "&plus;84 mV"
                ),
            encodeURIComponent(
                "-286 mV"
                ),
            encodeURIComponent(
                "&plus;287 mV"
                )
        ],
        [ //Q4
            encodeURIComponent(
                "Hiperpolarização de aproximadamente 43 mV"
                ),
            encodeURIComponent(
                "Despolarização de aproximadamente 43 mV"
                ),
            encodeURIComponent(
                "Hiperpolarização de aproximadamente 129 mV"
                ),
            encodeURIComponent(
                "Despolarização de aproximadamente 129 mV"
                )
        ],
        [ //Q5
            encodeURIComponent(
                "Fase de despolarização"
                ),
            encodeURIComponent(
                "Fase de repolarização"
                ),
            encodeURIComponent(
                "Fase de hiperpolarização"
                ),
            encodeURIComponent(
                "Nenhuma das alternativas"
                )
        ],
        [ //Q6
            encodeURIComponent(
                "Fase de repolarização"
                ),
            encodeURIComponent(
                "Fase de despolarização"
                ),
            encodeURIComponent(
                "Fase de hiperpolarização"
                ),
            encodeURIComponent(
                "Nenhuma das alternativas"
                )
        ],
        [ //Q7
            encodeURIComponent(
                "Despolarização - Repolarização - Repouso"
                ),
            encodeURIComponent(
                "Repolarização - Despolarização - Repouso"
                ),
            encodeURIComponent(
                "Despolarização - Repouso - Repolarização"
                ),
            encodeURIComponent(
                "Repolarização - Repouso - Despolarização"
                )
        ],
        [ //Q8
            encodeURIComponent(
                "Hiperpolarizada"
                ),
            encodeURIComponent(
                "Despolarizada"
                ),
            encodeURIComponent(
                "Repolarizada"
                ),
            encodeURIComponent(
                "Não modifica o potencial de repouso"
                )
        ]
    ]

};

// Generate the PRE
function gen_pre( prefix ){

    for( var i = 0; i < pre_entries.q_num.length; i++ ){
    
        console.log("DEBUG", i );

        fetch(
    
            "template_questions.php", 
            
            "q_prefix=" + prefix + "&q_num=" + pre_entries.q_num[i] + "&q_text=" + pre_entries.q_text[i] + "&a_1=" + pre_entries.ans[i][0] + "&a_2=" + pre_entries.ans[i][1] + "&a_3=" + pre_entries.ans[i][2] + "&a_4=" + pre_entries.ans[i][3],
            
            "GET", true, act_pre
            
            );

        setTimeout( function() {}, 200 );
    
    }

}