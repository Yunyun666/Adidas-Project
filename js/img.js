$(function () {
    // {"title":"中性 ORIGINALS","descrip":"RIVALRY LOW 经典鞋","imgurl":"../img/goodsList/1-1.jpg","price":"￥899","code":"abc1"}
    $.ajax({
        url:'../data/img.json',
        type:'get',
        dataType:'json',
        success:function (json) {
            var results='';
            $.each(json,function (index,val) {
                results +='<div class="l-display-shoes" code="'+val.code+'"><img src="'+val.imgurl+'" class="l-src"><div class="l-display-pic"><p>'+val.title+'</p><p>'+val.descrip+'</p><p>'+val.price+'</p><i class="iconfont">&#xe93d;&#xe93d;&#xe93d;&#xe93d;&#xe93d;6</i></div></div>'
            })
            $('.l-display').html(results);
        }
    })
})