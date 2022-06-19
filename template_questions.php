<?php

    $template = "
        <!-- Question #" . $_GET['q_num'] . " -->
        <div class=\"test q" . $_GET['q_num'] . " content grid\">

            <div class=\"q" . $_GET['q_num'] . " empty column\"></div>

            <div class=\"q" . $_GET['q_num'] . " question bi column\">

                <h3 class=\"question title\">Questão 0" . $_GET['q_num'] . "</h3>

                <div class=\"question text grid\">

                    <div class=\"empty column\"></div>
                    <div class=\"question\">
                        " . $_GET['q_text'] . "
                    </div>
                    <div class=\"empty column\"></div>


                </div>

            </div>

            <div class=\"q" . $_GET['q_num'] . " empty column\"></div>

            <div class=\"q" . $_GET['q_num'] . " answer bi column\">

                <h3 class=\"answer title\">Respostas 0" . $_GET['q_num'] . "</h3>

                <div class=\"answer options\">

                    <div class=\"answer line grid\">
                        <div class=\"empty column\"></div>
                        <input class=\"q" . $_GET['q_num'] . " answer input a\" type=\"radio\" name=\"a" . $_GET['q_num'] . "a\" id=\"a" . $_GET['q_num'] . "a\" value=\"a" . $_GET['q_num'] . "a\" />
                        <div class=\"empty column\"></div>
                        <div class=\"answer text a\">" . $_GET['a_1'] . "</div>
                        <div class=\"empty column\"></div>
                    </div>

                    <div class=\"answer line grid\">
                        <div class=\"empty column\"></div>
                        <input class=\"q" . $_GET['q_num'] . " answer input b\" type=\"radio\" name=\"a" . $_GET['q_num'] . "b\" id=\"a" . $_GET['q_num'] . "b\" value=\"a" . $_GET['q_num'] . "b\" />
                        <div class=\"empty column\"></div>
                        <div class=\"answer text b\">" . $_GET['a_2'] . "</div>
                        <div class=\"empty column\"></div>
                    </div>

                    <div class=\"answer line grid\">
                        <div class=\"empty column\"></div>
                        <input class=\"q" . $_GET['q_num'] . " answer input c\" type=\"radio\" name=\"a" . $_GET['q_num'] . "c\" id=\"a" . $_GET['q_num'] . "c\" value=\"a" . $_GET['q_num'] . "c\" />
                        <div class=\"empty column\"></div>
                        <div class=\"answer text c\">" . $_GET['a_3'] . "</div>
                        <div class=\"empty column\"></div>
                    </div>

                    <div class=\"answer line grid\">
                        <div class=\"empty column\"></div>
                        <input class=\"q" . $_GET['q_num'] . " answer input d\" type=\"radio\" name=\"a" . $_GET['q_num'] . "d\" id=\"a" . $_GET['q_num'] . "d\" value=\"a" . $_GET['q_num'] . "d\" />
                        <div class=\"empty column\"></div>
                        <div class=\"answer text d\">" . $_GET['a_4'] . "</div>
                        <div class=\"empty column\"></div>
                    </div>

                </div>

            </div>

            <div class=\"q" . $_GET['q_num'] . " empty column\"></div>

        </div>
    ";

    echo $template;

?>


