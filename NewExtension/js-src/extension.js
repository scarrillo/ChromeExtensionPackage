/**
 * @author: shawn.carrillo+chrome@gmail.com
 * date: 2012.07.15
 */
goog.provide("Extension");
/**
 * Example Extension
 * @constructor
 */
Extension = function() {
	utils.log("Extension constructor");
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