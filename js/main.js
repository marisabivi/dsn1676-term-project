var $btnCollapse = $('.collapse');
var $panel = $('.panel');

var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img')
var $lb = $('.lightbox');
var $lbHeading = $('.lightbox-heading');
var $lbDesc = $('.lb-desc');

var $deadEnd =$('.phone');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel');
});

$thumbs.on('click', 'a', function (e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lbImg.attr('src', big);
    $lb.attr('data-state', 'visible');
    $lbHeading.html($(this).attr('data-title'));
    $lbDesc.html($(this).attr('data-desc'));
});

$deadEnd.waypoint(function () {
   $deadEnd.toggleClass('js-active');
}, { offset: '40%' });
