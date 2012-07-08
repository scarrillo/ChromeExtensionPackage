/*
 Copyright 2012 Shawn Carrillo
 @author: shawn.carrillo+chrome@gmail.com
 date: 2012.08.12
 @description Extension Name
*/
/*

 @author: shawn.carrillo+chrome@gmail.com
 date: 2012.07.15
*/
function a(){this.a()}a.prototype={name:chrome.app.getDetails().name,version:chrome.app.getDetails().version,a:function(){var b="Extension: "+this.name+" - "+this.version;void 0===console.info?console.log(b):console.info(b)}};new a;