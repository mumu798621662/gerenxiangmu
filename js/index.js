// let daohang = document.querySelector('.daohang');
//  let lis = document.querySelectorAll('.lis');
//  let ab = document.querySelectorAll('.ab');
//  for (let i=0;i<lis.length;i++){
//     lis[i].onmouseover=function(){
//           ab[i].style.fontSize='20px';
//         }
//      lis[i].onmouseout=function(){
//          ab[i].style.fontSize='18px';
//      }
//
//      }
//
// // banner
// let bannerbox = document.querySelector('.banner-box');
// let lefts = bannerbox.querySelector('.banner-left');
// let rights = bannerbox.querySelector('.banner-right');
// let mid = bannerbox.querySelector('.banner-mid');
// let mid1 = document.querySelector('.banner-mid1')
// let yuan = document.querySelectorAll('.smallyuan');
// let li = mid.querySelectorAll('li');
// console.log(li);
//
//
// let i=0;
// lefts.onclick=function(){
//     if (i==2) {
//         // mid1.style.left=0+'px';
//        return;
//     }
//     i++;
//    // mid1.style.left=-1080*i+'px';
//     animate(mid1,{left:-1080*i})
// };
// rights.onclick=function(){
//     if (i==0) {
//         // mid1.style.left=-3240+'px';
//        return;
//     }
//     i--;
//     // mid1.style.left=-1080*i+'px';
//     animate(mid1,{left:-1080*i})
// };
//
// let t = setInterval(function(){
//     if (i==2) {
//         i--;
//         animate(mid1,{left:-1080*i});
//     }else if(i!=2){
//         i++;
//         animate(mid1,{left:-1080*i})
//     }
//
// },3000)

$(function(){
  // 头部鼠标移入放大效果
  $('.daohang>li>a').on('mouseover',function(){
      $(this).css({width:90,color:'pink'}).on('mouseout',function(){$(this).css({width:80,color:'#fff'})})
  })


// banner轮播图
let syuan = $('.smallyuan');
syuan.on('mouseover',function(){
    $(this).css('background','pink')
})

syuan.on('mouseout',function(){
        $(this).css('background','#fff')
    })

let lis = $('.banner-mid1 li');
let imgW =lis.outerWidth();
let now = next = 0;
let t = setInterval(function(){
  next++;
    if(next==lis.length){
        next=0;
    }
  lis.eq(next).css('left',imgW)
  lis.eq(next).animate({left:0});
  lis.eq(now).animate({left:-imgW});
   now=next;
},3000)









$('.opc').on('mouseover',function(){
    $(this).css({opacity:0.2}).on('mouseout',function(){$(this).css({opacity:0})})
})


 $('.db1>dd>a').on('mouseover',function(){$(this).css({color:'pink'})}).on('mouseout',function(){$(this).css({color:'#fff'})})
})