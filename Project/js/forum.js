// 
// DOM ELEMENTS

const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");
const successMessage = document.getElementById("successMessage");

// LOAD POSTS

let posts = JSON.parse(localStorage.getItem("forumPosts")) || [];

// DISPLAY POSTS

function displayPosts() {

    postsContainer.innerHTML = "";

    if (posts.length === 0) {

        postsContainer.innerHTML = `
            <h2 style="text-align:center; grid-column:1/-1;">
                No discussions yet.
            </h2>
        `;

        return;
    }

    posts.forEach((post, index) => {

        const card = document.createElement("div");

        card.className = "post-card";

        card.innerHTML = `

            <h3>${post.title}</h3>

            <p class="post-author">

                <strong>${post.author}</strong>

            </p>

            <p class="post-question">

                ${post.question}

            </p>

            <button class="like-btn" data-index="${index}">
                ${post.liked ? "❤️" : "🤍"} ${post.likes} Likes
            </button>

        `;

        postsContainer.appendChild(card);

    });

    attachLikeEvents();

}

// ADD NEW POST

postForm.addEventListener("submit", function(e){

    e.preventDefault();

    const newPost = {

        author: document.getElementById("author").value,

        title: document.getElementById("title").value,

        question: document.getElementById("question").value,

        likes: 0,

        liked: false

    };

    posts.unshift(newPost);

    localStorage.setItem("forumPosts", JSON.stringify(posts));

    displayPosts();

    postForm.reset();

    successMessage.style.display = "block";

    setTimeout(() => {

        successMessage.style.display = "none";

    }, 3000);

});

// LIKE / UNLIKE

function attachLikeEvents(){

    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const index = button.dataset.index;

            if(posts[index].liked){

                posts[index].likes--;

                posts[index].liked = false;

            }
            else{

                posts[index].likes++;

                posts[index].liked = true;

            }

            localStorage.setItem("forumPosts", JSON.stringify(posts));

            displayPosts();

        });

    });

}

// INITIAL DISPLAY

displayPosts();

console.log("Forum Loaded Successfully");