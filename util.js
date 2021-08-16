function getCommitHistory(url, div)
{
	$.getJSON(url, function(data) {
		for(var node in data) {
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			$(div).html(`${date}<br/>${message}<br/><br/>`);
		}
	});
}
