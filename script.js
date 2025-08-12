document.addEventListener('DOMContentLoaded', function () {
    // ---------------------- General UI Functions ----------------------

    // Function to smooth scroll to a specific section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Event listeners for scrolling to product sections
    document.getElementById('coffeeBtn').addEventListener('click', function () {
        scrollToSection('coffee-products');
    });

    document.getElementById('muffinsBtn').addEventListener('click', function () {
        scrollToSection('muffin-products');
    });

    document.getElementById('cookiesBtn').addEventListener('click', function () {
        scrollToSection('cookie-products');
    });

    document.getElementById('donutsBtn').addEventListener('click', function () {
        scrollToSection('donut-products');
    });

    // Toggle additional description in the About section
    const readMoreBtn = document.getElementById('read-more-btn');
    const additionalDescription = document.getElementById('additional-description');

    readMoreBtn.addEventListener('click', function () {
        additionalDescription.style.display = additionalDescription.style.display === 'none' ? 'block' : 'none';
        readMoreBtn.textContent = additionalDescription.style.display === 'none' ? 'Read More' : 'Read Less';
    });

    // Handle footer link alerts
    document.getElementById('newsletter').addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked Subscribe to Newsletter');
    });

    document.getElementById('social-media').addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked Follow Us on Social Media');
    });

    document.getElementById('events').addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked Coffee Events Calendar');
    });

    // ---------------------- Form Handling ----------------------

    // Form submission and validation logic
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Display form data in an alert for user confirmation
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            alert(
                'Form submitted successfully!\n\n' +
                'Name: ' + data['name'] + '\n' +
                'Email: ' + data['email'] + '\n' +
                'Suggestions: ' + data['suggestions'] + '\n' +
                'Rating: ' + data['rating'] + '\n' +
                'Overall Experience: ' + data['overallExperience']
            );

            // Here you would typically send the form data to a server,
            // but for now, we'll just show the alert.
            // contactForm.submit(); // This line would submit the form to the backend.
        }
    });

    // Function to validate form inputs
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const suggestions = document.getElementById('suggestions').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');
        const overallExperience = document.getElementById('overallExperience').value;

        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (suggestions === '') {
            alert('Please provide your suggestions.');
            return false;
        }

        if (!rating) {
            alert('Please select a rating.');
            return false;
        }

        if (overallExperience === '') {
            alert('Please select your overall experience.');
            return false;
        }

        return true;
    }

    // ---------------------- Cart Functionality ----------------------

    // Cart array to store selected products (replaces the old one)
    let cart = [];

    // Function to add an item to the cart
    function addToCart(name, price, image) {
        const item = { name, price, image, id: cart.length + 1, quantity: 1 };
        cart.push(item);
        alert(`${name} has been added to your cart!`);
        window.location.href = "cart.html"; // Redirect to a placeholder cart page
    }

    // Event listeners for all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        const productName = button.parentNode.querySelector('h2').innerText;
        const productPrice = parseFloat(button.parentNode.querySelector('.price').innerText.replace('£', ''));
        const productImage = button.parentNode.querySelector('img').src;

        button.addEventListener('click', () => addToCart(productName, productPrice, productImage));
    });
});

// ---------------------- Welcome Pop-up Logic ----------------------

// Function to close the welcome pop-up
function closeWelcomePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
}

// Function to display the welcome pop-up when the page loads
window.onload = function () {
    document.getElementById('welcomePopup').style.display = 'block';
};
