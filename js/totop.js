function totop() {
    $('<div>').addClass('to-top-btn').text('Наверх').appendTo('#container');
    var toTopBtn = $('.to-top-btn');
    var index;
    var jspPanes;
    toTopBtn.hide();
    jspPanes = $('.jspPane').toArray();

    $('.menu-toc > li > a').click(function() {
        //var jspPanesArr = 0;
        $(this).parent().addClass('current');
        index = $(this).parent().index();
        console.log('index: ' + index);
        //jspPanes = $('.jspPane').toArray();
        setTimeout(wScroll, 100);
    });
    //=========================

    $('#bb-nav-next').click(function() {
        $('.menu-toc-current').removeClass('current').next('li').addClass('current');
        toTopBtn.hide();
        jspPanes = [];
        jspPanes = $('.jspPane').toArray();
        index += 1;
        console.log('index: ' + index);
        // setTimeout(wScroll, 100);
    });
    $('#bb-nav-prev').click(function() {
        $('.menu-toc-current').removeClass('current').prev('li').addClass('current');
        toTopBtn.hide();
        jspPanes = [];
        jspPanes = $('.jspPane').toArray();
        index -= 1;
        console.log('index: ' + index);
        // setTimeout(wScroll, 100);
    });


    function wScroll() {
        $(window).scroll(function() {
            var allPanes = document.getElementsByClassName('jspPane');
            console.log(allPanes);
            var scrollTop, height, rel;
            var jspDrag = [];
            var jspDrag = $('.jspDrag').toArray();
            jspDrag.length = 1;

            if (index >= jspDrag.length) {
                index = jspDrag.length - 1;
                scrollTop = Math.abs(parseInt(jspDrag[index].style.top, 10));
                height = $('.jspDrag').height();
                rel = height / scrollTop
                //console.log(rel);
                if (rel < 2) {
                    toTopBtn.fadeIn();
                } else {
                    toTopBtn.fadeOut();
                };
            } else {
                scrollTop = Math.abs(parseInt(jspDrag[index].style.top, 10));
                height = $('.jspDrag').height();
                rel = height / scrollTop
                //console.log(rel);
                if (rel < 2) {
                    toTopBtn.fadeIn();
                } else {
                    toTopBtn.fadeOut();
                };
            };
            var jsDrag = $('.jspDrag').position().top;
            //console.log(jspPanes);
            // console.log($('.jspDrag').toArray());
            var currentPaneIndex = jspPanes[index];
            // if (true) {
            //   for (var i; i < jspPanes.length; i++) {
            //     scrollTop = Math.abs(parseInt(jspPanes[i].style.top, 10));
            //     console.log(scrollTop);
            //   };
            // }
            // if (currentPaneIndex) {
            //     console.log('index: ' + index);
            //     console.log('length: ' + jspPanes.length);
            //     console.log('currentPaneIndex: ' + currentPaneIndex);
            //     console.log(jspPanes);
            //     scrollTop = Math.abs(parseInt(jspPanes[index].style.top, 10));
            //     console.log(scrollTop);
            //     if (scrollTop > 500) {
            //         toTopBtn.fadeIn();
            //     } else {
            //         toTopBtn.fadeOut();
            //     };
            // } else if (jspPanes) {
            //   index = jspPanes.length - 1;
            //   scrollTop = Math.abs(parseInt(jspPanes[index].style.top, 10));

            // } else {
            //     scrollTop = Math.abs(parseInt($('.jspPane').position().top));
            //     console.log(jspPanes);
            //     console.log(scrollTop);
            //     if (scrollTop > 500) {
            //         toTopBtn.fadeIn();
            //     } else {
            //         toTopBtn.fadeOut();
            //     };
            // };
        });
    };
    //=============================

    // $(window).scroll(function() {
    //   var jspPanes = $('.jspPane').toArray();
    //     var paneIndex = $('.menu-toc-current').index();
    //     var currentJspPane = jspPanes[paneIndex];
    //     var scrollTop = Math.abs(parseInt(jspPanes[paneIndex].style.top, 10));

    //     if (scrollTop > 500) {
    //       toTopBtn.fadeIn();
    //     } else {
    //       toTopBtn.fadeOut();
    //     }

    //   //var scrollTop = $('.jspDrag').style.top;
    // });

    toTopBtn.click(function() {
        $('.jspDrag').css({
            'top': '0'
        });
        $('.jspPane').animate({
            'top': '0'
        }, 1000);
        toTopBtn.fadeOut();
        return false;
    });
};
$(document).ready(totop);