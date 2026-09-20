/*==================================================*
 * BIRTHDAY PHOTO SLIDER
 * AUTO CHANGE EVERY 2.5 SECONDS
 *==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const previewImage =
        document.querySelector("#birthdayPreviewImage");

    const thumbnails =
        document.querySelectorAll(".photo-thumb");

    if (!previewImage || thumbnails.length === 0) {
        return;
    }

    let currentIndex = 0;

    const images = Array.from(thumbnails).map(button =>
        button.dataset.image
    );


    function changePhoto(index) {

        if (index < 0 || index >= images.length) {
            return;
        }

        currentIndex = index;

        previewImage.classList.add("photo-changing");

        setTimeout(() => {

            previewImage.src = images[index];

            previewImage.onload = () => {
                previewImage.classList.remove("photo-changing");
            };

        }, 250);


        thumbnails.forEach(button => {
            button.classList.remove("active");
        });

        thumbnails[index].classList.add("active");

    }


    function nextPhoto() {

        const nextIndex =
            (currentIndex + 1) % images.length;

        changePhoto(nextIndex);

    }


    thumbnails.forEach((button, index) => {

        button.addEventListener("click", () => {

            changePhoto(index);

        });

    });


    setInterval(nextPhoto, 2500);

});