window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("loader-hide");

setTimeout(()=>{

loader.remove();

},800);

},1800);

});