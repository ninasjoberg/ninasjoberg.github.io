
const iconList = document.getElementsByClassName('icon');
console.log(iconList) 
//loop through the list ov icons
for(let i = 0; i < iconList.length; i++) {
  //get the icon att position i
  const icon = iconList[i];
  console.log(icon);


  //add an eventlistener to that icon
  icon.addEventListener('click', function(event) {
    changeContent(event);
    // event.target is the icon that was clicked
    // take the second class and use it to get 
    // the corresponding info div by id
    console.log(event);
    console.log(event.target.parentElement.classList[1]); 
    const info = document.getElementById(event.target.parentElement.classList[1]);
    console.log('info, this should be an element:' + info);
    info.classList.toggle('visible'); 

/*
    //för att göra iconen gröN.
    const green = document.getElementById(event.taget);
    green.classList.toggle('green'); 
*/    

  });
}
/*
function changeContent(event){
  laptop.classList.remove('visible'); 
  silver.classList.remove('visible'); 
  climbing.classList.remove('visible'); 
  planting.classList.remove('visible'); 
  sailing.classList.remove('visible'); 
}
*/
function changeContent(event){
  const active = document.getElementsByClassName('info');
    console.log(active);
    for (let i = 0; i < active.length; i++) {
      console.log(active);
      if(active[i].classList.contains('visible')){

        active[i].classList.remove('visible');
      }
      console.log(active[i].classList);
    }
}

