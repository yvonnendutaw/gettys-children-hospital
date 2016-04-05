$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$("#images ").vegas({
    cover: true,
    slides: [

        {
            src: "img/image2.jpg"
        },
        {
            src: "img/image3.jpg"
        },
        {
            src: "img/image5.jpg"
        },
        {
            src: "img/image4.jpg"
        }
    ]
});
