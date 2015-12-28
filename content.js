var yt_base_url = "http://www.youtube.com/watch_popup";
var current_url = "", current_vid = "";

//Returns the current URL of the active tab
chrome.tabs.query({'active': true}, function (tabs) {
    current_url = tabs[0].url;
});

function clickHandler(e) {
	if (/youtube/.test(current_url)){
		current_vid = current_url.substring(current_url.indexOf("?") + 1);
	    chrome.tabs.update({url: yt_base_url + "?" + current_vid});
    }
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});