/**
 * Created by sist on 2016-01-13.
 */
$(document).ready(function(){
   $(window).on("scroll",function(){
       //변수 ab에 스크롤한 만큼의 거리를 저장
       var ab=$(this).scrollTop();
       $("p").text(ab);
   }) ;
});