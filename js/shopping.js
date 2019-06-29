var z_swiper1 = document.getElementsByClassName('z_swiper-wrapper')[0];

 var timer = setInterval(aoToplay,1000);
	var index = 0;
 function aoToplay(){
     if(index==4){
         index=1;
         z_swiper1.style.left=0;

     }else{
        index++;
     }
 animate(z_swiper1,{left:-1235*index},50);
 }



//获取元素:
var Toleft = document.getElementById('z_btn_left');
var Toright = document.getElementById('z_btn_right');

Toright.onclick = function(){
    // index++;
    if(index=4){
        index=1;
        z_swiper1.style.left=0;
    }else{
        index++;
    }
}

// Toleft.onclick = function(){
//     index++;
//     if(index=4){
//         index=1;
//         z_swiper1.style.left=0;
//     }else{
//         index--;
//     }
// }






// // 获取所有元素:
// var banner = $id("banner");
// var toLeft = $id("toLeft");
// var toRight = $id("toRight");
// var arr =$id("arr");

// banner.onmouseover = function(){
//     timer=clearInterval(timer);
//     animate(arr,{opacity: 100},20)
// }

// banner.onmouseout = function(){
//     timer = setInterval(aoToplay,1000);
//     animate(arr,{opacity:0},20)
// }


// toLeft.onclick = function(){
//     if(index == 4){
//          index=0;
//          img.style.left=0;
//     }else if(index==0){
//         index=0;
//     }else{
//         index--;
//     }
//     for(var i =0; i<bannerLi.length; i++){
//         bannerLi[i].className = "";
//     }
//      animate(img,{left:-810*index},20);
//      bannerLi[index == 4 ? 0 : index].className = "active";
// }

// toRight.onclick = function(){
// //		index++;
//     if(index==4){
//         index=1;
//     }else if(index==3){
//         index=3;
//     }
//     else{
//         index++;
//     }
//     for(var i =0; i<bannerLi.length; i++){
//         bannerLi[i].className = "";
//     }
//      animate(img,{left:-810*index},20);
//      bannerLi[index == 4 ? 0 : index].className = "active";
// }


















































// var timer = setInterval(aoToplay,1000);
// 	var index = 0;
// 	function aoToplay(){
//         if(index==4){
//         	index = 1;
//         	img.style.left = 0;
//         }else{
//         	index++;
//         }
// 		animate(img,{left:-810*index},20);
// 		for(var i =0; i<bannerLi.length; i++){
// 			bannerLi[i].className = "";
// 		}
// 	    bannerLi[index == 4 ? 0 : index].className = "active";
// 	}


