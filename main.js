


var iconEvent = document.getElementsByClassName("event")[2];
console.log(iconEvent);

iconEvent.addEventListener('click', function(event){
	event.target.classList.toggle('visible');
	console.log(event.target);
})


/*
function change_boxes() {
    var boxes = document.getElementsByClassName('boxes'),
        i = boxes.length;

    while(i--) {
        boxes[i].style.backgroundColor = "green";
    }
}
*/
/*
var button = document.querySelectorAll("button")[0];
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);
*/



/*
function toggleActive(info){
	var nowActive = document.getElementsByClassName('active');
	  		console.log(nowActive);
   	if(nowActive.length){
		for (var prop in nowActive) {
	  		console.log(nowActive[prop]);

	  		nowActive[prop].setAttribute('class', '');
	  	}
	}

	var infoText = document.getElementById(info);
	infoText.setAttribute('class', 'active');
}

console.log('hej');
*/