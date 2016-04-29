
var opts = { duration: 800, delay: 0, distance: '30px', viewFactor: 0.2, reset: true };

window.sr = ScrollReveal(opts);
sr.reveal('.appear');



/*Scroll transition to anchor*/
$("a.toscroll").on('click',function(e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#")+1);
    $('html, body').animate({
        scrollTop: $('#'+hash).offset().top
    }, 600);
    return false;
});

$('.menu-toggle').click(function(){
	$('#menu').toggleClass('hidden');
})

$(function(){

  // Instantiate MixItUp:

  $('#portfolio').mixItUp();

});

$('#filters').fixedsticky();



