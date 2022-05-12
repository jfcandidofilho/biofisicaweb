<?php

    $template = "
        <a href=\"#" . $_GET['item'] . "\" alt=\"" . $_GET['alt'] . "\" onclick=\"javascript: fetch_file('GET','" . $_GET['item'] . ".html');\" class=\"menu item " . $_GET['item'] . "\">
        " . $_GET['text'] . "
        </a> &nbsp;
    ";

    echo $template;

?>