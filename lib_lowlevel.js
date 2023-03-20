function sleep( miliseconds ) {

    // ORIGINAL:
    // https://stackoverflow.com/a/16624104/1494516

    var currentTime = new Date().getTime();

    while(
        currentTime + miliseconds 
        >= 
        new Date().getTime()
        ) {}

}