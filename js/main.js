var $showHide = $('.img-show-hide');
var $show = $('.show');

var $btnMove = $('.img-move');

$showHide.ready(function () {
    $show.hover('js-show');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move');
});

//$(document).ready(function(){
    $("p").hover(function(){
        $("p").css("background-color", "yellow");
        },function(){
        $("p").css("background-color", "pink");
    });
});