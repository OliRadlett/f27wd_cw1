/*

    Script to delay CSS animations by 500ms to stop expand animation runing on page load    

*/

setTimeout(function() {

    // Remove preload class from body to allow animations to play again
    document.body.className = "";

}, 500);