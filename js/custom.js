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

/**
* Validation function for Facebook page
*/
$(document).ready(function(){
    $("#access_code_button").click(function(){
      validateAccessCode();
    });

    $('#access_code_input').keypress(function (e) {
      if (e.which == 13) {
        validateAccessCode();
        return false;    //<---- Add this line
    }
    });
});

function validateAccessCode() {
  $inputContainer = $("#access_code_input");
  if($inputContainer.val() == "0106") {
    $('#facebook-access-block').css("display", "none");
    $('#facebook-main-block').css("display", "block");
  }

  $inputContainer.val('');
}