# Acknowledgements

I would like to express my sincere gratitude to Aptech Learning Pakistan and the eProjects Department for providing me with the opportunity to work on this educational project. This eProject has helped me strengthen my understanding of web development concepts including HTML5, CSS3, JavaScript, responsive design, and browser-based APIs.

I would also like to thank my instructors and mentors for their guidance and support throughout the development of this project.

---

# eProject Synopsis

## Project Title

Rainwater Harvesting

## Project Description

Rainwater harvesting is the process of collecting, storing, and utilizing rainwater for various purposes such as irrigation, domestic use, groundwater recharge, and water conservation.

The objective of this project is to develop a responsive single-page website that educates users about rainwater harvesting techniques, benefits, methods, categories, and recent developments in the field.

The website is developed using HTML5, CSS3, JavaScript, and the Geolocation API.

### Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Geolocation API
* Google Maps Embed
* Visual Studio Code / Dreamweaver

---

# eProject Analysis

## Problem Statement

Rainwater harvesting is a technique used for collecting, storing and using rainwater for landscape irrigation and other uses. The rainwater is collected from various hard surfaces such as rooftops and other manmade aboveground hard surfaces.

The purpose of this website is to provide brief details, facts, and information about rainwater harvesting in a user-friendly environment.

## User Requirements

* Learn about rainwater harvesting
* Explore residential and commercial systems
* Understand methods and techniques
* View benefits and latest developments
* Contact the organization
* Access location information

## Functional Requirements

* Single-page navigation
* Responsive design
* Categories section
* Benefits section
* Process flow
* Types tabs
* Facts and methods section
* Statistics counters
* Contact form validation
* Geolocation API integration
* Google Maps integration

## Non-Functional Requirements

* Responsive layout
* Fast loading pages
* User-friendly interface
* Browser compatibility
* Maintainable code structure

---

# eProject Design

## Website Structure

1. Home
2. About
3. Categories
4. Benefits
5. Process
6. Types
7. Facts & Methods
8. Latest Developments
9. Statistics
10. Contact

---

# DFD (Level 0)

User → Rainwater Harvesting Website → Information Display

The user interacts with the website and receives educational information related to rainwater harvesting.

---

# DFD (Level 1)

User Input

↓

Navigation System

↓

Information Modules

* About
* Categories
* Benefits
* Process
* Types
* Facts
* Developments
* Statistics

↓

Contact Form

↓

Validation

↓

Confirmation Message

---

# Process Diagrams

## Rainwater Harvesting Process

Rainfall

↓

Catchment Surface

↓

Gutters and Pipes

↓

Filtration System

↓

Storage Tank

↓

Water Usage

* Irrigation
* Household Use
* Groundwater Recharge
* Drinking Water (after treatment)

---

# Database Design / Structure

This project is a static website and does not require a database.

If future enhancements include a backend contact system, the following table can be used:

## Contacts Table

| Field        | Type     |
| ------------ | -------- |
| id           | INT      |
| name         | VARCHAR  |
| email        | VARCHAR  |
| subject      | VARCHAR  |
| message      | TEXT     |
| submitted_at | DATETIME |

---

# User Guide

## Opening the Website

1. Open index.html in a browser.
2. The homepage will load automatically.

## Navigation

* Use the navigation bar to move between sections.
* Smooth scrolling is enabled.

## Types Section

* Click any tab to view information about a specific harvesting method.

## Contact Form

1. Enter Name.
2. Enter Email.
3. Select Subject.
4. Enter Message.
5. Click Submit.

## Geolocation

* Click the location button.
* Allow browser permission.
* Your coordinates will be displayed.

---

# Developer's Guide

## Project Structure

rainwater-harvesting-eproject/

* index.html
* styles.css
* script.js
* images/

## HTML

Contains all website sections and content.

## CSS

Contains responsive layout, colors, typography, animations, and mobile design.

## JavaScript

Handles interactivity, validation, tabs, counters, navigation, and geolocation.

---

# Module Descriptions

## smoothScroll()

Provides smooth navigation scrolling between sections.

## toggleHamburger()

Shows and hides the mobile navigation menu.

## initTabs()

Initializes all tab button events.

## showTab(tabId)

Displays the selected tab content.

## initCounters()

Starts statistics counters when visible.

## animateCounter()

Animates numbers from zero to target values.

## validateForm()

Validates all contact form fields.

## handleFormSubmit()

Processes form submission and success message display.

## highlightActiveNav()

Highlights the currently active navigation item during scrolling.
