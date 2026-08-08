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
    audio.preload = "auto";

    let playing = false;
    let started = false;


    /*=========================================
      Music Button
    =========================================*/

    const musicBtn = document.createElement("button");

    musicBtn.className = "music-button";

    musicBtn.innerHTML = `
        <i class="fa-solid fa-music"></i>
    `;

    document.body.appendChild(musicBtn);


    /*=========================================
      Start Music
    =========================================*/

    function startMusic() {

        if (started) return;

        const promise = audio.play();

        if (promise !== undefined) {

            promise
                .then(() => {

                    playing = true;
                    started = true;

                    musicBtn.classList.add("playing");

                    removeStartListeners();

                })
                .catch(() => {

                    /*
                     Browser blocked playback.
                     Wait for a real user interaction.
                    */

                });

        }

    }


    /*=========================================
      Toggle Music
    =========================================*/

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            audio.play()
                .then(() => {

                    playing = true;
                    started = true;

                    musicBtn.classList.add("playing");

                    removeStartListeners();

                })
                .catch(() => {

                    console.log("Music playback was blocked.");

                });

        } else {

            audio.pause();

            playing = false;

            musicBtn.classList.remove("playing");

        }

    });


    /*=========================================
      REAL USER INTERACTIONS
      These are allowed by browsers
    =========================================*/

    const startEvents = [
        "pointerdown",
        "touchend",
        "keydown"
    ];


    function handleUserInteraction() {

        startMusic();

    }


    startEvents.forEach(event => {

        document.addEventListener(
            event,
            handleUserInteraction,
            { once: false, passive: true }
        );

    });


    /*=========================================
      Scroll / Wheel Attempt
    =========================================*/

    window.addEventListener("wheel", () => {

        startMusic();

    }, { passive: true });


    window.addEventListener("scroll", () => {

        startMusic();

    }, { passive: true });


    /*=========================================
      Remove Listeners After Music Starts
    =========================================*/

    function removeStartListeners() {

        startEvents.forEach(event => {

            document.removeEventListener(
                event,
                handleUserInteraction
            );

        });

    }


    /*=========================================
      Visibility Volume
    =========================================*/

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            audio.volume = 0.10;

        } else {

            audio.volume = 0.35;

        }

    });

});