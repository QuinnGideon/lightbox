$(document).ready(function(){

	$('#button').click(function(){
		$('#grey').show();
	})

	$('#button').click(function(){
		$('#button').fadeOut(1000);
	})

	$('#grey').click(function(){
		$('#grey').hide();
	})

	$('#grey').click(function(){
		$('#button').hide();
	})

	$('#grey').click(function(){
		$('#button').fadeIn(2000);
	})

})