// DOM Elements
const mentorName = document.getElementById("mentorName");
const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");

// Load Selected Mentor

const selectedMentor = localStorage.getItem("selectedMentor");

if (selectedMentor) {

    mentorName.value = selectedMentor;
    localStorage.removeItem("selectedMentor");

}

// Prevent Selecting Past Dates

const today = new Date().toISOString().split("T")[0];

document.getElementById("date").setAttribute("min", today);
// Handle Form Submission

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const booking = {

        mentor: mentorName.value,

        student: document.getElementById("studentName").value,

        email: document.getElementById("email").value,

        date: document.getElementById("date").value,

        time: document.getElementById("time").value,

        message: document.getElementById("message").value

    };
    // Get Existing Bookings
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show Success Message
    successMessage.style.display = "block";
    // Reset Form
    bookingForm.reset();

    
    // Hide Success Message
    setTimeout(() => {

        successMessage.style.display = "none";

    }, 3000);

});

// Console Message
console.log("Booking Page Loaded Successfully");
