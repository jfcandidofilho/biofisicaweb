function template_tests( prefix, data ) {

    return "\
        <!-- Question #" + data[ q_num ] + " -->\
        <div class=\"" + prefix + " test " + data[ q_num ] + " box\">\
            \
            <div class=\"question box\">\
                <h3 class=\"title\">Questão " + data[ q_num ] + "</h3>\
                <div class=\"text\">" + data[ q_text ] + "</div>\
            </div>\
            \
            <div class=\"options box\">\
                \
                <div class=\"option a grid\">\
                    \
                    <input type=\"radio\" id=\"" + prefix + "_" + data[ q_num ] + "_a\" name=\"" + prefix + " " + data[ q_num ] + "\" class=\"input radio\" value=\"" + prefix + "_" + data[ q_num ] + "_a\" onclick=\"javascript: set_answer( '" + prefix + "', '" + data[ q_num ] + "', 'a');\" />\
                    \
                    <div class=\"empty column\"></div>\
                    \
                    <div class=\"answer\">" + data[ ans ][a] + "</div>\
                    \
                </div>\
                \
                <div class=\"option b grid\">\
                    \
                    <input type=\"radio\" id=\"" + prefix + "_" + data[ q_num ] + "_b\" name=\"" + prefix + " " + data[ q_num ] + "\" class=\"input radio\" value=\"" + prefix + "_" + data[ q_num ] + "_b\" onclick=\"javascript: set_answer( '" + prefix + "', '" + data[ q_num ] + "', 'b');\" />\
                    \
                    <div class=\"empty column\"></div>\
                    \
                    <div class=\"answer\">" + data[ ans ][b] + "</div>\
                    \
                </div>\
                \
                <div class=\"option c grid\">\
                    \
                    <input type=\"radio\" id=\"" + prefix + "_" + data[ q_num ] + "_c\" name=\"" + prefix + " " + data[ q_num ] + "\" class=\"input radio\" value=\"" + prefix + "_" + data[ q_num ] + "_c\" onclick=\"javascript: set_answer( '" + prefix + "', '" + data[ q_num ] + "', 'c');\" />\
                    \
                    <div class=\"empty column\"></div>\
                    \
                    <div class=\"answer\">" + data[ ans ][c] + "</div>\
                    \
                </div>\
                \
                <div class=\"option d grid\">\
                    \
                    <input type=\"radio\" id=\"" + prefix + "_" + data[ q_num ] + "_d\" name=\"" + prefix + " " + data[ q_num ] + "\" class=\"input radio\" value=\"" + prefix + "_" + data[ q_num ] + "_d\" onclick=\"javascript: set_answer( '" + prefix + "', '" + data[ q_num ] + "', 'd');\" />\
                    \
                    <div class=\"empty column\"></div>\
                    \
                    <div class=\"answer\">" + data[ ans ][d] + "</div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
    ";
}

function template_menu( data ){

    return "\
        <a href=\"#" + data[ item ] + "\" alt=\"" + data[ alt ] + "\" onclick=\"javascript: load_page('" + data[ item ] + "');\" class=\"menu item " + data[ item ] + "\">\
        " + data[ text ] + "\
        </a> &nbsp;\
        ";

}