var bgImageArray = [
    "squires-lane-1920x1080.jpg",
    "lay-residence-1920x1080.jpg",
    "brick-house-exterior.jpg",
    "stoney-house-exterior-1920x1080.jpg",
    "33-stoney-house.jpg",
    "13-house-exterior.jpg"
];
var base = "/assets/images/hero/";
var secs = 4;

function backgroundSequence() {
    window.clearTimeout();
    var k = 0;

    for (i = 0; i < bgImageArray.length; i++) {
        setTimeout(function(){
            document.getElementById("hero").style.background = "url('" + base + bgImageArray[k] + "') no-repeat center center";
            document.getElementById("hero").style.backgroundSize = "1920px 1080px";
            if ((k + 1) === bgImageArray.length) {
                setTimeout(function() {
                    backgroundSequence()
                }, (secs * 1000))
            } else {
                k++;
            }
        }, (secs * 1000) * i)
    }
}

bgImageArray.forEach(function(img){
    // Cache images, avoiding flash between background replacements
    new Image().src = base + img;
});

$(document).ready(function() {
    // Begin fading background images.
    backgroundSequence();

    // Portfolio slider
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navContainer: ".owl-nav",
        dotsContainer: ".owl-dots",
        responsiveClass: true,
        center: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                autoWidth: true

            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(".owl-item a").on("click", function(e) {
        e.preventDefault();
        
        var imagePath = $(this).attr("href");
        var previewContainer = $("#preview");
        var image = $("#preview img");

        image.attr("src",imagePath);
        previewContainer.css("display", "block");

        $(".close-preview").on("click", function() {
            previewContainer.css("display", "none");
        });
    });
});