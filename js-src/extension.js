goog.provide("Extension");
/**
 * Example Extension
 * @constructor
 */
Extension = function() {
	this.doLoaded();
}

Extension.prototype = {
	name : chrome.app.getDetails().name,
	version : chrome.app.getDetails().version,
	doLoaded : function () {
		utils.info("Extension: "+ this.name+" - "+this.version);
	}
}

// Export ext in externs.js to allow global access
var ext = new Extension();