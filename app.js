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
                "description": "An AI-powered hospital appointment booking system that enables patients to book, manage, and track doctor appoint ments through a natural conversational interface. Smart scheduling with 20 minute slot management, real-time doctor availability checking with real-time updates, Doctor off-day handling with alternative time suggestions and multiple medical departments."
            },
            {
                "id": "project-2",
                "title": "Medical Chatbot using RAG",
                "description": "Developed medical chatbot system that enables users to ask, understand, and receive accurate medical information through a natural conversational interface. Built this system uses RAG to extract relevant context from medical PDF documents. PDF-based knowledge ingestion, semantic search using vector embeddings, and fast, context-aware medical responses, alldelivered through a secure Flask-based web application with an interactive UI."
            },
            {
                "id": "project-3",
                "title": "Daily Life Personal Voice Assistant",
                "description": "Developed AI-powered voice assistant that lets you manage your tasks hands-free through natural voice commands. Built with FastAPI and leveraging OpenAI’s advanced language models. Answers questions about your schedule, and provides contextual assistance for task management."
            },
            {
                "id": "project-4",
                "title": "AI Video Summarizer with Multi-Agent Tools",
                "description": "That system enables users to upload videos, transcribe audio, and interact with content through natural language queries.Supports automatic audio transcription, context-aware video summarization, fact-checking, and web-based information retrieval using a multi-agent architecture, delivering fast and intelligent insights."
            },
            {
                "id": "project-5",
                "title": "AI-Powered E-Commerce Inventory Tracking",
                "description": "Developed AI-powered E-commerce assistant that provides intelligent product suggestions, continuous embedding Product Information, multilingual conversational support, and the system integrates real-time inventory tracking."
            },
            {
                "id": "project-6",
                "title": "Natural Language to SQL System",
                "description": "An innovative system that converts natural language queries into SQL statements, making database interactions accessible to non-technical users through AI-powered language understanding.provide profassional data analysis and visualization pdf report."
            },
            {
                "id": "project-7",
                "title": "Bangla News Headline Classifier & Sentiment Analysis",
                "description": "Alow-resource Bangla news headline classification and sentiment analysis system developed using a fine-tuned BanglaBART transformer. Dual-head architecture to perform topic classification and sentiment prediction in a single inference pass, optimized for low-resource Bangla NLP settings. Use custom Bangla stop-word filtering and stemming pipelines."
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
