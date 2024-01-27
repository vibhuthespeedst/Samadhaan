document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        const videoList = section.querySelector(".video-list");
        const prevButton = section.querySelector(`#prev-slide-${index + 1}`);
        const nextButton = section.querySelector(`#next-slide-${index + 1}`);

        const maxScrollLeft = videoList.scrollWidth - videoList.clientWidth;

        const handleSlideButtons = () => {
            prevButton.style.display = videoList.scrollLeft <= 0 ? "none" : "flex";
            nextButton.style.display = videoList.scrollLeft >= maxScrollLeft ? "none" : "flex";
        };

        prevButton.addEventListener("click", () => {
            videoList.scrollBy({ left: -videoList.clientWidth, behavior: "smooth" });
        });

        nextButton.addEventListener("click", () => {
            videoList.scrollBy({ left: videoList.clientWidth, behavior: "smooth" });
        });

        videoList.addEventListener("scroll", () => {
            handleSlideButtons();
        });

        handleSlideButtons();
    });
});
