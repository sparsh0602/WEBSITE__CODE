// SLIDESHOW
var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
} 



// DOTS ANIMATION BELOW SLIDESHOW
let ball=document.querySelectorAll(".dots");
let idx=1;
let curr=1;
let prev=0;   
 function animat(idx)
{
 ball[prev].style.opacity=1;
if(idx=0)
prev=ball.length-1;
else
prev=curr;

if(curr==ball.length-1)
curr=0;
else
curr=curr+1;

ball[prev].style.opacity=0.5;

setTimeout(() => {
    
    animat(idx+1);
}, 2350);
}
animat(idx);



// SEARCH BAR SELECTION
  document.getElementsByTagName('select')[0].addEventListener('change',function(){ 
  var val = document.getElementsByTagName('select')[0].value; 
 
  
  if(val==="SNAKE MANIA")
  {
  let a=document.querySelector("#snake1");
  let b=document.querySelector("#snake2");
  let c=document.querySelector("#snake3");
  let d=document.querySelector("#snake4");
  
  let e=document.querySelector("#dot");

   a.style.display="block";
   b.style.display="none";
   c.style.display="none";
   d.style.display="none";
   e.style.display="none";
    
    let a1=document.querySelector("#DM");
    let b1=document.querySelector("#SM");
    let c1=document.querySelector("#TT");
    let d1=document.querySelector("#FI");
    
    a1.style.display="none";
    b1.style.display="none";
    c1.style.display="none";
    d1.style.display="none";
    
  }

  if(val==="TIC TAC TOE")
  {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");
    
   let e=document.querySelector("#dot");

   a.style.display="none";
   b.style.display="none";
   c.style.display="block";
   d.style.display="none";
   e.style.display="none";
    
    let a1=document.querySelector("#DM");
    let b1=document.querySelector("#SM");
    let c1=document.querySelector("#TT");
    let d1=document.querySelector("#FI");
    
    a1.style.display="none";
    b1.style.display="none";
    c1.style.display="none";
    d1.style.display="none";
     
    }

    if(val==="DINOSAUR MANIA")
    {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");
      
   let e=document.querySelector("#dot");

   a.style.display="none";
   b.style.display="block";
   c.style.display="none";
   d.style.display="none";
   e.style.display="none";
      
    let a1=document.querySelector("#DM");
    let b1=document.querySelector("#SM");
    let c1=document.querySelector("#TT");
    let d1=document.querySelector("#FI");
    
    a1.style.display="none";
    b1.style.display="none";
    c1.style.display="none";
    d1.style.display="none";
    }
   
    if(val==="FLIP IT")
    {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");
      
   let e=document.querySelector("#dot");

   a.style.display="none";
   b.style.display="none";
   c.style.display="none";
   d.style.display="block";
   e.style.display="none";
      
    let a1=document.querySelector("#DM");
    let b1=document.querySelector("#SM");
    let c1=document.querySelector("#TT");
    let d1=document.querySelector("#FI");
    
    a1.style.display="none";
    b1.style.display="none";
    c1.style.display="none";
    d1.style.display="none";
    }
 }); 

