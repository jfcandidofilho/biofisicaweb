<?php

    $question_prefix    = urldecode( $_GET['q_prefix'] );
    $question_number    = urldecode( $_GET['q_num'] );
    $question_text      = urldecode( $_GET['q_text'] );
    $question_option_a  = urldecode( $_GET['a_1'] );
    $question_option_b  = urldecode( $_GET['a_2'] );
    $question_option_c  = urldecode( $_GET['a_3'] );
    $question_option_d  = urldecode( $_GET['a_4'] );

    $template = "
    <!-- Question #" . $question_number . " -->
    <div class=\"prefix test " . $question_number . " box\">

        <div class=\"question box\">
            <h3 class=\"title\">Questão " . $question_number . "</h3>
            <div class=\"text\">" . $question_text . "</div>
        </div>

        <div class=\"options box\">

            <div class=\"option a grid\">

                <input type=\"radio\" id=\"" . $question_prefix . "_" . $question_number . "_a\" name=\"prefix " . $question_number . " a\" class=\"input radio\" value=\"prefix " . $question_number . " a\" />

                <div class=\"empty column\"></div>

                <div class=\"answer\">" . $question_option_a . "</div>

            </div>

            <div class=\"option b grid\">

                <input type=\"radio\" id=\"" . $question_prefix . "_" . $question_number . "_b\" name=\"prefix " . $question_number . " b\" class=\"input radio\" value=\"prefix " . $question_number . " b\" />

                <div class=\"empty column\"></div>

                <div class=\"answer\">" . $question_option_b . "</div>

            </div>

            <div class=\"option c grid\">

                <input type=\"radio\" id=\"" . $question_prefix . "_" . $question_number . "_c\" name=\"prefix " . $question_number . " c\" class=\"input radio\" value=\"prefix " . $question_number . " c\" />

                <div class=\"empty column\"></div>

                <div class=\"answer\">" . $question_option_c . "</div>

            </div>

            <div class=\"option d grid\">

                <input type=\"radio\" id=\"" . $question_prefix . "_" . $question_number . "_d\" name=\"prefix " . $question_number . " d\" class=\"input radio\" value=\"prefix " . $question_number . " d\" />

                <div class=\"empty column\"></div>

                <div class=\"answer\">" . $question_option_d . "</div>

            </div>

        </div>

    </div>
    ";

    echo $template;

?>


