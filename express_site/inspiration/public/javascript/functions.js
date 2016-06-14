function init() {

	//parse the document url in to array seperate by /
	var page = document.URL.split('/').join(' ').trim().split(" ");
	//get the current page which mostly is in the ending of the url
	page = page[page.length-1];
	var container;
	if(window.location.hostname == page) {
		 page = "main"
	} else {
		//get the container element of the
		 page = document.getElementsByClassName("container")[0];
	}
	//set the container id revelant to the page it's on
	container.id = page;
}