$( document ).ready(function() {
    
    $("nav ul li").click(function(){
        $(window).scrollTop($(".container").find("."+$(this).attr("custom")).offset().top);
      
    });
    
    
    $(".overlayfood").hover(function(){
        $(this).css("opacity" , "1");
        
    } , function(){
        $(this).css("opacity" , "0");
    });
    
    
    
    $("form").submit(function(e){
        var error=0;
        var inputs=$(this).find("input:not(.btn-primary)");
        for( var i=0 ; i<inputs.length ; i++){

            if($(inputs[i]).val().length <5){
                error++;
            }
        }
        if(error>0){
        
            e.preventDefault();
            alert("PLease Enter valide data")
        }
    })
    
    
    
    
   
    /*$(".food").hover(function(){
        $(this).fadeIn("overlayfood")
        
    } , function(){
        $(this).removeClass("overlayfood")
    });*/
    
    
})
