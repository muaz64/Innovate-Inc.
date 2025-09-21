
# Innovate Inc. - Corporate Website

This repository contains the source code for the Innovate Inc. corporate website, a fully responsive, multi-page static site built with modern web technologies. The website is designed to be clean, professional, and user-friendly, showcasing the company's services and values.

**Live Demo:** [https://innovate-inc.netlify.app/](https://innovate-inc.netlify.app/)



## 🔹 Project Overview

This project is a complete corporate website built from the ground up using only HTML, Tailwind CSS, and Vanilla JavaScript. It adheres to modern web standards, including SEO best practices, responsive design, and essential legal pages. The state of interactive components, such as the cookie consent banner and contact form, is managed using `localStorage` to ensure a persistent user experience.

## ✨ Key Features

* **Fully Responsive Design:** The layout seamlessly adapts to all screen sizes, from mobile phones to desktop monitors.
* **Multi-Page Structure:** The website includes all essential corporate pages:
    * **Home:** A welcoming landing page with a clear value proposition, service highlights, and pricing.
    * **About Us:** Details the company's mission, vision, and team.
    * **Services:** Provides an in-depth look at the solutions offered.
    * **Contact:** A functional contact form with a success message upon submission.
    * **Legal Pages:** Comprehensive pages for Privacy Policy, Terms of Service, and a Cookie Policy.
* **Dynamic Cookie Consent Popup:** A non-intrusive banner that appears for first-time visitors and remembers their consent via `localStorage`.
* **Form Submission Handling:** The contact form provides a clear success message after submission, with the status managed through `localStorage`.
* **SEO Optimized:** Each page includes unique meta titles, descriptions, keywords, and a canonical URL to improve search engine visibility.
* **Clean & Modern UI:** Styled with Tailwind CSS for a professional and consistent look and feel, featuring subtle animations and transitions for a better user experience.

## 🚀 Technology Stack

This project was built with a focus on simplicity and performance, avoiding heavy frameworks.

* **HTML5:** For the core structure and content of all pages.
* **Tailwind CSS (v3):** Utilized via a CDN for all styling, enabling a utility-first approach to create a responsive and modern design.
* **Vanilla JavaScript (ES6):** For all client-side logic, including the mobile menu, cookie consent functionality, and form submission status.
* **Font Awesome:** Used for professional and clean icons throughout the website.
* **Netlify:** Deployed and hosted for fast and reliable access.

## 📁 File Structure

The project follows a clean and intuitive folder structure, making it easy to navigate and maintain. All URLs use directory paths for a cleaner look (e.g., `/about/` instead of `/about/index.html`).

```

/
├── index.html            \# Home Page
├── about/
│   └── index.html        \# About Us Page
├── contact/
│   └── index.html        \# Contact Page
├── services/
│   └── index.html        \# Services Page
├── privacy/
│   └── index.html        \# Privacy Policy Page
├── terms/
│   └── index.html        \# Terms of Service Page
└── cookies/
└── index.html        \# Cookie Policy Page

````

## 🛠️ How to Use

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser to view the files. No build tools or dependencies are required.

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/your-username/innovate-inc-website.git](https://github.com/your-username/innovate-inc-website.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd innovate-inc-website
    ```
3.  Open any of the `index.html` files in your browser to view the website. For the best experience, it's recommended to use a live server extension in your code editor (like "Live Server" for VS Code) to handle the clean URL paths correctly.

## 📄 License

This project is open-source and available for anyone to use. Please see the `LICENSE` file for more details.

---
*This README was last updated on September 21, 2025.*
```eof
````