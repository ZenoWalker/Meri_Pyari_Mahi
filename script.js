// Slideshow functionality for index.html
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Form validation for recharge.html
document.getElementById("recharge-form").addEventListener("submit", function(event) {
    let name = document.getElementById("cardholder-name").value;
    let cardNumber = document.getElementById("card-number").value;
    let email = document.getElementById("email").value;

    // Regular expression for name validation (only letters and spaces)
    let namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Name should only contain letters and spaces.");
        event.preventDefault();
    }

    // Regular expression for card number validation (10 digits)
    let cardNumberPattern = /^\d{10}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        alert("Card number should be exactly 10 digits.");
        event.preventDefault();
    }

    // Regular expression for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// Form validation for issue.html
document.getElementById("issue-form").addEventListener("submit", function(event) {
    let name = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;

    // Regular expression for name validation (only letters and spaces)
    let namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Name should only contain letters and spaces.");
        event.preventDefault();
    }

    // Regular expression for phone number validation (10 digits)
    let phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Phone number should be exactly 10 digits.");
        event.preventDefault();
    }

    // Regular expression for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
// Form validation for invest.html
document.getElementById("invest-form").addEventListener("submit", function(event) {
    let name = document.getElementById("investor-name").value;
    let companyName = document.getElementById("company-name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let investmentAmount = document.getElementById("investment-amount").value;

    // Regular expression for name validation (only letters and spaces)
    let namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Investor name should only contain letters and spaces.");
        event.preventDefault();
    }

    // Regular expression for company name validation (only letters, numbers, and spaces)
    let companyNamePattern = /^[a-zA-Z0-9\s]+$/;
    if (!companyNamePattern.test(companyName)) {
        alert("Company name should only contain letters, numbers, and spaces.");
        event.preventDefault();
    }

    // Regular expression for phone number validation (10 digits)
    let phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Phone number should be exactly 10 digits.");
        event.preventDefault();
    }

    // Regular expression for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    // Check if investment amount is a positive number
    if (investmentAmount <= 0) {
        alert("Investment amount should be a positive number.");
        event.preventDefault();
    }
});

