$(document).ready(function () {
    
    $(window).scroll(function () { 
        var windowTop = $(window).scrollTop();

        var offset = $("#test").offset();
        var top = offset.top;
        var left = offset.left;

        //console.log("元素" + top);
        //console.log("視窗" + windowTop);

        if (windowTop > top){
            //console.log("執行")
            $("#test").animate({
                num : 999
            },{
                duration: 2000,
                step: (now) => {
                    $("#test").text(Math.floor(now));
                }
            })
        }
        
    });
    
});