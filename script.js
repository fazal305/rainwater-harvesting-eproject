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

function smoothScroll() {
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            closeMobileMenu();
        });
    });
}

function toggleHamburger() {
    if (!hamburger || !navMenu) {
        return;
    }

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.addEventListener("click", function () {
        const menuIsOpen = navMenu.classList.toggle("show");
        hamburger.setAttribute("aria-expanded", String(menuIsOpen));
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    if (!hamburger || !navMenu) {
        return;
    }

    navMenu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
}

function initTabs() {
    tabButtons.forEach(function (button) {
        const selectedTab = button.getAttribute("data-tab");
        const relatedContent = document.getElementById(selectedTab);

        button.setAttribute("type", "button");
        button.setAttribute("aria-controls", selectedTab);
        button.setAttribute("aria-selected", button.classList.contains("active") ? "true" : "false");

        if (relatedContent) {
            relatedContent.setAttribute("role", "tabpanel");
        }

        button.addEventListener("click", function () {
            showTab(selectedTab);
        });
    });
}

function showTab(tabId) {
    tabButtons.forEach(function (button) {
        const isActive = button.getAttribute("data-tab") === tabId;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });

    tabContents.forEach(function (content) {
        content.classList.toggle("active", content.id === tabId);
    });
}

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
                    observer.unobserve(statisticsSection);
                }
            });
        }, {
            threshold: 0.4
        });

        observer.observe(statisticsSection);
        return;
    }

    startCounters();
    countersStarted = true;
}

function startCounters() {
    counters.forEach(function (counter) {
        const target = Number(counter.getAttribute("data-target"));

        if (Number.isFinite(target)) {
            animateCounter(counter, target, 1600);
        }
    });
}

function animateCounter(element, target, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(target * progress);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
}

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

    clearFormErrors(nameError, emailError, subjectError, messageError);

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
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

function clearFormErrors(...errorElements) {
    errorElements.forEach(function (errorElement) {
        errorElement.textContent = "";
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    contactForm.reset();
    contactForm.style.display = "none";
    successMessage.style.display = "block";
}

function getUserLocation() {
    if (!navigator.geolocation) {
        locationResult.textContent = "Geolocation is not supported by this browser.";
        return;
    }

    locationBtn.disabled = true;
    locationBtn.textContent = "Detecting...";
    locationResult.textContent = "Detecting your location...";

    navigator.geolocation.getCurrentPosition(
        function (position) {
            const latitude = position.coords.latitude.toFixed(6);
            const longitude = position.coords.longitude.toFixed(6);

            locationResult.textContent = `Your current location was detected successfully. Latitude: ${latitude}, Longitude: ${longitude}`;
            resetLocationButton();
        },
        function () {
            locationResult.textContent = "Unable to access location. Please allow location permission in your browser.";
            resetLocationButton();
        }
    );
}

function resetLocationButton() {
    locationBtn.disabled = false;
    locationBtn.textContent = "Show My Current Location";
}

function highlightActiveNav() {
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            const isActive = link.getAttribute("href") === `#${currentSectionId}`;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    });
}

smoothScroll();
toggleHamburger();
initTabs();
initCounters();
highlightActiveNav();

if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
}

if (locationBtn) {
    locationBtn.addEventListener("click", getUserLocation);
}