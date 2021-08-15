function getCommitHistory(url, block, count = 5) {
	$.getJSON(url, function(data) {
		var text = "";
		var i = 0;
		for(var node in data) {
			if(i >= count) { break; }
			var date = moment(data[i]["commit"]["committer"]["date"]).fromNow();
			var message = data[i]["commit"]["message"];
			text += message + "<br/>" + date + "<br/><br/>";
			i++;
		}
		$(block).html(text);
	});
}

function getFileContent(url, block) {
	$.get(url, function(data) {
		$(block).html(data.replaceAll("- ", "<li>").replaceAll("\r\n", "</li>") + "</li>");
	});
}
