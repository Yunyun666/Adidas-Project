require.config({
    baseUrl: 'js',
    paths: {
        'jquery': ['http://libs.baidu.com/jquery/2.0.3/jquery', 'jquery-1.8.3.js'],
    }
});


require(['jquery'], function ($) {
$(function () {
    /********************************头部 ***************************/
    // 页面头部的js(index.js)

    //点击分类标签(男子、女子、儿童等)，展示对应的菜单
    $('.head-nav-l a').on({
        mouseenter: function () {
            $('.head-nav-show').slideDown({
                duration: 10,
                easing: 'swing',
                complete: function () {
                    $(this).mouseenter(function () {
                        $(this).css('position', 'fixed')
                    });
                }
            });

        },
        mouseout: function () {
            $('.head-nav-show').slideUp();
        },
    });
    // $('.head-nav-l a').mouseenter(function(){
    //     // var index = $(this).index();
    //     $('.head-nav-show').slideDown();
    // })

    // 点击a标签出现对应的内容

    $('.subList a').click(function () {
        var index = $(this).index();
        $('.sub-cont').eq(index).addClass('show').siblings().removeClass('show');
    })

    // $('.test').click(function(){ 
    //     var index = $(this).index();
    //     $('sub-cont').eq(index).css('display','none');
    // })
})

/********************************底部 ***************************/
// 页面底部的js(bottom.js)
$('.bottomPicshow i').on({
    mouseenter: function () {
        var index = $('.bottomPicshow i').index(this);
        // console.log(index);
        $(this).css('color', '#666')
        $('.bottomShow span').eq(index).fadeIn('easing', function () {
            $(this).eq(index).addClass('show').siblings().removeClass('show');
        });

    },
    mouseout: function () {
        var index = $('.bottomPicshow i').index(this);
        $(this).css('color', '#000')
        $('.bottomShow span').eq(index).fadeOut('easing', function () {
            $(this).eq(index).removeClass('show');
        });
    }
})
})