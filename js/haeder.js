$(document).ready(function () {
  /* resize 偵測螢幕寬度 */
  $(window)
    .bind("resize", function () {
      if ($(this).width() < 768) {
        $(".nav").addClass("mobile");
        $(".nav").hide();
      } else {
        $(".nav").removeClass("mobile");
        $(".nav").show();
      }
    })
    .trigger("resize");
  /* menu */
  $(".hamburger").on("click", function (e) {
    e.stopPropagation();
    $(".nav").slideToggle();
  });
  /* close menu */
  $(".close-btn").on("click", function () {
    $(".nav").slideToggle();
  });
});
