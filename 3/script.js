document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("close-button");
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").getAttribute("src");
            lightboxImage.setAttribute("src", imgSrc);
            lightbox.style.display = "flex";
        });
    });
    
    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
