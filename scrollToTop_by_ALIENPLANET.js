/**
 * Created by Alexandr Nikienko on 11/21/2016.
 */
$(function () {
    scrollToTop();
});

function scrollToTop() {
    $(document).scroll(function () {
        if ($(this).scrollTop() > 100) {
            var scrollVal = $(this).scrollTop();
            if (!$(".scroll-to-top-btn ").length) {
                $("body").append("<div class='scroll-to-top-btn'></div>");
                $(".scroll-to-top-btn")
                    .fadeIn("fast")
                    .on("click", function () {
                        $(this).animate({
                            "bottom": "100%",
                            "opacity": "0"
                        }, 500, "easeInOutQuart");
                        /*for timing function "easeInOutQuart" you need jQueryUI.
                         in other case just don't set this parameter*/
                        $("body").animate({
                            scrollTop: 0
                        }, 500);
                    });
            }
        } else {
            $(".scroll-to-top-btn").fadeOut("fast", function () {
                $(this).remove();
            });
        }
    });
}