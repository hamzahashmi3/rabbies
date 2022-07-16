$(document).ready(function() {
    $('.lng-link').click(function(e) {
        e.preventDefault();
		$('ul.lngsb').toggle();
		$('.ccm-block-switch-language-flags').toggleClass("lng-act");	
    });
});
