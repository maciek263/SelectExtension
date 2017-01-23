var setButton = document.querySelector("#setbutton");

setButton.onclick = function() {
	var engine = document.querySelector("#engine");
	chrome.storage.local.set({'ultimateSearchDefault': engine.value});
}

var settingsForm = document.querySelector("#settingsform");

settingsForm.onsubmit = function(){
	return false;
}

window.onload = function() {
	chrome.storage.local.get('ultimateSearchDefault', function (def) {
		if (typeof def.ultimateSearchDefault != "undefined") {
			var engine = document.querySelector("#engine");
			engine.value = def.ultimateSearchDefault;
		}
	});
}