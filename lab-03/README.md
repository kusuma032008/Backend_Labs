# Lab 03 – Book Management REST API

## Overview

This project is a REST API built using **Node.js, Express.js, and SQLite** as part of the Backend Development Lab 03. It provides API endpoints to manage book records and demonstrates CRUD operations, request validation, filtering, sorting, and pagination.

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **SQLite** – Database
- **sqlite3** – SQLite database driver
- **Postman** – API testing

## Features

- Create new book records
- Retrieve book details
- Update existing book records
- Delete book records
- Validate incoming request data
- Handle invalid IDs and missing records
- Filter books based on available query parameters
- Sort books in ascending or descending order
- Implement pagination
- Handle errors with appropriate HTTP status codes

## Project Structure

```text
lab-03/
│
├── screenshots/
│   ├── DELETE.png
│   ├── FILTER.png
│   ├── FILTER_invalid.png
│   ├── GET_books.png
│   ├── INVALID_ID.png
│   ├── POST.png
│   ├── POST_invalid.png
│   ├── UPDATE.png
│   ├── pagination.png
│   └── sort.png
│
├── .gitignore
├── books.db
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kusuma032008/Backend_Labs.git
```

### 2. Navigate to Lab 03

```bash
cd Backend_Labs/lab-03
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

For development mode:

```bash
npm run dev
```

The server runs at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieve books |
| GET | `/books/:bookId` | Retrieve a book by ID |
| POST | `/books` | Add a new book |
| PUT | `/books/:bookId` | Update a book |
| DELETE | `/books/:bookId` | Delete a book |

## API Testing

The API endpoints were tested using Postman.

The following scenarios were tested:

- Successful GET, POST, PUT, and DELETE requests
- Invalid request data
- Invalid book IDs
- Filtering and sorting
- Pagination
- Appropriate success and error responses

Screenshots of the API testing results are available in the `screenshots/` directory.

## Learning Outcomes

Through this lab, I gained practical experience in:

- Building RESTful APIs using Express.js
- Performing CRUD operations
- Connecting a backend application to an SQLite database
- Handling HTTP requests and responses
- Implementing input validation and error handling
- Working with query parameters for filtering, sorting, and pagination
- Testing APIs using Postman

## Author

**G. Kusuma**

Computer Science and Engineering  
Backend Development Lab – 03
