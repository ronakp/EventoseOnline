function setter(name, value, days){
	var d = new Date();
	d.setTime(d.getTime() + (days * 24 * 3600 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + ";" + expires;
}

function getter(name){
	var newName = name + "=";
	var split = document.cookie.split(';');
	for(var i = 0; i < split.length; i++){
		var c = split[i];
		while(c.charAt(0) == ' ') c = c.substring(1);
		if(c.indexOf(newName) == 0) 
			return c.substring(newName.length, c.length);
	}
	return "";
}

function checker(){
	var username = getCookie("username");
	if(username != ""){
		return true;
	}
	else{
		return false;
	}
}