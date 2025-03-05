
// Obfuscate email
var taxydr = function(mt) {
    var prefix = [ 109, 97, 105, 108, 116, 111, 58 ];
    var a = [ 105, 97, 107, 108, 97, 109, 112, 97, 110, 111, 115,
              64, 105, 105, 116, 46, 100, 101, 109, 111, 107, 114,
              105, 116, 111, 115, 46, 103, 114 ];
    var prfx = '';
    var ret = '';
    for (var i = 0; i < a.length; i++) {
        ret += String.fromCharCode(a[i]);
    }
    if (mt) {
        for (var i = 0; i < prefix.length; i++) {
            prfx += String.fromCharCode((prefix[i]));
        }
    }
    return prfx + ret;
};

$(document).ready(function() {
  $("a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;

   var headerHeight = $("nav.navbar-fixed-top").height();
   var scrollToPosition = $(hash).offset().top - headerHeight - 10;
   // animate
   $('html, body').animate({scrollTop: scrollToPosition}, 200, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = "" + hash;
       $('html').animate({ 'scrollTop': scrollToPosition }, 0);
     });
  });

  $('#emLn').text(taxydr);
  $('#emLn').attr('href', taxydr(true));

  // $.cookieBar({
  //     fixed: true,
  //     bottom: true
  // });
});
