function getCommitHistory(url, div)
{
	$.getJSON(url, function(data) {

		for(var node in data) {
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			var str = `###${message}<br/>${date}<br/><br/>`;
			$(div).html(str);
		}
		
	});
}
