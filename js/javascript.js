// function setfocus(el) 
// {
// 	$('#pics img.clicked').fadeOut(250, function(){
// 		$(this).removeClass('clicked').fadeIn(250);
// 	});
// 	setTimeout(function(){
// 		$(el).fadeOut(250, function() {
// 			$(this).addClass('clicked');
// 			$(this).fadeIn(250);
// 			var posX = ($(window).width()/2) - ($(el).width()/2);
// 			var posY = ($(window).height()/2) - ($(el).height()/2);
// 			$(this).css({'top': posY, 'left': posX});
// 		});
// 	}, 125);
// }

$(function() {
	$('a.lightbox').lightBox(); // Select all links with lightbox class
});


function Video()
{
	this.id;
	this.name;
	this.source;
	this.path;
	this.cap_name;
}