$('.sign-up-button').on('click', function() {
	window.alert("We are not currently taking sign-ups.");
	$('.sign-up-button').html("No Sign Ups!")
});

$('.more').hide();

$('.read-less').hide();

$('#1st-read-more').on('click', function() {
	$('#1st-more').slideToggle();
	$('#1st-read-more').hide();
	$('#1st-read-less').show();
});

$('#1st-read-less').on('click', function() {
	$('#1st-more').slideToggle();
	$('#1st-read-less').hide();
	$('#1st-read-more').show();
});

$('#2nd-read-more').on('click', function() {
	$('#2nd-more').slideToggle();
	$('#2nd-read-more').hide();
	$('#2nd-read-less').show();
});

$('#2nd-read-less').on('click', function() {
	$('#2nd-more').slideToggle();
	$('#2nd-read-less').hide();
	$('#2nd-read-more').show();
});