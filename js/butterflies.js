/*=========================================
FLOATING BUTTERFLIES
=========================================*/

const hero=document.querySelector(".hero");

for(let i=0;i<8;i++){

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML="🦋";

    butterfly.style.left=Math.random()*100+"vw";

    butterfly.style.top=Math.random()*100+"vh";

    butterfly.style.animationDelay=Math.random()*8+"s";

    butterfly.style.animationDuration=(8+Math.random()*6)+"s";

    hero.appendChild(butterfly);

}