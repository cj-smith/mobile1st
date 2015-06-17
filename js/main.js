
$(document).ready(function(){

	console.log('The js file is attached.');

	$('input[value="moveright"]').click( function(){ 
		$('.main').addClass( "displaced",200 );
	})

	console.log('After the function.');
});

