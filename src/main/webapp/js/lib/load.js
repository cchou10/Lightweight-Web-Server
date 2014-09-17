$doLoad = function () {
    $.getJSON('/js/data.json', function(data) {
    	for (var i in data.info) {
    		$.get(data.info[i].path, function(content) {
    	    	// append content to .main
    			$('body').append(content);
    		});
    	}
    });
};
//doLoad();





