// Analyse anatomy of the JQuery
//Shortcuts replace - JQuery with $
$(document).ready(function(){
    $("h1").mouseenter(function() {
        //some event handlers taking paramenters
        //fadeOut,fedIn
        // https://www.w3schools.com/jquery/jquery fade.asp
        $("img").hide("slow");
          });

    $("p").click(function () {
    alert("This is a paragraph.")
    });

    $("img").click(function () {
    alert("This is an image.")
    });
});
