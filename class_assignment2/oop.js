function showProperty(c) {
	for(var name in c) {
		console.log(name);
	}
}

var Multiplier = new Object();

Multiplier.currentValue = 1;
Multiplier.multiply = function(x) {
	this.currentValue = this.currentValue * x;
}
Multiplier.getCurrentValue = function() {
	return this.currentValue;
}
// Multiplier.multiply(5);
// alert(Multiplier.getCurrentValue());
// Multiplier.multiply(5);
// alert(Multiplier.getCurrentValue());

function Photo(name, location) {
	this.name = name;
	this.location = location;
}

function Album() {

	this.gallery = new Array();

	this.showGallery = function() {
		this.gallery.forEach( function(e, i, array) {
			console.log(array[i].name + " --> " + array[i].location);
		});
	};
	this.getPhoto = function(index) {
		if(index < 1) {
			alert("Invalid Index");
			return false;
		}
		return this.gallery[index-1];
	};
	this.addPhoto = function(photo) {
		if(!(photo instanceof Photo)) {
			console.log("bad photo instance");
			return false;
		}
		this.gallery.push(photo);
	}
}

function Person() {
	this.name;
}
function Student() {
	this.grade;
}
function Teacher() {
	this.subject;
}

Student.prototype = new Person();
Teacher.prototype = new Person();

function School() {
	this.students = new Array();
	this.teachers = new Array();

	this.addStudent= function(student) {
		this.students.push(student);
	}
	this.addTeacher = function(teacher) {
		this.teachers.push(teacher);
	}
}