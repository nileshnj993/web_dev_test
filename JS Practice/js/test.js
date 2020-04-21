(function(window){
var RamGreeter = {};
	RamGreeter.name="Ram";
	RamGreeter.greet = function (){
	console.log("Hello "+RamGreeter.name);
	};
	window.RamGreeter = RamGreeter;
}) (window);

