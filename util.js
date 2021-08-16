function getCommitHistory(url, div)
{
	$.getJSON(url, function(data) {
		var html = "";
		for(var node in data) {
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			html += "<b>" + message + "</b><br/>" + date + "<br/><br/>";
		}
		$(div).html(html);
	});
}
