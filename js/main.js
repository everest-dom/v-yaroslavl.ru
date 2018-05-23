console.log('mask');
$('input[name="phone"]').mask("+7(999)999-99-99");

$(document).ready(function(){
	$("#SignupForm").formToWizard({ submitButton: 'SaveAccount' }) 
});

	$('.opinion-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

