var $showHide = $('.img-show-hide');
var $show = $('.show');
var $img1 = $('.img1-show')

var $imgMove = $('.img1');

$imgMove.on('click', function () {
    $img1.toggleClass('show1');
});