<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
function getCommitHistory(url)
{
	$.getJSON(url, function(data) {
		
		for(var node in data)
		{
			var date = moment(data[node]["commit"]["committer"]["date"]).fromNow();
			var message = data[node]["commit"]["message"];
			
			document.write(`${date}<br/>${message}<br/><br/>`);
		}

	});
}
</script>
