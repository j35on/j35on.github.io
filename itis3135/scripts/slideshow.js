$(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    // Function to show the current slide and update the caption
    function showSlide(index) {
        slides.removeClass("active").hide(); // Hide all slides
        $(slides[index]).addClass("active").show(); // Show the active slide

        // Update the caption (ensure it's dynamically pulled from the current image's data-caption)
        const captionText = $(slides[index]).attr("data-caption");
        $("#caption").text(captionText); // Set the caption text

        // Update the highlighted letter in the gallery
        $(".image-gallery ul li p").removeClass("highlight"); // Remove highlight from all
        $(`.image-gallery ul li:eq(${index}) p`).addClass("highlight"); // Highlight the current one
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Image gallery click event
    $(".image-gallery img").click(function () {
        const clickedIndex = $(this).parent().index();
        currentIndex = clickedIndex;
        showSlide(currentIndex);
    });
});