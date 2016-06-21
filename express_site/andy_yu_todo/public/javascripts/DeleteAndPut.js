
function delete(this) {
	
	var id = this.parentElement.getElementsByClassName('id')[0].innerHTML;

	$.ajax({
		type: "DELETE",
		url: "/todo/" + id,
		success: function(response) {
			alert(response);
			window.location = "/todo";
		}
	});
}
