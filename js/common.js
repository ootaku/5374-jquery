$(function(){
	$('.sec-title').on('click', 'a', function(e){
		e.preventDefault();
		$(this).parent().next('div').slideToggle();
	});
});

$(function() {
    $("#hinmoku").change(function() {
       var myValue = $('#hinmoku option:selected').val();
           $("#hinmoku2").text(myValue);
     });
});
