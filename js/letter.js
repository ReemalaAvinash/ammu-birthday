/*==================================================*
 * AMRUTHA WEBSITE
 * LETTER.JS
 *==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
      FIND OPEN LETTER BUTTON
    ==================================================*/

    const allButtons = [
        ...document.querySelectorAll("button"),
        ...document.querySelectorAll("a")
    ];

    const openLetterButton = allButtons.find(button =>
        button.textContent
            .trim()
            .toLowerCase()
            .includes("open letter")
    );


    if (!openLetterButton) {

        console.warn("Open Letter button not found.");

        return;

    }


    /*==================================================
      FIND THE ORIGINAL LETTER CONTENT
    ==================================================*/

    const letterSelectors = [
        ".letter-content",
        ".letter-body",
        ".letter-message",
        ".letter-text",
        ".letter-paper",
        ".letter-inner",
        ".letter-scroll"
    ];

    let originalLetter = null;

    for (const selector of letterSelectors) {

        const element = document.querySelector(selector);

        if (element) {

            originalLetter = element;

            break;

        }

    }


    /*==================================================
      CREATE POPUP
    ==================================================*/

    const popup = document.createElement("div");

    popup.className = "letter-popup";

    popup.innerHTML = `

        <div class="letter-popup-paper">

            <!-- HEADER -->

            <div class="letter-popup-header">

                <h2 class="letter-popup-title">
                    💌 A Letter For You
                </h2>

                <button
                    type="button"
                    class="letter-popup-close"
                    aria-label="Close letter"
                >
                    ×
                </button>

            </div>


            <!-- LETTER -->

            <div class="letter-popup-content">

            </div>

        </div>

    `;


    document.body.appendChild(popup);


    /*==================================================
      POPUP CONTENT
    ==================================================*/

    const popupContent =
        popup.querySelector(".letter-popup-content");


    /*
     * Copy the existing letter.
     *
     * This means you don't have to type
     * your birthday message again.
     */

    if (originalLetter) {

        popupContent.innerHTML =
            originalLetter.innerHTML;

    } else {

        popupContent.innerHTML = `

            <p>Dear Amrutha,</p>

            <p>
                Your birthday message goes here.
            </p>

        `;

        console.warn(
            "Original letter content was not found."
        );

    }


    /*==================================================
      CLOSE OLD LETTER BUTTON
    ==================================================*/

    /*
     * If the old page has a "Close Letter" button,
     * hide it because the popup now has its own X button.
     */

    const oldCloseButtons = allButtons.filter(button =>
        button.textContent
            .trim()
            .toLowerCase()
            .includes("close letter")
    );


    oldCloseButtons.forEach(button => {

        button.style.display = "none";

    });


    /*==================================================
      OPEN POPUP
    ==================================================*/

    openLetterButton.addEventListener("click", event => {

        event.preventDefault();

        event.stopPropagation();

        popup.classList.add("active");

        document.body.style.overflow = "hidden";

        popupContent.scrollTop = 0;

    });


    /*==================================================
      CLOSE POPUP
    ==================================================*/

    const closeButton =
        popup.querySelector(".letter-popup-close");


    function closeLetterPopup(event) {

        if (event) {

            event.preventDefault();

            event.stopPropagation();

        }


        popup.classList.remove("active");

        document.body.style.overflow = "";

    }


    /*==================================================
      X BUTTON
    ==================================================*/

    closeButton.addEventListener(
        "click",
        closeLetterPopup
    );


    /*==================================================
      CLICK OUTSIDE POPUP
    ==================================================*/

    popup.addEventListener("click", event => {

        if (event.target === popup) {

            closeLetterPopup(event);

        }

    });


    /*==================================================
      ESC KEY
    ==================================================*/

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            popup.classList.contains("active")
        ) {

            closeLetterPopup(event);

        }

    });


    /*==================================================
      PREVENT POPUP CLICK FROM CLOSING
    ==================================================*/

    const popupPaper =
        popup.querySelector(".letter-popup-paper");


    popupPaper.addEventListener("click", event => {

        event.stopPropagation();

    });


    /*==================================================
      FINISHED
    ==================================================*/

    console.log(
        "Letter popup system initialized successfully."
    );

});