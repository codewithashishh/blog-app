# 📝 Blog App

A secure full-stack blog application built with **Node.js, Express.js, MongoDB, and EJS**. Users can register, log in using **JWT authentication**, create blogs, and manage only their own posts.

## ✨ Features

* 🔐 JWT Authentication (HttpOnly Cookies)
* 🔒 Password Hashing with bcrypt
* 👤 User Registration & Login
* ✍️ Create, Edit & Delete Blogs
* 📖 View All Blogs
* 🛡️ Protected Routes & Authorization
* 🚪 Secure Logout
* 🏗️ MVC Architecture

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT, bcrypt, cookie-parser
* **Frontend:** EJS, HTML, CSS

## 🚀 Getting Started

```bash
git clone https://github.com/codewithashishh/blog-app.git
cd blog-app
npm install
```

Create a `.env` file:

```env
JWT_SECRET=your_secret_key
```

Run the project:

```bash
npm start
```

## 📚 Key Concepts

* JWT Authentication & Authorization
* Express Middleware
* CRUD Operations
* MongoDB ObjectId References
* MVC Architecture

## 🌟 Future Improvements

* Refresh Tokens
* Comments & Likes
* Image Uploads
* Rich Text Editor
* Search & Pagination
