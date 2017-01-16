chrome.contextMenus.create( {
	title: "Generate link: ",
	contexts: ["selection"],
	onclick: generate
});


function generate(info){

    var select = info.selectionText;
	var tekst = select.toLowerCase();
	var test = new String(tekst);
	var link = test.deleteDiacritics();
	link = link.deletePunctation();
	link = link.deletePunctation();
 
	//wlaczenie okna z linkiem
	//newWindow(link);

	//wyslanie wygenerowango linku do schowka
	link.toString();
	var dummy = document.createElement("input");
	document.body.appendChild(dummy);
	dummy.setAttribute("id", "dummy_id");
	document.getElementById("dummy_id").value=link;  
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
	
}

String.prototype.deletePunctation = function()
{
    return this.replace(/ /g, '-')
					.replace(".", '-')
					.replace(",", '-')
					.replace("--", '-')
}

String.prototype.deleteDiacritics = function()
{
    return this.replace(/ą/g, 'a')
					.replace(/ć/g, 'c')
					.replace(/ę/g, 'e')
					.replace(/ł/g, 'l')
					.replace(/ń/g, 'n')
					.replace(/ó/g, 'o')
					.replace(/ś/g, 's')
					.replace(/ż/g, 'z')
					.replace(/ź/g, 'z');
}

//funkcja tworząca okno z linkiem
function newWindow(link) {
    var newWindow = window.open('', 'okno', 'toolbar=no,location=no,fullscreen=no,resizable=no,width=700,height=100,top=10,left=10');
    with (newWindow) {
        document.writeln('<html>');
        document.writeln('<head>');
        document.writeln('<title>Generated link</title>');
        document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
        document.writeln('</head>');
        document.writeln('<body>');
        document.writeln('<font size="3">'+link+'-'+'</font>');
        document.writeln('</body>');
        document.writeln('</html>');
        document.close()
    }
}