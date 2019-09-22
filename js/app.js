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
$('img').on('mouseover', function() {
    var self = this,
        i = 0,
        images = $(this).data('mouseover').split(/\s+/);

    (function nextImage() {
        var next = images[i++ % images.length].split('#');
        $(self).data('timeout', setTimeout(function() {
            self.src = next[0];
            nextImage();
        }, next[1] || 200));
    })();

}).on('mouseout', function() {
    clearTimeout($(this).data('timeout'));
    this.src = $(this).attr('src');
});