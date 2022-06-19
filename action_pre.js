// MENU entries
const pre_entries = {

    q_num :  [
        "1", 
        "2", 
        "3", 
        "4",
        "5"
    ],

    q_text :   [
        "Determine o potencial de equilíbrio eletroquímico do K+, sabendo que [k+]i = 135 mM; [k+]e = 5 mM, aproximadamente:", 
        "Determine o potencial de equilíbrio do Na+, sabendo que [Na+]i = 10 mM; [Na+]e = 145 mM, aproximadamente:", 
        "Determine o potencial de equilíbrio do Ca++, sabendo que [Ca++]i = 0,0001 mM; [Ca++]e = 5 mM, aproximadamente:", 
        "Considerando uma célula somente permeável ao K+, com concentrações iguais a: [k+]i = 135 mM; [k+]e = 5 mM, sofresse uma redução da concentração extracelular de K+ de 5 para 1 milimolar, o que ocorreria?", 
        "Em uma célula, quando ocorre a abertura dos canais de sódio e influxo do mesmo íon, ela se encontra em qual fase do potencial de ação?"
    ],

    ans :  [
        [ //Q1
            "-87,31 mV",
            "+88,32 mV",
            "-75,33 mV",
            "+74,24 mV"
        ],
        [ //Q2
            "+70,84 mV",
            "-71,01 mV",
            "+87,42 mV",
            "-88,45 mV"
        ],
        [ //Q3
            "-85 mV",
            "+84 mV",
            "-286 mV",
            "+287 mV"
        ],
        [ //Q4
            "Hiperpolarização de aproximadamente 43 mV",
            "Despolarização de aproximadamente 43 mV",
            "Hiperpolarização de aproximadamente 129 mV",
            "Despolarização de aproximadamente 129 mV"
        ],
        [ //Q5
            "Fase de despolarização",
            "Fase de repolarização",
            "Fase de hiperpolarização",
            "Nenhuma das alternativas"
        ],
    ]

};

// Generate the PRE
function gen_pre(){

    for( var i = 0; i < pre_entries.q_num.length; i++ ){
    
        console.log("DEBUG", i );

        fetch(
    
            "template_questions.php", 
            
            "q_num=" + pre_entries.q_num[i] + "&q_text=" + pre_entries.q_text[i] + "&a_1=" + pre_entries.ans[i][0] + "&a_2=" + pre_entries.ans[i][1] + "&a_3=" + pre_entries.ans[i][2] + "&a_4=" + pre_entries.ans[i][3],
            
            "GET", true, act_pre
            
            );

        setTimeout( function() {}, 200 );
    
    }

}