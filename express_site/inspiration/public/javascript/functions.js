function init() {

	//parse the document url in to array seperate by /
	var page = document.URL.split('/').join(' ').trim().split(" ");
	//get the current page which mostly is in the ending of the url
	page = page[page.length-1];

	var container = document.getElementsByClassName("container")[0];

	console.log(page);
	console.log(window.location.hostname); 

	var port = ":3000";
	if((window.location.hostname+port) == page) {
		page  = "main"
	}
	//set the container id revelant to the page it's on
	container.id = page;
}