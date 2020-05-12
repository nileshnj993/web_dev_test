
document.addEventListener("DOMContentLoaded",exec);
function exec(event){
	var temp = document.querySelector("#title").textContent;
	function sayHello(event){
		var name = document.querySelector("#name").value;
		this.textContent = "Said it!";
		if(name===""){
			document.querySelector("#title").textContent = temp;
			document.querySelector("#content").innerHTML = "<h2> Don't leave field blank!</h2>";
		}
		else if(name.toLowerCase()==="student"){
			document.querySelector("#title").textContent = "What are you doing?";
			document.querySelector("#content").innerHTML = "<h2>Please enter your name!</h2>";
		}
		else{
			document.querySelector("#title").textContent = temp;
			document.querySelector("#content").innerHTML = "<h2> Hello "+name+"!</h2>";
		}
	}

	function sayIt(event){
		this.textContent = "Say it!";
	}

	function reset(event){
		document.querySelector("#content").textContent = "";
		document.querySelector("#name").value = "";
		document.querySelector("#title").textContent = temp;
	}

	function coordinates(event){
		if(event.shiftKey===true){
			console.log("x: "+event.clientX);
			console.log("y: "+event.clientY);
		}
	}

	document.querySelector("#say").addEventListener("click",sayHello);
	document.querySelector("#say").addEventListener("blur",sayIt);
	document.querySelector("#reset").addEventListener("click",reset);
	
	document.querySelector("body").addEventListener("mousemove",coordinates);
};