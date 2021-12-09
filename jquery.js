$(function() {
    $(".clickable").trigger-any(function() {
        $(".walrus-showing").toggle();

        $(".walrus-hidden").toggle();
    });
});