function init() {

	//parse the document url in to array seperate by /
	var page = document.URL.split('/').join(' ').trim().split(" ");
	//get the current page which mostly is in the ending of the url
	page = page[page.length-1];

	if(window.location.host == page) {
		page = "main";
	}
	//get the container element of the page
	var container = document.getElementsByClassName("container")[0];
	//set the container id revelant to the page it's on
	container.id = page;
}