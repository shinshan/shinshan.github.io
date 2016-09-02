(function () {

    var $window = $(window);

    $window.on('scroll', function () {
        var viewportHeight = $(window).height(),
            scrollTop = $window.scrollTop();

        if (( viewportHeight - scrollTop) < (viewportHeight / 2)) {
            $(".inactive").removeClass("inactive");
            $('#toContact').addClass("inactive");
        } else {
            $(".inactive").removeClass("inactive");
            $('#toHome').addClass("inactive");

        }
    });
    $window.trigger('scroll');

    $('.nav a').click(function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 400);
        return false;
    });
})();
