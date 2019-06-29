

//mian=-left实现下拉筛选效果
$('.l-main-left h4').click(function () {
    var index = $('.l-main-left h4').index(this)
    $('.l-content').eq(index).toggle()
    if ($('.l-content').eq(index).css('display')=='block') {
        $(this).find('i').html('&#xe607;')
    }
    else{
        $(this).find('i').html('&#xe60d;')
    }
})
//mian-right排序方式
$('.l-select').click(function () {
    $('.l-sort1 ul').toggle()
    if ( $('.l-sort1 ul').css('display')=='block') {
        $('.l-select').find('i').html('&#xe607;')
    }
    else{
        $(this).find('i').html('&#xe60d;')
    }
})
$('.l-select2').click(function () {
    $('.l-sort2 ul').toggle()
    if ( $('.l-sort2 ul').css('display')=='block') {
        $('.l-select2').find('i').html('&#xe607;')
    }
    else{
        $(this).find('i').html('&#xe60d;')
    }
})
// 鼠标移上显示详情以及动画效果
$('.l-display').on("mouseover",".l-display-shoes",function () {
    var index = $(this).index()
    $('.l-display-shoes').eq(index).addClass("l-animate")
})
$('.l-display').on("mouseout",".l-display-shoes",function () {
    var index = $(this).index()
    $('.l-display-shoes').eq(index).removeClass("l-animate")
})
$('.l-display').on("mouseover",".l-src",function () {
    var index = $('.l-src').index(this)
    console.log(index)
    $('.l-display-shoes img').eq(index).attr("src","../img/goodsList/"+index+".jpg" )
})
$('.l-display').on("mouseout",".l-src",function () {
    var index = $('.l-src').index(this)
    $('.l-display-shoes img').eq(index).attr("src","../img/goodsList/1-"+index+".jpg" )
})


