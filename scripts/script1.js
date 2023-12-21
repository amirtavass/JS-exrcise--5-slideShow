let activeSlideNumber=1;
function ChangeSlide(index){

    let slideContainer=document.getElementsByClassName("slides")[0];
    slideContainer.style.marginLeft=(-(index-1)*1024)+"px";
   let buttons=document.querySelectorAll(".slider nav label");
   for(let i=0;i<buttons.length;i++){
    if(i==(index-1))
     buttons[i].classList.add("activeSlideNumber");
     else
     buttons[i].classList.remove("activeSlideNumber");
   }
   activeSlideNumber=index;
}
let timer1;
function f(){
   timer1=setInterval(() => {
    activeSlideNumber++;
    if(activeSlideNumber>4)
    activeSlideNumber=1;
    ChangeSlide(activeSlideNumber);
  }, 2000);
}
f();


function ButtonMouseOver(){
   clearInterval(timer1)
}

function ButtonMouseLeave(){
  f();
}
