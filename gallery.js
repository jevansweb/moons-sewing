// Modal JS Code

const modal = document.getElementById("myModal");

const img = document.querySelectorAll(".img-container img");
const modalImg = document.querySelector(".img01");
const captionText = document.querySelector(".caption");
const modalClose = document.querySelector(".close");

img.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        captionText.innerHTML = image.alt;
        modal.classList.add("appear");

        modalClose.addEventListener("click", () => {
            modal.classList.remove("appear");
        })
    });
});