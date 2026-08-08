/*=========================================
SPARKLES
=========================================*/

const sparkleCount = 35;

for(let i=0;i<sparkleCount;i++){

    const sparkle=document.createElement("span");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.animationDelay=Math.random()*5+"s";

    sparkle.style.animationDuration=(2+Math.random()*4)+"s";

    document.body.appendChild(sparkle);

}