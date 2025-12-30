(function () {
    // Section IDs in order
    const sections = ['home', 'about', 'portfolio', 'blogs', 'contact'];

    // Function to scroll to a specific section with animation
    function scrollToSection(sectionId, withAnimation = true) {
        const targetSection = document.getElementById(sectionId);
        const targetButton = document.querySelector(`[data-id="${sectionId}"]`);

        if (targetSection && targetButton) {
            // Update active button
            document.querySelector(".active-btn")?.classList.remove("active-btn");
            targetButton.classList.add("active-btn");

            // Scroll to section
            if (withAnimation) {
                // Smooth scroll with animation for button clicks
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Instant scroll for wheel navigation
                targetSection.scrollIntoView({
                    behavior: 'auto',
                    block: 'start'
                });
            }
        }
    }

    // Update active button based on scroll position
    function updateActiveButton() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const button = document.querySelector(`[data-id="${sectionId}"]`);
                    if (button && !button.classList.contains('active-btn')) {
                        document.querySelector(".active-btn")?.classList.remove("active-btn");
                        button.classList.add("active-btn");
                    }
                }
            }
        });
    }

    // Button click functionality - WITH smooth animation
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            scrollToSection(button.dataset.id, true); // true = smooth scroll
        })
    });

    // Update active button on scroll
    let scrollTimeout;
    window.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveButton, 100);
    });

    // Initialize - set home as active
    const homeButton = document.querySelector('[data-id="home"]');
    if (homeButton) {
        homeButton.classList.add("active-btn");
    }

    // Theme toggle functionality
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
