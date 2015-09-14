var angMod = angular.module('newModule',[]);
angMod.service('newService',function()
{
	this.myFirstOne = function()
	{
		console.log("myFirstOne...");
	}
});