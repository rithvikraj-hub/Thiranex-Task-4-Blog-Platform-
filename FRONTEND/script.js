const API_URL = "http://localhost:5000";

// Load Posts
async function loadPosts() {
    try {
        const res = await fetch(`${API_URL}/api/posts`);
        const posts = await res.json();

        const container = document.getElementById("posts");

        if (!container) return;

        container.innerHTML = "";

        posts.forEach(post => {
            container.innerHTML += `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <small>By ${post.author}</small>
                </div>
                <hr>
            `;
        });
    } catch (error) {
        console.error(error);
    }
}