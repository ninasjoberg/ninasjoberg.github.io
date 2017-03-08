
const iconList = document.getElementsByClassName('icon');
//loop through the list ov icons
for(let i = 0; i < iconList.length; i++) {
  //get the icon att position i
  const icon = iconList[i];


  //add an eventlistener to that icon
  icon.addEventListener('click', function(event) {
    changeContent(event);
    changeActiveIcon(event);
    // event.target is the icon that was clicked
    // take the second class and use it to get 
    // the corresponding info div by id
    const info = document.getElementById(event.target.parentElement.classList[1]);
    info.classList.toggle('visible'); 
    const green = event.target.parentElement;
    green.classList.toggle('pressed');   
  });
}


function changeContent(event){
  const active = document.getElementsByClassName('info');
    for (let i = 0; i < active.length; i++) {
      if(active[i].classList.contains('visible')){
        active[i].classList.remove('visible');
      }
    }
}


function changeActiveIcon(event){
  const activeIcone = document.getElementsByClassName('icon');
  for (let i = 0; i < activeIcone.length; i++) {
    if(activeIcone[i].classList.contains('pressed')){
      activeIcone[i].classList.remove('pressed');
    }
  }
}

