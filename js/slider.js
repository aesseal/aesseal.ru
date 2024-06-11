(function($) {
  $(document).ready(function() {

    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false

    });

    $('.directionNav').flexslider({
      controlNav: false,
      directionNav: true
    });

    $('.controlNav').flexslider({
      controlNav: true,
      directionNav: false
    });

    $('.base-slider').flexslider({
      controlNav: false,
      directionNav: false
    });

    $.each($(".flexslider .slides li img"), function() {
      var newContainer = document.createElement("div");
      var newDiv = document.createElement("div");
      var titleDiv = document.createElement("h1");
      var titleText = $(this).attr('title');
      var altText = $(this).attr('alt');
      $(newContainer).html(titleDiv, newDiv);
      $(newContainer).attr('class', 'caption-container flex-item-caption');
      $(titleDiv).html(titleText);
      $(titleDiv).attr('class', 'flex-header');
      $(newDiv).html(altText);
      $(newDiv).attr('class', 'flex-caption');
      $(this).after(newContainer);
      $(this).after(newDiv);
      $(this).after(titleDiv);
      $(newContainer).append(titleDiv, newDiv);
    });

  });
})(jQuery);
