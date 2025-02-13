document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openButtons = document.querySelectorAll("#openModal");
    const closeButton = document.getElementById("closeModal");

    // Open Modal for all buttons with class "openModal"
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.classList.remove("hidden");
        });
    });

    // Open Modal if there's an element with ID "openModal"
    const openModalButton = document.getElementById("openModal");
    if (openModalButton) {
        openModalButton.addEventListener("click", function () {
            modal.classList.remove("hidden");
        });
    }

    // Close Modal when clicking the close button
    closeButton.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    // Close Modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // Form Validation
    document.getElementById("leadForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;

        if (name === "" || email === "" || phone === "" || country === "") {
            alert("All fields are required!");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Enter a valid email address!");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Enter a valid 10-digit phone number!");
            return;
        }

        alert("Form submitted successfully!");
        modal.classList.add("hidden"); // Close modal on success
    });
});
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Run animation once
    delay: 200, // Add slight delay for smooth loading
    mirror: false     
});
