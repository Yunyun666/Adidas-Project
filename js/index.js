// $(function () {
    /********************************头部 ***************************/
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


    /********************************购买享受的权益*****************************/
    // 点击a标签出现对应的内容

    // $('.subList a').click(function () {
    //     var index = $(this).index();
    //     $('.sub-cont').eq(index).addClass('show').siblings().removeClass('show');
    // })

    // $('.test').click(function(){ 
    //     var index = $(this).index();
    //     $('sub-cont').eq(index).css('display','none');
    // })

    /********************************男子主推轮播图*****************************/
    var index = 0;
    setInterval(autoPlay,1500) ;
    function autoPlay() {
        if(index==1){
            // index=1;
            $('.boyBans-main').animate({left: index*'-1242px'}, 1500);
            console.log(index);
        }else{
            index++;
            console.log(index);
            // setTimeout(
            //     function(){
                    $('.boyBans-main').animate({left: index*'-1242px'}, 1500)
            //     },
            // 2000)
        } ;
        // if(index==1) {
        //     $('.boyBans-main').animate({left: '-1242px'}, 1500);
            
        // }else{
        //     console.log(index);
        //     setTimeout(
        //         function(){
        //             $('.boyBans-main').animate({left: '0'}, 1500)
        //         },
        //     2000)
        // }   
    }
    console.log(index);
   
// })

/********************************banner轮播图*****************************/
//banner轮播图
var mySwiper = new Swiper('.swiper-container', {
    // autoplay:true,//等同于以下设置
    // autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,
    // },
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    //如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})