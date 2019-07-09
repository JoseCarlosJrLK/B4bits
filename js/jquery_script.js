//<?xml version="1.0" encoding="UTF-8"?>
$(function(){
     $('body').show(function(){
         $(function(){
             $("#conteudo").load("base.html");
         });
         $(function(){
             $("#rodape").load("footer.html");
         });
     })
});

$(function(){
    $("#base-img").mouseover(function(){
        $("#base-img").css('background-color','yellow');
    });
})
