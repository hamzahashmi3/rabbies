$(document).ready(function () {
    $(".rlv1>a").each(function (index) {
        $(this).click(function (e) {
			e.preventDefault();
			$(".sb1").hide();
			$(".lv1").removeClass("act");
            $(".rlv1").eq(index).toggleClass("act");
            $(".rlv1").not($(".rlv1").eq(index)).removeClass("act");
            $(".rsb1").eq(index).toggle();
            $(".rsb1").not($(".rsb1").eq(index)).hide();
            return false;
        });
    });
   // $(".rlv2>a").each(function () {
	   $(".rsb1 .rhas-sub>a").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
			$(this).toggleClass("open");
            $(this).siblings("ul").toggle("fast");
            return false;
        });
    });
});