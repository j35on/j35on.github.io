let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("myslides-fade");
        let dots = document.getElementsByClassName("dot");

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Show the current slide
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block"; // Show current slide
        dots[slideIndex - 1].className += " active"; // Highlight the current dot

        // Change slide every 3 seconds
        setTimeout(showSlides, 5000);
    }

    // Initialize the slideshow
    document.addEventListener("DOMContentLoaded", showSlides);