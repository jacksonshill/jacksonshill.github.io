$(document).ready(function () {
    scrollToTop();
});

//Scroll to top
function scrollToTop() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
   
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
}