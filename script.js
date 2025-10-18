document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".dest-card, .journey-card, .wanderlust-content");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check
});
