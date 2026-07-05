// ====================================
// LOAD DATA FROM LOCAL STORAGE
// ====================================

const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const forumPosts = JSON.parse(localStorage.getItem("forumPosts")) || [];

// Total mentors (same as mentors.js)
const totalMentors = 6;

// ====================================
// UPDATE STATISTICS
// ====================================

document.getElementById("mentorCount").textContent = totalMentors;

document.getElementById("bookingCount").textContent = bookings.length;

document.getElementById("forumCount").textContent = forumPosts.length;

// ====================================
// RECENT BOOKINGS
// ====================================

const bookingList = document.getElementById("bookingList");

if(bookings.length === 0){

    bookingList.innerHTML = `
        <div class="empty-message">
            No bookings available.
        </div>
    `;

}
else{

    bookings.forEach(booking=>{

        const card = document.createElement("div");

        card.className = "list-card";

        card.innerHTML = `

            <h3>${booking.student}</h3>

            <p><strong>Mentor:</strong> ${booking.mentor}</p>

            <p><strong>Email:</strong> ${booking.email}</p>

            <p><strong>Date:</strong> ${booking.date}</p>

            <p><strong>Time:</strong> ${booking.time}</p>

            <p><strong>Purpose:</strong> ${booking.message}</p>

        `;

        bookingList.appendChild(card);

    });

}

// ====================================
// RECENT DISCUSSIONS
// ====================================

const forumList = document.getElementById("forumList");

if(forumPosts.length === 0){

    forumList.innerHTML = `
        <div class="empty-message">
            No discussions available.
        </div>
    `;

}
else{

    forumPosts.forEach(post=>{

        const card = document.createElement("div");

        card.className = "list-card";

        card.innerHTML = `

            <h3>${post.title}</h3>

            <p><strong>Posted By:</strong> ${post.author}</p>

            <p>${post.question}</p>

            <p><strong>Likes:</strong> ❤️ ${post.likes}</p>

        `;

        forumList.appendChild(card);

    });

}

console.log("Dashboard Loaded Successfully");