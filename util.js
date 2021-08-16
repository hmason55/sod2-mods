function getCommitHistory(url, block, count = 5) {
	$.getJSON(url, function(data) {
		var text = "";
		/*for(var i = 0; i < count; i++) {
			var date = moment(data[i]["commit"]["committer"]["date"]).fromNow();
			var message = data[i]["commit"]["message"];
			text += message + "<br/>" + date + "<br/><br/>";
		}*/
		$(block).html(data[i]);
	});
}

function getFileContent(url, block) {
	$.get(url, function(data) {
		$(block).html(data.replace("- ", "<li>").replace("\r\n", "</li>") + "</li>");
	});
}
