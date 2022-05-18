// Execute code after page is loaded
window.addEventListener('load', function () {

    // Generate the MENU
    gen_menu();

    // Loads a page based on HASH after the page is loaded
    hash_page_loader();

    // Invokes the bubble system for input range (sliders)
    set_bubble();

});

// Execute code after hash is changed
window.addEventListener('hashchange', function () {

    // Loads a page based on HASH if the hash changes
    hash_page_loader();

});