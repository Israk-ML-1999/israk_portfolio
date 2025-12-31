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

    // Project data embedded directly (works on GitHub Pages)
    const projectsData = {
        "projects": [
            {
                "id": "project-1",
                "title": "Doctor Appointment Booking System",
                "description": "A comprehensive healthcare management system that streamlines the appointment booking process for patients and doctors. Built with modern web technologies to provide an intuitive user experience."
            },
            {
                "id": "project-2",
                "title": "Medical Chatbot using RAG",
                "description": "An intelligent medical chatbot powered by Generative AI and Retrieval-Augmented Generation (RAG) to provide accurate medical information and assistance to users."
            },
            {
                "id": "project-3",
                "title": "Daily Life Personal Voice Assistant",
                "description": "A smart voice assistant application designed to help with daily tasks, reminders, and information retrieval using natural language processing and speech recognition technologies."
            },
            {
                "id": "project-4",
                "title": "AI Video Summarizer with Multi-Agent Tools",
                "description": "An advanced AI system that transcribes and summarizes video content using multi-agent architecture, making it easy to extract key information from long videos."
            },
            {
                "id": "project-5",
                "title": "AI-Powered E-Commerce Inventory Tracking",
                "description": "A real-time inventory management system for e-commerce platforms powered by AI to optimize stock levels, predict demand, and automate reordering processes."
            },
            {
                "id": "project-6",
                "title": "Natural Language to SQL System",
                "description": "An innovative system that converts natural language queries into SQL statements, making database interactions accessible to non-technical users through AI-powered language understanding."
            },
            {
                "id": "project-7",
                "title": "Bangla News Headline Classifier & Sentiment Analysis",
                "description": "A fine-tuned Bangla-BART model for multi-level, multi-class classification of Bangla news headlines with sentiment analysis capabilities, supporting the Bangla language NLP ecosystem."
            }
        ]
    };

    // Load project data
    function loadProjectData() {
        console.log('Loading project data...');

        // Populate each project
        projectsData.projects.forEach(project => {
            const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
            if (projectElement) {
                const titleElement = projectElement.querySelector('.project-title');
                const descriptionElement = projectElement.querySelector('.project-description');

                if (titleElement) {
                    titleElement.textContent = project.title;
                }
                if (descriptionElement) {
                    descriptionElement.textContent = project.description;
                }
                console.log(`Populated project: ${project.id}`);
            } else {
                console.warn(`Project element not found for: ${project.id}`);
            }
        });
        console.log('All projects populated successfully!');
    }

    // Load project data when page loads
    loadProjectData();

    // Theme toggle functionality
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
