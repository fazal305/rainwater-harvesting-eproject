# Rainwater Harvesting eProject

A responsive educational single-page website about rainwater harvesting, built for the Aptech Sem-1 eProject.

## Live Links

- GitHub Repository: https://github.com/fazal305/rainwater-harvesting-eproject
- Live Demo: https://fazal305.github.io/rainwater-harvesting-eproject/

## Overview

Rainwater Harvesting eProject is an educational website that explains rainwater harvesting techniques, benefits, categories, methods, effective uses, latest developments, and statistics.

The project was created as an Aptech eProject using HTML5, CSS3, JavaScript, responsive design, tabs, counters, form validation, Geolocation API, and Google Maps embed.

## Features

- Responsive single-page layout
- Fixed navigation bar
- Smooth scrolling
- Mobile hamburger menu
- About rainwater harvesting section
- Residential and commercial categories
- Product and method explanations
- Benefits section
- Process flow section
- Interactive tabs for harvesting types
- Facts, methods, and effective use section
- Latest developments section
- Animated statistics counters
- Contact form with validation
- Browser Geolocation API
- Google Maps iframe
- Educational image gallery

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Geolocation API
- Google Maps Embed
- GitHub Pages
  Folder Structure
  rainwater-harvesting-eproject/
  images/
  commercial-tank.jpg
  filter-system.jpg
  garden-irrigation.jpg
  rain-barrel.jpg
  rooftop-harvesting.jpg
  storage-tank.jpg
  index.html
  styles.css
  script.js
  README.md
  LICENSE
  .gitignore
  Getting Started

Clone the repository:

git clone https://github.com/fazal305/rainwater-harvesting-eproject.git

Open the folder:

cd rainwater-harvesting-eproject

Open index.html in your browser.

No installation or build tools are required.

eProject Synopsis
Project Title

Rainwater Harvesting

Project Description

Rainwater harvesting is the process of collecting, storing, and using rainwater for irrigation, cleaning, domestic use, groundwater recharge, and water conservation.

This project explains rainwater harvesting in a simple educational format and demonstrates how frontend technologies can be used to build an informative environmental awareness website.

eProject Analysis

The website is designed for students, citizens, homeowners, and general users who want to understand rainwater harvesting.

Main user goals:

Learn what rainwater harvesting is
Understand residential and commercial harvesting systems
Explore common methods and benefits
View process steps visually
Learn effective uses of harvested rainwater
Contact the project team
Use geolocation to detect current location
eProject Design

The project uses a single-page website design with multiple sections connected through a fixed navigation bar.

Main design sections:

Home
About
Categories
Benefits
Process
Types
Facts and Methods
Latest Developments
Statistics
Contact and Geolocation
DFDs
Level 0 DFD
User
|
v
Rainwater Harvesting Website
|
v
Information Display / Contact Form / Geolocation Output
Level 1 DFD
User Input
|
|-- Navigation click --> Website section display
|-- Contact form data --> Form validation --> Success message
|-- Location request --> Browser Geolocation API --> Latitude/Longitude output
|-- Tab click --> JavaScript tab system --> Relevant content display
Process Diagrams
Rainwater Harvesting Process
Rainfall
↓
Rooftop / Catchment Area
↓
Gutters and Pipes
↓
Filtration
↓
Storage Tank
↓
Effective Use
Website Interaction Process
User opens website
↓
User reads educational sections
↓
User interacts with tabs/counters/form/location
↓
Website displays dynamic result
Database Design / Structure

This project does not use a database because it is a static educational frontend website.

Future database structure could include:

contacts
id
name
email
subject
message
createdAt

resources
id
title
category
description
image
User Guide
Open the website in a browser.
Use the navigation menu to move between sections.
Read the rainwater harvesting categories, methods, and benefits.
Click the tabs in the Types section to view different harvesting methods.
View the animated statistics section.
Fill out the contact form.
Use the location button to detect your latitude and longitude.
Developer Guide

The project uses simple static frontend files.

Edit index.html to change content or sections.
Edit styles.css to update layout, colors, and responsiveness.
Edit script.js to update interactions, form validation, tabs, counters, and geolocation logic.
Keep image paths inside the images/ folder.
Deploy using GitHub Pages from the main branch.
Module Descriptions
Navigation Module

Handles smooth scrolling and active navigation links.

Tabs Module

Displays different rainwater harvesting types using tab buttons.

Counter Module

Animates statistics when the section becomes visible.

Contact Form Module

Validates name, email, subject, and message fields.

Geolocation Module

Uses the browser Geolocation API to display latitude and longitude.

Responsive Design Module

Uses CSS media queries to support desktop, tablet, and mobile screens.

Architecture Notes

The app is built as a static frontend project.

index.html contains all educational sections.
styles.css handles layout, cards, image gallery, responsive design, and visual styling.
script.js handles smooth scrolling, hamburger menu, tabs, counters, form validation, active nav state, and geolocation.
Accessibility

Accessibility support includes:

Semantic sections
Image alt text
Form labels
Button type handling through JavaScript
Mobile menu aria-expanded
Tab aria-selected states
Active nav aria-current
Keyboard Escape support for closing the mobile menu
Performance

Performance notes:

Static website
No external frontend framework
Optimized image folder structure
Lazy-loaded Google Maps iframe
Lightweight JavaScript
GitHub Pages compatible
Testing Checklist

Before final submission:

Test navigation links
Test mobile hamburger menu
Test Escape key closing mobile menu
Test tabs
Test statistics counters
Test contact form validation
Test geolocation button
Test Google Maps iframe
Test all images load correctly
Test mobile responsiveness
Run JavaScript syntax check:
node --check script.js
Lessons Learned
Building a complete educational single-page website
Organizing eProject documentation
Using JavaScript for tabs, counters, and validation
Using browser Geolocation API
Embedding Google Maps
Writing project documentation for academic and portfolio use
Preparing a frontend project for GitHub Pages deployment
Future Improvements
Add Urdu and Roman Urdu language switcher
Add downloadable PDF report
Add water savings calculator
Add rainfall data integration
Add Firebase contact form storage
Add real project resources section
Add quiz about water conservation
Add custom domain under fazallabs.dev later
