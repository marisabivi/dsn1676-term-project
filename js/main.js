var $btnCollapse = $('.collapse');
var $panel = $('.panel');

var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img')
var $lb = $('.lightbox');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel');
});

$thumbs.on('click', 'a', function (e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lbImg.attr('src', big);
    $lb.attr('data-state', 'visible') 
});

