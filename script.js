// script.js

document.addEventListener('DOMContentLoaded', function () {
    const alertButton = document.getElementById('alertButton');
    const contactForm = document.getElementById('contactForm');

    // Function to show more info about projects
    alertButton.addEventListener('click', function () {
        alert("Here are some more details about my projects:\n\n" +
              "1. Web Design: A fully responsive website designed to provide a great user experience.\n" +
              "2. JavaScript Game: An interactive game that challenges players with puzzles and tasks.\n" +
              "3. Portfolio Website: A comprehensive showcase of my skills and completed works.");
    });

    // Prevent default form submission and show alert
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Gather input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display confirmation alert
        alert(`Thank you, ${name}! Your message has been sent.\n\n` +
              `Email: ${email}\nMessage: ${message}`);

        // Optionally, clear the form after submission
        contactForm.reset();
    });
});
