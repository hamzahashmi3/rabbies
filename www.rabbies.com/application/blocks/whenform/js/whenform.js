$(document).ready(function(){ 
    $(".launch-booking-widget").on("click", function(e) {
      e.preventDefault();
      var $form = $(this).parents(".booking-widget").find(".form");
      $form.removeClass("hidden-xs").addClass("slide-mobile");
      $form.css({
        "margin-top": ($form.height() * -1) + "px"
      });
      $form.animate({
        "margin-top": 0
      }, "slow");
	 
    });
	 $(".toggle-close").on("click", function(e) {
      e.preventDefault();
      var $form = $(this).parents(".booking-widget").find(".form");
      $form.animate({
        "margin-top": ($form.height() * -1) + "px"
      }, "slow");
	  //stops bonkers things happening when window is resized.
 $( window ).resize(function() {
  $( ".form" ).removeAttr("style");
  $form.removeClass("slide-mobile").addClass("hidden-xs");
});
	});
 });
var x2WebTracker = {};
x2WebTracker.generateKey = function () {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var key = '';
    for(var i = 0; i < 32; ++i) { 
        key += chars.charAt (parseInt (Math.floor (Math.random () * chars.length)));
    }
    //console.log ('key = ' + key); 
    return key;
};
x2WebTracker.setKeyCookie = function (key) {
  
 //  if (document.domain.split('.').length > 2)
   //     var domain = document.domain.replace (/^[^.]*/, '');
   // else
        var domain = 'rabbies.com';//document.domain;
    document.cookie = "x2_key=" + key + 
        ";expires=" + (new Date (+new Date () + 31556940000)).toGMTString () +
        ";path=/;domain=" + domain+";";

};
x2WebTracker.setKeyCookieHiddenField = function (key) {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            var hiddenFields = document.getElementsByName ('x2_key');
            if (hiddenFields.length > 0) {
                var hiddenField = hiddenFields[0];
                hiddenField.setAttribute ('value', key);
            }
        }
    }
};
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
if(document.cookie.indexOf('x2_key=') == -1){
var rabKey = (x2WebTracker.generateKey());
	x2WebTracker.setKeyCookieHiddenField(rabKey);
	x2WebTracker.setKeyCookie(rabKey);
}else{
	var ckKey = getCookie("x2_key");
	x2WebTracker.setKeyCookieHiddenField(ckKey);
}