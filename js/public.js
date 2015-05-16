$(function(){
	$('.box').on('click', function(event) {
		event.preventDefault();
		alert('a');
	});
	$('.box').on('click', function(event) {
		event.preventDefault();
		alert('b');
	});
})