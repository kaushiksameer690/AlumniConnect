// Mentor Data

const mentors = [

    {
        name: "Rahul Sharma",
        domain: "Web Development",
        experience: "5 Years",
        bio: "Frontend Engineer passionate about React and JavaScript.",
        image: "assets/images/mentor1.jpg",
        available: true
    },

    {
        name: "Priya Mehta",
        domain: "Artificial Intelligence",
        experience: "4 Years",
        bio: "Machine Learning Engineer helping students break into AI.",
        image: "assets/images/mentor2.jpg",
        available: false
    },

    {
        name: "Aman Verma",
        domain: "Android Development",
        experience: "6 Years",
        bio: "Android Developer specializing in Kotlin and Jetpack Compose.",
        image: "assets/images/mentor3.jpg",
        available: true
    },

    {
        name: "Neha Kapoor",
        domain: "Cyber Security",
        experience: "7 Years",
        bio: "Security Analyst with expertise in ethical hacking.",
        image: "assets/images/mentor4.jpg",
        available: true
    },

    {
        name: "Arjun Singh",
        domain: "Data Science",
        experience: "3 Years",
        bio: "Data Scientist experienced in Python, SQL and Power BI.",
        image: "assets/images/mentor5.jpg",
        available: false
    },

    {
        name: "Sneha Gupta",
        domain: "Web Development",
        experience: "8 Years",
        bio: "Full Stack Developer mentoring aspiring software engineers.",
        image: "assets/images/mentor6.jpg",
        available: true
    }

];

// DOM Elements

const mentorContainer = document.getElementById("mentorContainer");
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");

// Display Mentors

function displayMentors(data){

    mentorContainer.innerHTML = "";

    if(data.length === 0){

        mentorContainer.innerHTML = `
            <h2 style="grid-column:1/-1;text-align:center;">
                No mentors found.
            </h2>
        `;

        return;
    }

    data.forEach(mentor=>{

        const card = document.createElement("div");

        card.className = "mentor-card";

        card.innerHTML = `

            <img src="${mentor.image}" alt="${mentor.name}">

            <h2>${mentor.name}</h2>

            <p class="domain">${mentor.domain}</p>

            <p class="experience">${mentor.experience}</p>

            <p class="bio">${mentor.bio}</p>

            <span class="status ${mentor.available ? "available":"busy"}">

                ${mentor.available ? "Available":"Busy"}

            </span>

            <button class="book-btn">

                Book Session

            </button>

        `;

        const button = card.querySelector(".book-btn");

        button.addEventListener("click",()=>{

            localStorage.setItem("selectedMentor",mentor.name);

            alert(`Booking request started for ${mentor.name}`);

            window.location.href = "booking.html";

        });

        mentorContainer.appendChild(card);

    });

}

// Search

searchInput.addEventListener("input",filterMentors);

// Filter

domainFilter.addEventListener("change",filterMentors);

// Search + Filter Function

function filterMentors(){

    const searchText = searchInput.value.toLowerCase();

    const selectedDomain = domainFilter.value;

    const filtered = mentors.filter(mentor=>{

        const matchName = mentor.name.toLowerCase().includes(searchText);

        const matchDomain =

            selectedDomain==="All" ||

            mentor.domain===selectedDomain;

        return matchName && matchDomain;

    });

    displayMentors(filtered);

}

// Initial Display

displayMentors(mentors);
