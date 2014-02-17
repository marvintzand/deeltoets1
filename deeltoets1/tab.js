$(document).ready(function() {
    $(".tab").hide();

    	$("input[name$='aanmelden']").click(function() {
        	var test = $(this).val();
			$(".tab").hide();
        	$(".tab[data-period='" + test + "']").show();
    	});	
});