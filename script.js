
document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // FOOTER YEAR
    document.querySelectorAll("[data-year]").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    // HEADER SCROLL EFFECT
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 40);
        }
    });

    // SCROLL REVEAL
    const revealItems = document.querySelectorAll(
        ".category-card, .product-card, .journal-grid article"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(item => {
            item.classList.add("reveal-item");
            observer.observe(item);
        });
    }

    // NEWSLETTER DEMO
    document.querySelectorAll(".newsletter-form").forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const message = form.querySelector(".newsletter-message");

            if (message) {
                message.textContent =
                    "Thank you for joining the Veloura community!";
            }

            form.reset();
        });
    });

    // PRODUCT QUANTITY
    const quantityValue = document.getElementById("quantityValue");
    const quantityMinus = document.getElementById("quantityMinus");
    const quantityPlus = document.getElementById("quantityPlus");

    if (quantityValue && quantityMinus && quantityPlus) {

        quantityMinus.addEventListener("click", () => {
            let quantity = Number(quantityValue.textContent);
            quantityValue.textContent = Math.max(1, quantity - 1);
        });

        quantityPlus.addEventListener("click", () => {
            let quantity = Number(quantityValue.textContent);
            quantityValue.textContent = quantity + 1;
        });
    }

    // PRODUCT SIZE SELECTION
    document.querySelectorAll(".product-size-options button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".product-size-options button")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");
        });
    });

    // PRODUCT COLOUR SELECTION
    document.querySelectorAll(".product-color-options button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".product-color-options button")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");
        });
    });

    // ADD TO BAG DEMO
    const addToBag = document.getElementById("addToBag");
    const bagMessage = document.getElementById("bagMessage");

    if (addToBag && bagMessage) {
        addToBag.addEventListener("click", () => {
            bagMessage.textContent =
                "Added to your demo bag! Thank you for shopping Veloura.";

            bagMessage.style.display = "block";
        });
    }

    // CONTACT FORM DEMO
    const contactForm = document.getElementById("contactForm");
    const contactFormMessage =
        document.getElementById("contactFormMessage");

    if (contactForm && contactFormMessage) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            contactFormMessage.textContent =
                "Thank you for contacting Veloura! This is a demo form.";

            contactForm.reset();
        });
    }

});