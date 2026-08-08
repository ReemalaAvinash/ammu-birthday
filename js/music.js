/*==================================================*
 * AMRUTHA WEBSITE
 * MUSIC.JS
 *==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      Background Music
    =========================================*/

    const audio = new Audio("assets/music/birthday.mp3");

    audio.loop = true;
    audio.volume = 0.35;

    let playing = false;
    let userStartedMusic = false;


    /*=========================================
      Music Button
    =========================================*/

    const musicBtn = document.createElement("button");

    musicBtn.className = "music-button";

    musicBtn.setAttribute(
        "aria-label",
        "Play birthday music"
    );

    musicBtn.innerHTML = `
        <i class="fa-solid fa-music"></i>
    `;

    document.body.appendChild(musicBtn);


    /*=========================================
      Start Music
    =========================================*/

    async function startMusic() {

        if (playing) {
            return;
        }

        try {

            await audio.play();

            playing = true;
            userStartedMusic = true;

            musicBtn.classList.add("playing");

            musicBtn.setAttribute(
                "aria-label",
                "Pause birthday music"
            );

            console.log("Birthday music started.");

            removeInteractionListeners();

        } catch (error) {

            console.log(
                "Music waiting for user interaction."
            );

        }

    }


    /*=========================================
      First Interaction
    =========================================*/

    function handleFirstInteraction(event) {

        /*
         * Don't start music when clicking
         * the music button itself.
         */

        if (
            event.target === musicBtn ||
            musicBtn.contains(event.target)
        ) {
            return;
        }

        startMusic();

    }


    /*=========================================
      Desktop interactions
    =========================================*/

    document.addEventListener(
        "pointerdown",
        handleFirstInteraction,
        { passive: true }
    );

    document.addEventListener(
        "wheel",
        handleFirstInteraction,
        { passive: true }
    );

    document.addEventListener(
        "keydown",
        handleFirstInteraction,
        { passive: true }
    );


    /*=========================================
      Mobile touch
    =========================================*/

    document.addEventListener(
        "touchstart",
        handleFirstInteraction,
        { passive: true }
    );


    /*=========================================
      Remove listeners after music starts
    =========================================*/

    function removeInteractionListeners() {

        document.removeEventListener(
            "pointerdown",
            handleFirstInteraction
        );

        document.removeEventListener(
            "wheel",
            handleFirstInteraction
        );

        document.removeEventListener(
            "keydown",
            handleFirstInteraction
        );

        document.removeEventListener(
            "touchstart",
            handleFirstInteraction
        );

    }


    /*=========================================
      Music Button — Play / Pause
    =========================================*/

    musicBtn.addEventListener("click", async (event) => {

        event.stopPropagation();

        if (!playing) {

            await startMusic();

        } else {

            audio.pause();

            playing = false;

            musicBtn.classList.remove("playing");

            musicBtn.setAttribute(
                "aria-label",
                "Play birthday music"
            );

        }

    });


    /*=========================================
      Tab Visibility
    =========================================*/

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                audio.volume = 0.10;

            } else {

                audio.volume = 0.35;

            }

        }
    );

});