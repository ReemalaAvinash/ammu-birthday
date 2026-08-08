/*=========================================
PREMIUM BACKGROUND
=========================================*/

const clouds = document.querySelector(".clouds");

for(let i=0;i<8;i++){

    const cloud=document.createElement("span");

    cloud.className="cloud";

    cloud.style.top=Math.random()*100+"vh";

    cloud.style.left=Math.random()*100+"vw";

    cloud.style.animationDuration=(25+Math.random()*20)+"s";

    cloud.style.animationDelay=Math.random()*15+"s";

    cloud.style.transform=`scale(${0.6+Math.random()})`;

    clouds.appendChild(cloud);

}

const stars=document.querySelector(".stars");

for(let i=0;i<45;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    stars.appendChild(star);

}