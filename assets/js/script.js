$(document).ready(function() {
	$(function(){
		$("#about-image img").fadeIn(1000);
	});
	
	$(".menu-icon").hover(function(){
		if ($(this).css("border-style") == "solid"){
			$(this).children("img").css("-webkit-filter", "invert(0%)");
			$(this).children("img").css("-moz-filter", "invert(0%)");
			$(this).css("background-color", "#eeeeee");
			$(this).css("border-style", "outset");
			if ($(this).attr('id') == "map"){
				$("#map-label").show();
			} else if ($(this).attr('id') == "album"){
				$("#album-label").show();
				$("#album-label").css("margin-right", "100px");
			} else {
				$("#blog-label").show();
				$("#blog-label").css("margin-right", "168px");
			}
		} else {
			$(this).children("img").css("-webkit-filter", "invert(100%)");
			$(this).css("background-color", "");
			$(this).css("border-style", "solid");
			$(".label").hide();
		}
	});
	
	$("#page-nav").change(function(){
		if (document.getElementById("page-nav").value == 7){
			$(this).next().nextAll().slideUp();
			$("#july-posts").slideDown();
		} else if (document.getElementById("page-nav").value == 12){
			$(this).next().nextAll().slideUp();
			$("#december-posts").slideDown();
		}
	});
});