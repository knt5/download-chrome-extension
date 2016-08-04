const targetUrl = config.url;
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36';

const resultElement = document.querySelector('#result');

chrome.tabs.query({}, (tabs) => {
	tabs.forEach((tab) => {
		if (targetUrl && tab.url.indexOf(targetUrl) !== 0) {
			return;
		}
		
		((tab) => {
			const title = tab.title;
			const refererUrl = tab.url;
			
			chrome.tabs.executeScript(tab.id, { file: 'js/content.js' }, (results) => {
				const url = results[0].url;
				
				resultElement.textContent +=
					`wget -O '${title}.mp4'` +
					//` --referer="${refererUrl}"` +
					` --referer='${url}'` +
					` --user-agent='${userAgent}'` +
					` '${url}'` +
					' ; sleep 5; \n';
			});
		})(tab);
	});
});
