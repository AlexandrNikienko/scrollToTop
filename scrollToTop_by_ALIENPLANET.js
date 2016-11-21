/**
 * Created by Alexandr Nikienko
 */

$(function () {
    scrollToTop.init();
});

var scrollToTop = {
    init: function() {
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
                            }, 500, this.ifJQueryUILoaded("easeInOutQuart"));
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
    },
    ifJQueryUILoaded: function(param) {
        jQuery.ui : param ? false
    }
}