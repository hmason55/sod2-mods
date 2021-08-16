function getCommitHistory(url, block)
{
	$.getJSON(url, function(data) {
		var text = "";
		for(var node in data) {
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			html += message + "<br/>" + date + "<br/><br/>";
		}
		$(div).html(text);
	});
}
