/**
 * @preserve
 * @author: shawn.carrillo+chrome@gmail.com
 * date: 2012.07.15
 */
goog.provide("utils");

utils = {
	DEBUG : true,
	/**
	 * @param {string|Object} message string to print
	 * @param {string=} type optionally pass in a console type: info|debug|warn|error
	 * @description wrapper for console.log(...)
	 * Set the 'static' property DEBUG to false and the closure compiler will see that
	 * the logging code is unreachable and remove ALL calls to utils.log() from the compiled source files
	 */
	log : function(message, type) {
		if(utils.DEBUG !== true) { return; }

		if(console[type] === undefined) { console.log(message); }
		else { console[type](message); }
	},

	info : function(message) {
		utils.log(message, "info");
	},

	debug : function(message) {
		utils.log(message, "debug");
	},

	warn : function(message) {
		utils.log(message, "warn");
	},

	error : function(message) {
		utils.log(message, "error");
	}
}