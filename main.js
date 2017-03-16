const colordiv = document.getElementById('colordiv');
const iconList = document.getElementsByClassName('icon');
const colors = ['#344E41', '#2E6078', '#7BA098', '#9B97B2', '#73A6AD', '#B08EA2', '#C46D5E', '#9E4770', '#BCFFDB'];


function randomColor(colordiv, colors){
  let color = colors[Math.floor(Math.random()*colors.length)];
  colordiv.style.backgroundColor = color;
}


for(let i = 0; i < iconList.length; i++) {
  const icon = iconList[i];
  icon.addEventListener('click', function(event) {
    changeContent(event);
    changeActiveIcon(event, iconList);
    let linkElement = ''; 
    if(event.target.classList.contains('icon')){
      linkElement = event.target;
    }
    else{
      linkElement = event.target.parentElement;
    }
    let info = document.getElementById(linkElement.classList[1]);
    info.classList.toggle('visible')  

    linkElement.classList.toggle('pressed');  
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

function changeActiveIcon(event, icons){
  for (let i = 0; i < icons.length; i++) {
    if(icons[i].classList.contains('pressed')){
      icons[i].classList.remove('pressed');
    }
  }
}



randomColor(colordiv, colors);

setInterval(function(){
  randomColor(colordiv, colors)
}, 2500);
