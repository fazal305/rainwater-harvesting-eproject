const navLinks = document.querySelectorAll(".nav-link");
const navMenu = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const counters = document.querySelectorAll(".counter");
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const locationBtn = document.getElementById("locationBtn");
const locationResult = document.getElementById("locationResult");

let countersStarted = false;

/* Smooth scroll for navigation links */
function smoothScroll() {
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

                navMenu.classList.remove("show");
            }
        });
    });
}

/* Toggle mobile navigation menu */
function toggleHamburger() {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
}

/* Set up tab button click events */
function initTabs() {
    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedTab = button.getAttribute("data-tab");
            showTab(selectedTab);
        });
    });
}

/* Show selected tab and hide other tabs */
function showTab(tabId) {
    tabButtons.forEach(function (button) {
        button.classList.remove("active");

        if (button.getAttribute("data-tab") === tabId) {
            button.classList.add("active");
        }
    });

    tabContents.forEach(function (content) {
        content.classList.remove("active");

        if (content.id === tabId) {
            content.classList.add("active");
        }
    });
}

/* Start counters when statistics section is visible */
function initCounters() {
    const statisticsSection = document.getElementById("statistics");

    if (!statisticsSection) {
        return;
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && countersStarted === false) {
                    startCounters();
                    countersStarted = true;
                }
            });
        }, {
            threshold: 0.4
        });

        observer.observe(statisticsSection);
    } else {
        startCounters();
        countersStarted = true;
    }
}

/* Start all animated counters */
function startCounters() {
    counters.forEach(function (counter) {
        const target = Number(counter.getAttribute("data-target"));
        animateCounter(counter, target, 1600);
    });
}

/* Animate number from 0 to target */
function animateCounter(element, target, duration) {
    let currentValue = 0;
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    const increment = target / totalSteps;

    const counterInterval = setInterval(function () {
        currentValue += increment;

        if (currentValue >= target) {
            element.textContent = target;
            clearInterval(counterInterval);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, intervalTime);
}

/* Validate all contact form fields */
function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (subject.value === "") {
        subjectError.textContent = "Please select a subject.";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please write your message.";
        isValid = false;
    }

    return isValid;
}

/* Handle contact form submit */
function handleFormSubmit(event) {
    event.preventDefault();

    const formIsValid = validateForm();

    if (formIsValid) {
        contactForm.style.display = "none";
        successMessage.style.display = "block";
    }
}

/* Get user's current location using Geolocation API */
function getUserLocation() {
    if (!navigator.geolocation) {
        locationResult.textContent = "Geolocation is not supported by this browser.";
        return;
    }

    locationResult.textContent = "Detecting your location...";

    navigator.geolocation.getCurrentPosition(
        function (position) {
            const latitude = position.coords.latitude.toFixed(6);
            const longitude = position.coords.longitude.toFixed(6);

            locationResult.innerHTML =
                "Your current location was detected successfully.<br>" +
                "Latitude: " + latitude + "<br>" +
                "Longitude: " + longitude;
        },
        function () {
            locationResult.textContent = "Unable to access location. Please allow location permission in your browser.";
        }
    );
}

/* Highlight active navigation link while scrolling */
function highlightActiveNav() {
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSectionId) {
                link.classList.add("active");
            }
        });
    });
}

/* Start all JavaScript features */
smoothScroll();
toggleHamburger();
initTabs();
initCounters();
highlightActiveNav();

contactForm.addEventListener("submit", handleFormSubmit);
locationBtn.addEventListener("click", getUserLocation);