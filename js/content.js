(() => {
	const element = document.querySelector('#player script');
	const script = element.textContent;
	let url = '';
	
	script.split('\n').forEach((line) => {
		if (line.indexOf('			var movie_url = ') === 0) {
			url = line.split("'")[1];
		}
	});
	
	url = decodeURIComponent(url);
	
	if (url.indexOf('external:') === 0) {
		url = url.split('external:')[1];
	}
	
	return {
		url
	};
})();
