/*
 Extension Compiled using ChromeExtensionPackage: 
 https://github.com/scarrillo/ChromeExtensionPackage
*/
function a(b,c){if(void 0===console[c])console.log(b);else console[c](b)};function d(){a("Extension constructor");this.a()}d.prototype={name:chrome.app.getDetails().name,version:chrome.app.getDetails().version,a:function(){a("Extension: "+this.name+" - "+this.version,"info")}};new d;