$(document).ready(function() {
	$(function(){
		$("#about-image img").fadeIn(1000);
	});
	
	$(".menu-icon").hover(function(){
		if ($(this).css("border-style") == "solid"){
			$(this).children("img").css("-webkit-filter", "invert(0%)");
			$(this).children("img").css("filter", "invert(0%)");
			$(this).children("img").css("opacity", "0.7");
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
			$(this).children("img").css("filter", "invert(100%)");
			$(this).children("img").css("opacity", "1");
			$(this).css("background-color", "");
			$(this).css("border-style", "solid");
			$(".label").hide();
		}
	});
	
	$("#contact-button").click(function(){
		$(".contact-form").toggle('fold');
		$(".contact-form").css('display','inline-block');
		$("#contact-button").fadeOut();
		$("#buttons-container").fadeIn();
		$("#buttons-container").css('display', 'inline-block');
		$('#buttons-container').children().fadeIn();
	});
	
	$("#submit-button").click(function(){
		$(".contact-form").fadeOut()
		$(".contact-form").css('display','none');
		$("#contact-button").fadeIn();
		$('#buttons-container').children().fadeOut();
		$("#buttons-container").css('display', 'inline-none');
		$("#buttons-container").fadeOut();
	});
	
	$("#cancel-button").click(function(){
		$(".contact-form").fadeOut()
		$(".contact-form").css('display','none');
		$("#contact-button").fadeIn();
		$('#buttons-container').children().fadeOut();
		$("#buttons-container").css('display', 'inline-none');
		$("#buttons-container").fadeOut();
	});
	
	$("#page-nav").change(function(){
		$(document.getElementsByClassName("month-posts")).slideUp();
		if (document.getElementById("page-nav").value == 7){
			$("#july-posts").slideDown();
		} else if (document.getElementById("page-nav").value == 8){
			$("#august-posts").slideDown();
		} else if (document.getElementById("page-nav").value == 9){
			$("#september-posts").slideDown();	
		} else if (document.getElementById("page-nav").value == 10){
			$("#october-posts").slideDown();	
		} else if (document.getElementById("page-nav").value == 11){
			$("#november-posts").slideDown();	
		} else if (document.getElementById("page-nav").value == 12){
			$("#december-posts").slideDown();
		}
	});	
	
	$("#photo-sort").change(function(){
		$(document.getElementsByClassName("photo-cluster")).slideUp();
		if ($("#photo-sort").val() == "date"){
			$("#date-cluster").slideDown();
		} else if ($("#photo-sort").val() == "location"){
			$("#location-cluster").slideDown();
		} else if ($("#photo-sort").val() == "theme"){
			$("#theme-cluster").slideDown();
		}
	});
	
});