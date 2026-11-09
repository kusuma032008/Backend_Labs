# Backend Development – Lab 1
## Setting Up a Node.js Project and Creating a Basic Express Server

### Student Details

- **Name:** G. Kusuma
- **Registration Number:** 252U1R5050
- **Section:** AIDE - 2A
- **Course:** B.Tech – Computer Science and Engineering
- **Lab:** Backend Development – Lab 1

---

## 1. Objective

To set up a Node.js project, understand the `package.json` file, create a basic HTTP server using Node.js built-in modules, and build a web server using Express.js with different HTTP routes.

## 2. Technologies Used

- Node.js
- Express.js
- JavaScript
- Visual Studio Code
- Git and GitHub

## 3. Project Structure

```text
lab-01/
│
├── node_modules/
├── screenshots/
│   ├── Home.png
│   ├── About.png
│   ├── Time.png
│   └── PageNotFound.png
│
├── .gitignore
├── package.json
├── package-lock.json
├── server-http.js
├── server.js
└── README.md
```

## 4. Implementation

### Step 1: Initialize the Node.js Project

Created a Node.js project using:

```bash
npm init -y
```

This generated the `package.json` file, which contains project information and dependencies.

### Step 2: Create a Basic HTTP Server

Created `server-http.js` using Node.js's built-in `http` module.

The server responds with the message **Hello** when accessed through port 3000.

Run the server using:

```bash
node server-http.js
```

### Step 3: Create an Express Server

Installed Express.js:

```bash
npm install express
```

Created `server.js` and configured an Express application with the following routes.

## 5. API Endpoints

| Method | Endpoint | Description | Status Code |
|---|---|---|---|
| GET | `/` | Displays a welcome message | 200 |
| GET | `/about` | Returns student details in JSON format | 200 |
| GET | `/time` | Displays the current date and time | 200 |
| GET | `/test` | Handles unknown routes | 404 |

### Running the Application

Install dependencies:

```bash
npm install
```

Start the Express server:

```bash
node server.js
```

The server runs locally at:

```text
http://localhost:3000
```

## 6. Screenshots

### Home Route (`/`)

![Home Route](screenshots/Home.png)

### About Route (`/about`)

![About Route](screenshots/About.png)

### Time Route (`/time`)

![Time Route](screenshots/Time.png)

### 404 Error Route

![404 Error](screenshots/PageNotFound.png)

## 7. Deployment

**Platform:** Render

**Live Application URL:** Add your Render deployment URL here after successful deployment.

## 8. GitHub Repository

**Repository:** https://github.com/kusuma032008/Backend_Labs

## 9. Learning Outcomes

Through this lab, I learned:

- How to initialize a Node.js project.
- The purpose of the `package.json` file.
- How to create a server using Node.js's built-in HTTP module.
- How to install and use Express.js.
- How to create and handle GET routes.
- How to return text and JSON responses.
- How to handle unknown routes using HTTP 404.
- How to run a backend application locally.
- How to manage project files using Git and GitHub.
- How to prepare a Node.js application for cloud deployment.

---

**End of Lab 1**
