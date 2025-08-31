document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Handler ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Cookie Consent Handler (MODIFIED) ---
    const cookiePopup = document.getElementById('cookie-consent-popup');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies'); // Get the new decline button
    
    // Check localStorage for either accepted or declined status
    const hasAccepted = localStorage.getItem('cookie_consent_accepted');
    const hasDeclined = localStorage.getItem('cookie_consent_declined');

    // Only show the popup if no decision has been made
    if (!hasAccepted && !hasDeclined && cookiePopup) {
        setTimeout(() => {
            cookiePopup.classList.remove('hidden');
            cookiePopup.style.animation = 'fadeInUp 0.5s ease-out forwards';
        }, 1500);
    }

    // Add event listener for the Accept button
    if (acceptCookiesButton && cookiePopup) {
        acceptCookiesButton.addEventListener('click', () => {
            localStorage.setItem('cookie_consent_accepted', 'true');
            cookiePopup.classList.add('hidden');
        });
    }

    // Add event listener for the Decline button
    if (declineCookiesButton && cookiePopup) {
        declineCookiesButton.addEventListener('click', () => {
            localStorage.setItem('cookie_consent_declined', 'true');
            cookiePopup.classList.add('hidden');
        });
    }

    // --- Scroll Reveal Animation Handler ---
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    if (scrollElements.length > 0) {
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add('visible');
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };

        // Initial check on page load
        handleScrollAnimation();
        
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
    }

});