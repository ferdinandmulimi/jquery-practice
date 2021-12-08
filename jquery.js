// Analyse anatomy of the JQuery
//Shortcuts replace - JQuery with $
$(document).ready(function(){
    $("h1").click(function() {
       $("img").hide();
    });

    $("p").click(function () {
    alert("This is a paragraph.")
    });

    $("img").click(function () {
    alert("This is an image.")
    });
})