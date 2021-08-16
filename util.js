function getCommitHistory(url, block) {
	$.getJSON(url, function(data) {
		var text = "";
		for(var node in data) {
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			html += message + "<br/>" + date + "<br/><br/>";
		}
		$(block).html(text);
	});
}

function getFileContent(url, block) {
	$.get(url, function(data) {
		$(block).html(data.replace('- ', '<li>').replace('\r\n', '</li>'));
	});
}
