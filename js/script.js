// Animação Efeito scroll navbar
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      if (!$(".navbar").hasClass("fixed")) {
        $(".navbar").stop().addClass("fixed").css("top", "-100px").animate(
          {
            top: "0px",
          },
          600
        );
      }
    } else {
      $(".navbar").removeClass("fixed");
    }
  });
});


