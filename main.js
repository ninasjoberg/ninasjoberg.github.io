


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