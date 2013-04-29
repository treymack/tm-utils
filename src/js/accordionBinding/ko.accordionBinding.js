; (function($) {
    ko.bindingHandlers.accordion = {
        init: function (element, valueAccessor) {
			var value = valueAccessor();
			var collapsed = (typeof value === 'object') ? ko.utils.unwrapObservable(value.collapsed) : false;
			
            var $element = $(element);
			$element.accordion({
                active: collapsed ? false : 0
              , collapsible: true
              , heightStyle: 'content'
            })
			
			if (typeof value.collapsed === 'function') {
				$element.accordion('option', 'activate', function(event, ui) {
					var collapsed = ui.newPanel.length === 0;
					value.collapsed(collapsed);
				});
			}
        },
		update: function (element, valueAccessor) {
			var value = valueAccessor();
			var collapsed = ko.utils.unwrapObservable(value.collapsed);
			
			$(element).accordion('option', 'active', collapsed ? false : 0);
		}
    };
})(window.jQuery);