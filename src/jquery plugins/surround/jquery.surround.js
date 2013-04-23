; (function($) {
  $.fn.surround = function() {
    return this.each(function() {
	  var $this = $(this);
	  $this.wrap('<div class="ui-widget"></div>');
	  $this.addClass('ui-widget-content fps-widget-content ui-corner-bottom');
	  var title = $this.attr('title') || ' '; // that "space" is an alt+0160
	  var h3 = $('<h3></h3>')
	    .addClass('ui-widget-header fps-widget-header ui-corner-top')
	    .text(title);
	  $this.before(h3);
	});
  };
})(jQuery);