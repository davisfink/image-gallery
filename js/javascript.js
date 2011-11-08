$(function() {
	var images = [
	"images/bilde.jpeg",
	"images/chewie.jpg",
	"images/bass-effect.jpg",
	"images/black-jeans.jpg",
	"images/Carnivore.jpg",
	"images/cat.jpg"
	];

	var $list    = $('<ul>'),
	    $navList = $('<ul>');

	$.each(images, function(i,v) {
		$list.append('<li><img src="'+v+'" alt="picture!"></li>');
		$navList.append('<li><a href="#" data-page="'+(i+1)+'">'+(i+1)+'</a></li>');
	});

	$('#images').prepend($list);
	$('#nav').prepend($navList);
	$('#slider').slider();
	
});

$.fn.slider = function (o) {
	var d = { speed: 750, easing: 'easeInOutQuint', callback: null };
	var o = jQuery.extend(d, o);
	
	var width       = 0;
	var sliderWidth = 0;
	var $wrap       = $(this);
	var $images     = $wrap.find('#images');
	var $slider     = $images.find('> ul');
	var $slides     = $slider.find('> li');
	
	$slider.css('position', 'absolute');
	setWidths();

	function setWidths() {
		width = $(window).width();
		sliderWidth = width * $slides.length;

		$images.width(width);
		$slider.width(sliderWidth);
		$slides.width(width);
	}
	
	function slideTo(pg, updateInterface) {
		var x = width * (pg - 1);

		$slider.filter(':not(:animated)').animate({
			left: '-' + x
		}, o.speed, o.easing, function() {
			if (jQuery.isFunction(updateInterface)) { updateInterface(); }
			if (jQuery.isFunction(o.callback)) { o.callback(); }
		});
	}
	
	$('#nav a').click(function() {
		var $el = $(this);
		var targetPage = $(this).data('page');

		slideTo(targetPage, function() {
			$el.parent().parent().find('a').removeClass('current');
			$el.addClass('current');
		});
		return false;
	});

	$(window).resize(function() {
		$('#nav a:first').click();
		setWidths();
	});

	$('#nav a:first').click(); // start it off
	
}



// $(function() {
// 	$('a.lightbox').lightBox(); // Select all links with lightbox class
// });