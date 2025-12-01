//スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 700, "swing");
        return false;
    });
});

//ハンバーガーメニュー
$(function () {
    $(".hamburger-btn").click(function () {
        $("header").toggleClass('open');
    });
    $("header a, mask").click(function () {
        $("header").removeClass('open');
    });
});

//スクロールするとアイテムがじわっと表示
//aboutアイテム
$(window).scroll(function () {
    $('.scroll-blur-item').each(function () {
        var scroll = $(window).scrollTop();
        var target = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > target - windowHeight + 160) {
            $(this).addClass('blur-item');
        }
    });
});

//Q&Aアコーディオン
$(function () {
    $('.ac-item .question-box').click(function () {
        $(this).next('.answer-box').slideToggle();
        $(this).toggleClass('ac-open');
    });
});


//トップへ戻る
$(function () {
    let pagetop = $(".to-top");
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});