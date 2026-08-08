/*=========================================
PREMIUM INTRO
=========================================*/

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero");
const memories=document.querySelector(".memories");
const letter=document.querySelector(".letter");
const ending=document.querySelector(".ending");

hero.classList.add("show-section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-section");

}

});

},{threshold:.2});

observer.observe(memories);
observer.observe(letter);
observer.observe(ending);

});