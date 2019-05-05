$(document).ready(function(){
    $('.incText').click(function(){
        $('p').css("font-size","30px");
        $('h1').css("font-size","3em");
        $('h2').css("font-size","2.5em");
    })
    $('.nText').click(function(){
        $('p').css("font-size","20px");
        $('h1').css({"font-size":"2em" , "margin" : "0.67em 0"});
        $('h2').css({"font-size":"1.5em" , "margin" : "0.75em 0"});
    })
    $('.decText').click(function(){
        $('p').css("font-size","15px");
        $('h1').css("font-size","1.5em");
        $('h2').css("font-size","1em");
    })
})