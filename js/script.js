jQuery('document').ready(function($){

var menuBtn=$('.menu-icon'),
menunavegation=$('.navigation ul');
menuBtn.click(function(){
    if(menunavegation.hasClass('show')){
        menunavegation.removeClass('show')
    }else{
        menunavegation.addClass('show');
    }

   
})
$(document).ready(function(){
    $(".menu-icon").on("click",function(){
        if(menunavegation.hasClass('show')){
            $(".main").css("padding","30em 2em");
        }else{
            $(".main").css("padding","12em 2em");
        }
        
    });
});

});


