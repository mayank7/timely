$(document).ready(function () {
   setTimeout(function () {
       $("[data-recordindex='0'] tr td[data-columnid*='projectassignment'] div[id*='trigger-foo']").click();
               var timer = setInterval(function(){
                   try{
                       $('a[id^="ext-element-"]')[0].click();
                       console.info("Click triggered....");
                   }catch(e){
                       console.info("Work done");
                       clearInterval(timer);
                   }
               }, 1000);
    }, 1000);
})