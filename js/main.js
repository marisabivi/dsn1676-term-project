var $btnCollapse = $('.collapse');
var $panel = $('.panel');

var $thumbs = $('.thumbnails');
var $bigImage = $('.big-img');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel');
});

$thumbs.on('click', 'a' function(e) {
    e.preventDefault();
    
});

