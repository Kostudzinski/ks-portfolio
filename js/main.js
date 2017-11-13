'use strict';

$(document).ready(function () {
    intro();
    showLogo();
    burgerMenu();
    scrollSlow();
    showSections();
    showText();
    parallax();
    showIcons();
    sliderReady();
});

$(window).scroll(function () {
    showLogo();
    showSections();
    showText()
    showIcons();
});

function intro() {
    $('#clouds').addClass('move-clouds');
    $('#paint').addClass('move-paint');
    $('.black-cover').addClass('show-black');
    setTimeout(showName, 3000);
    setTimeout(designerDeveloper, 5000);
    setTimeout(burgerMove, 6500);
    setTimeout(showTumblr, 7500);
    setTimeout(showGit, 8200);
    setTimeout(showLinked, 8900);
    setTimeout(showArrow, 9500);
}

function showName() {
    $('.name').addClass('show-letters');
}

function designerDeveloper() {

    $('.ml5').addClass('show-letters');

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.ml5 .line',
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 1000
        }).add({
            targets: '.ml5 .line',
            duration: 600,
            easing: "easeOutExpo",
            translateY: function (e, i, l) {
                var offset = -0.625 + 0.625 * 2 * i;
                return offset + "em";
            }
        }).add({
            targets: '.ml5 .ampersand',
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        }).add({
            targets: '.ml5 .letters-left',
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=300'
        }).add({
            targets: '.ml5 .letters-right',
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        }).add({
            targets: '.ml5',
            opacity: 1,
            duration: 600,
            easing: "easeOutExpo",
            delay: 1000
        });

}

function burgerMenu() {
    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
        $('.navigation').toggleClass('show-nav');
        setTimeout(addMargin, 1000)
    });
}

function addMargin() {
    $('.nav-item').toggleClass('add-margin');
}

function burgerMove() {
    $('.nav-icon').addClass('move-burger');
    $('.eng').addClass('show-letters');
}

function showTumblr() {
    $('.tumblr').addClass('show-letters');
}

function showGit() {
    $('.github').addClass('show-letters');
}

function showLinked() {
    $('.linked').addClass('show-letters');
}

function showArrow() {
    $('#scroll-down').addClass('arrow-animation')
}

function showLogo() {

    if ($(window).scrollTop() >= 400) {
        $('.main-logo').addClass('show-letters');

    } else {
        $('.main-logo').removeClass('show-letters');
    }
};

function scrollSlow() {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        console.log(this.hash);
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500,
                //                              function(){
                //   
                //        // Add hash (#) to URL when done scrolling (default click behavior)
                //        window.location.hash = hash;
                //      }
            );
        } // End if
    });
};

function showSections() {
    var header = $(".header");
    var position = header.position();
    var header2 = $(".header2");
    var position2 = header2.position();
    var header3 = $(".header3");
    var position3 = header3.position();
    var header4 = $(".header4");
    var position4 = header4.position();
    var input1 = $(".input1");
    var input1_position = input1.position();    
    var input2 = $(".input2");
    var input2_position = input2.position();
    

    if ($(window).scrollTop() >= position.top - 400) {

        header.addClass('show-letters');

    } else {
        header.removeClass('show-letters');

    }
    if ($(window).scrollTop() >= position2.top - 400) {

        header2.addClass('show-letters');

    } else {
        header2.removeClass('show-letters');

    }
    if ($(window).scrollTop() >= position3.top - 400) {

        header3.addClass('show-letters');

    } else {
        header3.removeClass('show-letters');

    }
    if ($(window).scrollTop() >= position4.top - 400) {

        header4.addClass('show-letters');

    } else {
        header4.removeClass('show-letters');

    }
    
    if ($(window).scrollTop() >= input1_position.top - 400) {
        console.log('test1');
        input1.addClass('show-input1');

    } else {
        console.log('test2');
        input1.removeClass('show-input1');

    }
    
    if ($(window).scrollTop() >= input2_position.top - 400) {
        
        input2.addClass('show-input2');

    } else {
        input2.removeClass('show-input2');

    }
};

function showText() {
    var text = $('.text-about-me')
    var text_position = text.position();
    if ($(window).scrollTop() >= text_position.top - 400) {

        text.addClass('show-text');

    } else {
        text.removeClass('show-text');
    }

    if ($(window).scrollTop() >= text_position.top - 240) {

        $('.CV').addClass('show-text');

    } else {
        $('.CV').removeClass('show-text');



    }
};

function parallax() {
    window.addEventListener('scroll', parallax, false);
    var backgroundTop = $('.logo-back');
    backgroundTop.css({
        bottom: -(window.pageYOffset / 3) + "px"
    });

};

function showIcons() {
    var icons = $('.code-programs');
    var position = icons.position();
    if ($(window).scrollTop() >= position.top - 400) {
        icons.each(function (index) {
            var element = $(this);
            setTimeout(function () {
                element.addClass("show-icons");
            }, index == 0 ? 0 : 500 * index);
        })
    }
};

function sliderReady() {

var slider = $('#slider');

var slideShow = $('.slide-show'); 

var slideCount = slideShow.children().length;

var slideWidth = 100/slideCount;

var slideIndex = 0;

    
//        Ustawianie szerokosci kontenera
    slideShow.css('width' , slideCount* 100 + '%');
    
//        Ustawianie marginesow i szerokosci pojedynczych slideow
    slideShow.find('.single-slide').each(function(index) {
        var leftPercent = (slideWidth * index) + '%';
        $(this).css('margin-left', leftPercent);
        $(this).css('width', slideWidth + '%');
    });
    
//        Wywolanie funkcji slide na click
    $('.prev-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex -1);
    });
    
    $('.next-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex +1);
    });
    
//        Definicja funkcji Slide
    function slide(newSlideIndex) {
//        Sprawdzamy czy pierwszy i ostatni zeby nie robil nic
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
//        elementy slide caption i przypisanie do zmiennej
        var slideCaption = slider.find('.slider-caption').eq(newSlideIndex);
        
        
//        Zmienna trzymajaca margines lewy do przesuwania kontenera
        var marginLeft = ((newSlideIndex * (-100)) + '%');
        
//        Animacja na slideshow
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
//            Przypisz do slideIndex nowy index Slidu
            slideIndex = newSlideIndex;
            
//            pokaz napis przez fadeIn
            slideCaption.fadeIn('slow');
        });
        
    };
    
};