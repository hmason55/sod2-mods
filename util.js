function getCommitHistory(url, div)
{
	$.getJSON(url, function(data) {
		var history = "";
		for(var node in data) {
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			history.concat(`${date}<br/>${message}<br/><br/>`);
		}
		$(div).html(history);
	});
}
