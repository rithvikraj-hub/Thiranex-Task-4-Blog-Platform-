Thiranex Internship - Task 4

Blog Platform with Comments

Developed By

KARAKAMBADI RITHVIKRAJ
B.Tech Computer Science Student

---

Project Overview

This project is a Blog Platform developed as part of the Thiranex Internship Task 4. The application allows users to create blog posts, view published posts, and interact through comments. The project demonstrates frontend and backend integration using HTML, CSS, JavaScript, Node.js, and Express.js.

---

Features

- Create Blog Posts
- View All Blog Posts
- Delete Blog Posts
- Comment System API
- User Authentication API Structure
- RESTful API Architecture
- Responsive User Interface
- Full-Stack Development Implementation

---

Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js
- CORS
- dotenv

---

Project Structure

Blog-Platform/
│
├── frontend/
│   ├── index.html
│   ├── create-post.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   │
│   ├── models/
│   │   └── Post.js
│   │
│   ├── database/
│   │   └── db.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
└── README.md

---

Installation

Clone Repository

git clone <repository-link>

Backend Setup

cd backend
npm install

Run Server

node server.js

Server runs at:

http://localhost:5000

---

API Endpoints

Home Route

GET /

Response:

Blog Platform API Running 🚀

Get All Posts

GET /api/posts

Create Post

POST /api/posts

Example Request Body:

{
  "title": "My First Blog",
  "content": "This is my blog content",
  "author": "Rithvikraj"
}

Delete Post

DELETE /api/posts/:id

---

How to Use

1. Start the backend server.
2. Open "create-post.html".
3. Enter:
   - Post Title
   - Content
   - Author Name
4. Click Publish Post.
5. The blog post will be stored and displayed through the API.

---

Learning Outcomes

- Understanding REST APIs
- Frontend and Backend Integration
- CRUD Operations
- Express.js Routing
- JSON Data Handling
- Full-Stack Web Development Concepts

---

Internship Submission

This project was developed and submitted by Karakambadi Rithvikraj as part of the Thiranex Internship Program – Task 4: Blog Platform with Comments.
