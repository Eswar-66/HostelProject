// prelaoder

window.addEventListener('load',()=>{
  
  const preloader=document.querySelector(".preloader");
  preloader.style.display="none";

})

// window scrolled

document.addEventListener('scroll',()=>{
  const headerval=document.querySelector('.header');
  const newscontainer=document.querySelector('.news-container');

  if(window.scrollY>0){
    headerval.classList.add('scrolled');
    newscontainer.classList.add('news-feed');
  }else{
    headerval.classList.remove('scrolled');
    newscontainer.classList.remove('news-feed');
  }   

})

// document.addEventListener('scroll',()=>{
  

//   if(window.scrollY>0){
    
//   }else{
   
//   }
// })

// hamburger menu

// const headerHover=document.getElementById('header_hover');
const navElem=document.querySelector('.header_nav');
const hambuElem=document.querySelector(".header_hamburger");

hambuElem.addEventListener('click',()=>{
  navElem.classList.toggle('nav--open');
  hambuElem.classList.toggle('hamburger--open');
  // headerHover.classList.remove();
})

navElem.addEventListener('click',()=>{
  navElem.classList.toggle('nav--open');
  hambuElem.classList.toggle('hamburger--open');
})


//pop up enquire menu

// const popupSumbmit= document.querySelector('popup-sumbit');
const popupButton=document.querySelector('.header_nav_button');
const popupClose=document.querySelector('.header-enq-icon')
const popForm=document.querySelector('.header-enq-popup');

popupButton.addEventListener('click',()=>{
  popForm.classList.toggle('header-enq-popup--open');
 
})

popupClose.addEventListener('click',()=>{
  popForm.classList.toggle('header-enq-popup--open');
  
})

// to close auto popup instead of visibility hidden
window.addEventListener('load',()=>{
  setTimeout(() => {
    popForm.classList.add('header-enq-popup--open');
  },0);
})



//rotation whatsapp text starts here

const text=document.querySelector('.what-text p');
text.innerHTML=text.innerText.split('').map((char,i)=>
  `<span style="transform:rotate(${i*8.3}deg)">${char}</span>`
 ).join('');


 // click action in rotation whatsapp
const rotate=document.querySelector('.container-wat');
rotate.addEventListener('click',()=>{
  // location.href='https://wa.me/919445487884';
  window.open('https://wa.me/919445487884','_blank')
})

// rotation whatsapp text End here



// scroll back to top

let calcScrollValue=()=>{
  let scrollProgress=document.getElementById("progress");
  let progressValue=document.getElementById("progress-value");

  let pos=document.documentElement.scrollTop;

  let calcHeight=
  document.documentElement.scrollHeight - document.documentElement.clientHeight

  let scrollValue=Math.round((pos*100) / calcHeight);

  if(pos>100){
    scrollProgress.style.display="grid";
  }else{
    scrollProgress.style.display="none";
  }

  scrollProgress.addEventListener("click",()=>{
    document.documentElement.scrollTop=0
  })

  scrollProgress.style.background=`conic-gradient(red ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

}


window.onscroll=calcScrollValue;
window.onload=calcScrollValue;

// end scroll back to top