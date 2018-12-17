$(function(){
	$('.cv').hide();

	$('.name-drinkins').click(function(){
		$('.cv-drinkins').slideToggle({duration: 300});
	});

	$('.name-komandor').click(function(){
		$('.cv-komandor').slideToggle({duration: 300});
	});
});
