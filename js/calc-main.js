(function($) {
	$(function() {

		$('input, select').styler();

	});
})(jQuery);



function MakeWizard() {
            $("#SignupForm").formToWizard({ submitButton: 'SaveAccount' })
            $("#makeWizard").hide();
            $("#info").fadeIn(400);
        };



// Запись всех значений чекбоксов в 1 строку
// $(document).ready(function(){
// 	var allInputs = '';
// 	$('#SaveAccount').click(function(){
// 	 $('#SignupForm').find('input:checked').each(function(){
// 		allInputs += $(this).val()+',';
// 	 });
// 	 $('[name=description]').val(allInputs);
// 	}); 
// });  