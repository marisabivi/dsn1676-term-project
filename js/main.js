var $btnCollapse = $('.collapse');
var $panel = $('.panel');

var $showHide = $('.img-show-hide');
var $show = $('.show');
var $img1 = $('.img1-show')

var $imgMove = $('.img1');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel');
});

$imgMove.on('click', function () {
    $img1.toggleClass('show1');
});

