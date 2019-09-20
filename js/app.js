$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.layer').each(function() {
     var layer = $(this);
     var dataSpeed = layer.data('speed');
     var offsetY = -(scrollTop * dataSpeed);
     var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
     layer.css('transform', translate);
    });
   });