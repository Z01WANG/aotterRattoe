$(document).ready(function(){
    /* 引入header/ footer html */
    $("#pageHeader").load("header.html");
    $("#pageFooter").load("footer.html");
    /* slick carousel */
    $('.img-area').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });
});