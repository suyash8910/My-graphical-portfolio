//Lesson 3 event listener

var div = document.createElement('DIV');
//Set t=Height of Element

div.style.height = '100vh';
//Append Element to DOM
document.body.appendChild(div);
//Add Event Listener to Element
div.addEventListener('mousemove', function(event){
	console.log(event);
	var x = event.clientX;
	var y = event.clientY;
	div.textContent = x + ',' + y;
	div.style.backgroundColor = 'rgb('+x+','+y+',100)';
});