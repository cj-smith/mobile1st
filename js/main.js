
$(document).ready(function(){

	console.log('The js file is attached.');

	$('input[value="moveright"]').click( function(){ 
		$('.main').addClass( "displaced",1000 );
	})

	$('li').click( function(){ 
		$('.main').removeClass( "displaced",500 );
	})

	console.log('After the function.');
});

