(function($){

  $.fn.fadeText = function(){

    var fade_text = $(".fade_text");
    var quoteIndex = -1;

    function showNextQuote() {
      ++quoteIndex;
      fade_text.eq(quoteIndex % fade_text.length)
      .fadeIn(900)
      .delay(900)
      .fadeOut(900, showNextQuote);
    }

    showNextQuote();
  };

  $.fn.frontFadeText = function(){
    var front_fade_text = $('.front-fade');
    var fadeIndex = -1;

    function showNextText() {
      ++fadeIndex;
      front_fade_text.eq(fadeIndex % front_fade_text.length)
      .fadeIn(900)
      .delay(900)
      .fadeOut(900, showNextText);
    }
    showNextText();
  };

  $(document).ready(function(){
    $('.preface').fadeText();
    $('.wavelower').frontFadeText();
  });
})(jQuery);
