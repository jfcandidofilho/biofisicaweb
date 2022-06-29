// MENU entries
const pos_entries = {

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
        //Q1
        encodeURIComponent(
            "Numa situação hipotética, na qual o potencial da membrana de uma célula é determinada pelos íons: X- de potencial de equilíbrio 45 mV  e Y&plus; de potencial de equilíbrio -60 mV. Sendo a permeabilidade destes íons foram, respectivamente, 2 x 108  cm/s e 1 x 108 cm/s. Podemos concluir que o potencial dessa célula será:"
            ), 
        //Q2
        encodeURIComponent(
            "Por que a variação da concentração de K&plus; no LEC é a que mais modifica o potencial de membrana?"
            ), 
        //Q3
        encodeURIComponent(
            "Se em uma célula o valor do potencial de membrana calculado for negativo e o potencial de equilíbrio de um íon for positivo. Podemos concluir que este íon é:"
            ), 
        //Q4
        encodeURIComponent(
            "Qual variação de concentração iônica no LEC altera mais o potencial de membrana?"
            ), 
        //Q5
        encodeURIComponent(
            "Observe os dados de uma célula hipotética e assinale a alternativa correta.\
            <br />\
            <table>\
                <tr>\
                    <th>ÍON</th>\
                    <th>Intracelular (mM)</th>\
                    <th>Extracelular (mM)</th>\
                    <th>Permeabilidade x 10^-8 (cm/s)</th>\
                </tr>\
                <tr>\
                    <td>K&plus;</td><td>140</td><td>4</td><td>500</td>\
                </tr>\
                <tr>\
                    <td>Na&plus;</td><td>10</td><td>140</td><td>15</td>\
                </tr>\
                <tr>\
                    <td>Cl-</td><td>5</td><td>100</td><td>40</td>\
                </tr>\
            </table>"
            ),
        //Q6
        encodeURIComponent(
                "Uma alteração súbita, rápida e transitória do potencial de repouso da membrana de uma célula é chamado de: "
            ),
        //Q7
        encodeURIComponent(
            "Considere uma célula hipotética, permeável apenas ao íon Z&plus;, cuja as concentrações são [Z&plus;]i = 100 mM; [Z&plus;]e = 10 mM, determine o potencial de equilíbrio eletroquímico:"
            ),
        //Q8
        encodeURIComponent(
            "A contração da fibra muscular esquelética é resultado de um aumento na concentração intracelular de qual íon?"
            )
    ],

    ans :  [
        [ //Q1
            encodeURIComponent(
                "Próximo de &plus;10 mV"
                ),
            encodeURIComponent(
                "Próximo de &plus;50 mV"
                ),
            encodeURIComponent(
                "Próximo de -15 mV"
                ),
            encodeURIComponent(
                "Inconclusivo"
                )
        ],
        [ //Q2
            encodeURIComponent(
                "Devido à maior permeabilidade da membrana para este íon."
                ),
            encodeURIComponent(
                "Devido à menor permeabilidade da membrana para este íon."
                ),
            encodeURIComponent(
                "Decorrente a liberação de menor neurotransmissores."
                ),
            encodeURIComponent(
                "Decorrente a liberação de maior neurotransmissores."
                )
        ],
        [ //Q3
            encodeURIComponent(
                "Menos permeável a membrana"
                ),
            encodeURIComponent(
                "Mais permeável a membrana"
                ),
            encodeURIComponent(
                "Ambas corretas"
                ),
            encodeURIComponent(
                "Inconclusivo"
                )
        ],
        [ //Q4
            encodeURIComponent(
                "K&plus;"
                ),
            encodeURIComponent(
                "Ca&plus;&plus;"
                ),
            encodeURIComponent(
                "Na&plus;"
                ),
            encodeURIComponent(
                "Cl-"
                )
        ],
        [ //Q5
            encodeURIComponent(
                "O valor do potencial de membrana calculado é negativo e o potencial de equilíbrio do íon Na&plus; é positivo, por isso o Na&plus;; é menos permeável à membrana"
                ),
            encodeURIComponent(
                "O valor do potencial de membrana é positivo e o potencial de equilíbrio do íon Cl- é positivo, por isso o Cl- é menos permeável à membrana"
                ),
            encodeURIComponent(
                "O valor do potencial de membrana é positivo e o potencial de equilíbrio do íon Cl- é positivo, por isso o Na&plus; é menos permeável à membrana"
                ),
            encodeURIComponent(
                "Dados insuficientes"
                )
        ],
        [ //Q6
            encodeURIComponent(
                "Potencial de ação"
                ),
            encodeURIComponent(
                "Despolarização"
                ),
            encodeURIComponent(
                "Repolarização"
                ),
            encodeURIComponent(
                "Polarização"
                )
        ],
        [ //Q7
            encodeURIComponent(
                "-61 mV"
                ),
            encodeURIComponent(
                "&plus;61 mV"
                ),
            encodeURIComponent(
                "-121 mV"
                ),
            encodeURIComponent(
                "&plus;121 mV"
                )
        ],
        [ //Q8
            encodeURIComponent(
                "Ca&plus;&plus;"
                ),
            encodeURIComponent(
                "K&plus;"
                ),
            encodeURIComponent(
                "Na&plus;"
                ),
            encodeURIComponent(
                "Cl-"
                )
        ]
    ]

};

// Generate the POS
function gen_pos( prefix ){

    for( var i = 0; i < pos_entries.q_num.length; i++ ){

        console.log( "DEBUG", pos_entries.q_num.length );
    
        console.log("DEBUG", i );

        fetch(
    
            "template_questions.php", 
            
            "q_prefix=" + prefix + "&q_num=" + pos_entries.q_num[i] + "&q_text=" + pos_entries.q_text[i] + "&a_1=" + pos_entries.ans[i][0] + "&a_2=" + pos_entries.ans[i][1] + "&a_3=" + pos_entries.ans[i][2] + "&a_4=" + pos_entries.ans[i][3],
            
            "GET", true, act_pos
            
            );

        setTimeout( function() {}, 200 );
    
    }

}