<?php

    $template = "
        <a href=\"#" . $_GET['item'] . "\" alt=\"" . $_GET['alt'] . "\" onclick=\"javascript: load_page('" . $_GET['item'] . "');\" class=\"menu item " . $_GET['item'] . "\">
        " . $_GET['text'] . "
        </a> &nbsp;
    ";

    echo $template;

?>