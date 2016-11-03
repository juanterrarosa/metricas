$(function() {
    $("img.lazy").lazyload({
        event : "sporty"
        effect : "fadeIn"
    });
});

$(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty")
    }, 5000);
});