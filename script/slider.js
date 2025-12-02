document.addEventListener("DOMContentLoaded", function () {
    let imageContainer = document.getElementById("image-container");

    // List of images (Make sure filenames are correct!)
    let images = [
        "carousel/4th-img.png",
        "carousel/eight-img.png",
        "carousel/fifth-img.png",
        "carousel/first-img.png",
        "carousel/nineth-img.png",
        "carousel/seventh-img.png",
        "carousel/sixth-img.png",
        "carousel/tenth-img.png",
        "carousel/third-img.png"
    ];

    images.forEach((imgSrc, index) => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("slide");
        if (index === 0) img.classList.add("active"); // Show first image
        imageContainer.appendChild(img);
    });

    let currentIndex = 0;
    let slides = document.querySelectorAll(".slide");

    function changeSlide() {
        slides[currentIndex].classList.remove("active"); // Hide current
        currentIndex = (currentIndex + 1) % slides.length; // Next image
        slides[currentIndex].classList.add("active"); // Show next
    }

    setInterval(changeSlide, 3000); // Auto-change every 2 seconds
});
