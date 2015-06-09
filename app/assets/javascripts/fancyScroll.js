(function() {
  var fancyScroll = function() {
    $('a[href^="#"]').on('click',function(event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
      'scrollTop': $target.offset().top
      }, 1500,'swing');
    });
  };

  $(function() {
      fancyScroll();
  });

})();