$(document).ready(function () {


    //if clicked outside of the autonav - close
    $(window).click(function() {
        $(".sb1").hide();
        $(".lv1").removeClass("act");
    });

    //if clicked inside the auutonav  -  keep open 
    $(".sb1").click(function (e) {
        e.stopPropagation();
    });

    $(".lv1>a").each(function (index) {
        $(this).click(function (e) {
			e.preventDefault();
			$(".rsb1").hide();
			$(".rlv1").removeClass("act");
            $(".lv1").eq(index).toggleClass("act");
            $(".lv1").not($(".lv1").eq(index)).removeClass("act");
            $(".sb1").eq(index).toggle();
            $(".sb1").not($(".sb1").eq(index)).hide();
            return false;
        });
    });
  //  $(".lv2>a, .lv3>a").each(function () {
		$(".sb1 .has-sub>a").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
			$(this).toggleClass("open");
            $(this).siblings("ul").slideToggle("fast");
            return false;
        });
    });
	$('.nav-toggle').click(function() {
      $('.nvleft>ul').slideToggle("slow");
	  $('ul.nav-right').slideToggle("slow");
    });
	$('.icon-cross').click(function() {
        	$(".sb1").hide();
			$(".lv1").removeClass("act");
    });




});