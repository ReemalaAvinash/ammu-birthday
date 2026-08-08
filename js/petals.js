/*=========================================
FALLING SAKURA PETALS
=========================================*/

const PETAL_COUNT = 20;

for(let i=0;i<PETAL_COUNT;i++){

    const petal=document.createElement("span");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(8+Math.random()*8)+"s";

    petal.style.animationDelay=Math.random()*8+"s";

    petal.style.opacity=.4+Math.random()*.6;

    petal.style.transform=`scale(${0.5+Math.random()})`;

    document.body.appendChild(petal);

}