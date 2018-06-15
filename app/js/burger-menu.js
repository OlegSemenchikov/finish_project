$(document).ready(function(){
    var burger = $('.burger-icon');
    burger.click(function() {
        burger.toggleClass('active');
        return false;
    });
    $('#burger-icon').click(function() {
        $('.menu__nav').toggleClass('menu-visible');
    });

    $('.menu__item').click(function() {
        $('.menu__nav').toggleClass('menu-visible');
        burger.toggleClass('active');
    });
});
