$('.love').not('.loved').each(function (index, element) {
    $(this).click(function () {
        var tc = $(this).data('love');
        var me = $(this);
		var favNo = $('.fav-no').text();
		favNo = parseInt(favNo);
        $.ajax({
            url: '/ajax/favourites/add/' + escape(tc) + '/' + escape(token),
            success: function (response) {
                $(me).addClass("loved");
				favNo = favNo + 1;
				$('.fav-no').text(favNo);

            }
        });
    });
});