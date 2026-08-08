/*==================================================*
 * AMRUTHA WEBSITE
 * MUSIC + BIRTHDAY OPENING
 *==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*================================================
      BACKGROUND MUSIC
    ================================================*/

    const audio = new Audio("assets/music/birthday.mp3");

    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";

    let playing = false;


    /*================================================
      BIRTHDAY OPENING SCREEN
    ================================================*/

    const openingScreen = document.createElement("div");

    openingScreen.className = "birthday-opening";

    openingScreen.innerHTML = `

        <div class="opening-stars"></div>

        <div class="opening-glow glow-one"></div>
        <div class="opening-glow glow-two"></div>

        <div class="birthday-card">

            <div class="opening-flower">🌸</div>

            <div class="opening-small">
                A LITTLE SURPRISE FOR YOU
            </div>

            <h1>
                A Birthday Message
            </h1>

            <h2>
                For Amrutha 💗
            </h2>

            <div class="opening-line"></div>

            <p>
                Something special is waiting for you...
            </p>

            <button class="open-birthday-btn">
                <span>✨</span>
                Open Birthday Surprise
                <span>→</span>
            </button>

            <div class="opening-hint">
                Tap to begin your surprise
            </div>

        </div>
    `;

    document.body.appendChild(openingScreen);


    /*================================================
      MUSIC BUTTON
    ================================================*/

    const musicBtn = document.createElement("button");

    musicBtn.className = "music-button";

    musicBtn.innerHTML = `
        <i class="fa-solid fa-music"></i>
    `;

    document.body.appendChild(musicBtn);


    /*================================================
      OPEN BIRTHDAY SURPRISE
    ================================================*/

    const openButton =
        openingScreen.querySelector(".open-birthday-btn");


    openButton.addEventListener("click", async () => {

        try {

            await audio.play();

            playing = true;

            musicBtn.classList.add("playing");

        } catch (error) {

            console.log("Music could not start:", error);

        }


        /*--------------------------------------------
          Close opening screen
        --------------------------------------------*/

        openingScreen.classList.add("opening-hide");


        /*--------------------------------------------
          Remove after animation
        --------------------------------------------*/

        setTimeout(() => {

            openingScreen.remove();

        }, 1000);

    });


    /*================================================
      MUSIC BUTTON CONTROL
    ================================================*/

    musicBtn.addEventListener("click", async () => {

        if (!playing) {

            try {

                await audio.play();

                playing = true;

                musicBtn.classList.add("playing");

            } catch (error) {

                console.log("Music playback blocked.");

            }

        } else {

            audio.pause();

            playing = false;

            musicBtn.classList.remove("playing");

        }

    });


    /*================================================
      VOLUME WHEN TAB IS HIDDEN
    ================================================*/

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            audio.volume = 0.10;

        } else {

            audio.volume = 0.35;

        }

    });

});