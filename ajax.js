// Fetch a page and acts this page with f function
function fetch(
    file, env_vars, 
    method = "GET", async = true, f = act 
    ){

    var xhr = new XMLHttpRequest();

    var getvars     = method == "GET" ? "?" + env_vars : null;
    var postvars    = method == "GET" ? null : env_vars;

    xhr.open( method, file + getvars, async );

    xhr.onload = function(){ 
    
        // If simple act, garantee error
        // If an specific act, guarantee it's called
        if( f === act ) f(); else f( xhr.response ); 
    
    }

    xhr.send( postvars );

}

// Acts a given page in a target destructively or not
function act( 
    target = "error", 
    content = "Something is AJAXely wrong..",
    destructive = true
    ){

    if( destructive )
        document.getElementById( target ).innerHTML = content;
    else document.getElementById( target ).innerHTML += content;
}

// Act the menu content
function act_menu( content ){

    act( "menu", content, false );

}

// Act the navigated page's content
function act_content( content ){

    act( "content", content );

}