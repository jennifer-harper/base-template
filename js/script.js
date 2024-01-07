$('.toggle').click(function () {
    "use strict";
    $('nav ul').slideToggle();
});



$(window).resize(function () {
    "use strict";
    if ($(window).width() > 992) {
        $('nav ul').removeAttr('style');
    }
});