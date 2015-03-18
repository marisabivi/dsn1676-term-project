var $showHide = $('.img-show-hide');
var $box = $('.box');

var $btnMove = $('.img-move');

$showHide.on('hover', function () {
    $box.toggleClass('js-show');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move');
});
