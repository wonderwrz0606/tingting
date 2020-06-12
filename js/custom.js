/**
 * Read the background color from an existed element
 */
$(document).ready(function() {
    var $headerDiv = $('#header-block');

    if ( $headerDiv.length > 0){
        $('nav').css("background-color", $headerDiv.css("background-color"));
    }
});


/**
 * Using magnific-popup to zoom image on click
 */
$("a[name=image-zoomer]").magnificPopup({
    type: 'image',
    closeBtnInside: false,
closeOnContentClick: false,

callbacks: {
  open: function() {
    var self = this;
    self.wrap.on('click.pinhandler', 'img', function() {
      self.wrap.toggleClass('mfp-force-scrollbars');
    });
  },
  beforeClose: function() {
        this.wrap.off('click.pinhandler');
    this.wrap.removeClass('mfp-force-scrollbars');
  }
},
 
image: {
        verticalFit: false
    }
});