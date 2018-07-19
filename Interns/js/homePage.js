$(document).ready( function() {$('#myCarousel').carousel({interval:   4000 }); var clickEvent = false; $('#myCarousel').on('click', '.nav a', function() {clickEvent = true; $('.nav li').removeClass('active'); $(this).parent().addClass('active'); }).on('slid.bs.carousel', function(e) {if(!clickEvent) {var count = $('.nav').children().length -1; var current = $('.nav li.active'); current.removeClass('active').next().addClass('active'); var id = parseInt(current.data('slide-to')); if(count == id) {$('.nav li').first().addClass('active'); } } clickEvent = false; }); });
$('.navbar-collapse ul li a').click(function(){$('.navbar-toggle:visible').click(); });
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}
preloadImage("https://i.imgur.com/1XT7SAc.png");
preloadImage("https://i.imgur.com/vPANkgY.png");

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});
