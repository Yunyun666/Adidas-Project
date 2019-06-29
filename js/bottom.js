$(function(){
    $('.bottomPicshow i').on({
        mouseenter:function(){
            var index = $('.bottomPicshow i').index(this);
            // console.log(index);
            $(this).css('color','#666')
            $('.bottomShow span').eq(index).fadeIn('easing',function(){
                $(this).eq(index).addClass('show').siblings().removeClass('show');
            });
           
        },
        mouseout:function(){
            var index = $('.bottomPicshow i').index(this);
            $(this).css('color','#000')
            $('.bottomShow span').eq(index).fadeOut('easing',function(){
                $(this).eq(index).removeClass('show');
            });
        }
    })
 
})