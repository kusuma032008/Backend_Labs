
const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const app = express();

app.use(express.json());

const dbPath = path.join(__dirname, "books.db");

let db = null;

// Initialize database and start server
const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });

        const PORT = process.env.PORT || 3000;

       app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

    } catch (error) {
        console.log(`Database Error: ${error.message}`);
        process.exit(1);
    }
};

// Home route
app.get("/", (request, response) => {
    response.send("Lab 3 REST API is running!");
});

initializeDBAndServer();



// app.get("/books", async (request, response) => {
//     try {
//         const { search_q = "" } = request.query;

//         const query = `
//             SELECT * FROM book
//             WHERE title LIKE ?
//         `;

//         const books = await db.all(query, [`%${search_q}%`]);

//         response.status(200).json(books);

//     } catch (error) {
//         response.status(500).json({
//             message: "Internal server error",
//         });
//     }
// });



// app.get("/books", async (request, response) => {
//     try {
//         const {
//             search_q = "",
//             order_by = "id",
//             order = "ASC",
//             limit = "10",
//             offset = "0"
//         } = request.query;

//         // Allowed sorting columns
//         const allowedColumns = [
//             "id",
//             "title",
//             "author",
//             "price",
//             "pages"
//         ];

//         const sortColumn = allowedColumns.includes(order_by)
//             ? order_by
//             : "id";

//         const sortOrder = order.toUpperCase() === "DESC"
//             ? "DESC"
//             : "ASC";

//         const pageLimit = Number(limit);
//         const pageOffset = Number(offset);

//         if (
//             !Number.isInteger(pageLimit) ||
//             pageLimit < 1 ||
//             pageLimit > 100 ||
//             !Number.isInteger(pageOffset) ||
//             pageOffset < 0
//         ) {
//             return response.status(400).json({
//                 message: "Invalid limit or offset"
//             });
//         }

//         const query = `
//             SELECT * FROM book
//             WHERE title LIKE ?
//             ORDER BY ${sortColumn} ${sortOrder}
//             LIMIT ? OFFSET ?
//         `;

//         const books = await db.all(query, [
//             `%${search_q}%`,
//             pageLimit,
//             pageOffset
//         ]);

//         response.status(200).json(books);

//     } catch (error) {
//         response.status(500).json({
//             message: "Internal server error"
//         });
//     }
// });
// app.get("/books", async (request, response) => {
//     try {
//         const {
//             search_q = "",
//             order_by = "id",
//             order = "ASC",
//             limit = "10",
//             offset = "0",
//             min_price,
//             max_price
//         } = request.query;

//         const allowedColumns = [
//             "id", "title", "author", "price", "pages"
//         ];

//         const sortColumn = allowedColumns.includes(order_by)
//             ? order_by
//             : "id";

//         const sortOrder = order === "DESC" ? "DESC" : "ASC";

//         const pageLimit = Number(limit);
//         const pageOffset = Number(offset);

//         if (
//             !Number.isInteger(pageLimit) ||
//             pageLimit < 1 ||
//             pageLimit > 100 ||
//             !Number.isInteger(pageOffset) ||
//             pageOffset < 0
//         ) {
//             return response.status(400).json({
//                 message: "Invalid limit or offset"
//             });
//         }

//         const conditions = ["title LIKE ?"];
//         const params = [`%${search_q}%`];

//         if (min_price !== undefined) {
//             if (min_price.trim() === "" || !Number.isFinite(Number(min_price))) {
//                 return response.status(400).json({
//                     message: "Minimum price must be a valid number"
//                 });
//             }

//             conditions.push("price >= ?");
//             params.push(Number(min_price));
//         }

//         if (max_price !== undefined) {
//             if (max_price.trim() === "" || !Number.isFinite(Number(max_price))) {
//                 return response.status(400).json({
//                     message: "Maximum price must be a valid number"
//                 });
//             }

//             conditions.push("price <= ?");
//             params.push(Number(max_price));
//         }

//         if (
//             min_price !== undefined &&
//             max_price !== undefined &&
//             Number(min_price) > Number(max_price)
//         ) {
//             return response.status(400).json({
//                 message: "Minimum price cannot exceed maximum price"
//             });
//         }

//         const query = `
//             SELECT * FROM book
//             WHERE ${conditions.join(" AND ")}
//             ORDER BY ${sortColumn} ${sortOrder}
//             LIMIT ? OFFSET ?
//         `;

//         params.push(pageLimit, pageOffset);

//         const books = await db.all(query, params);

//         response.status(200).json(books);

//     } catch (error) {
//         response.status(500).json({
//             message: "Internal server error"
//         });
//     }
// });
// Get a single book by ID
// app.get("/books/:bookId", async (request, response) => {
//     try {
//         const { bookId } = request.params;

//         const book = await db.get(
//             "SELECT * FROM book WHERE id = ?",
//             [bookId]
//         );

//         if (book === undefined) {
//             return response.status(404).json({
//                 message: "Book not found"
//             });
//         }

//         response.status(200).json(book);

//     } catch (error) {
//         response.status(500).json({
//             message: "Internal server error"
//         });
//     }
// });
// Add a new book
app.post("/books", async (request, response) => {
    try {
        const { title, author, price, pages } = request.body;

        if (
            typeof title !== "string" ||
            title.trim() === "" ||
            typeof author !== "string" ||
            author.trim() === "" ||
            typeof price !== "number" ||
            !Number.isFinite(price)
        ) {
            return response.status(400).json({
                message: "Title, author and a valid numeric price are required"
            });
        }

        const result = await db.run(
            `INSERT INTO book (title, author, price, pages)
             VALUES (?, ?, ?, ?)`,
            [title.trim(), author.trim(), price, pages ?? null]
        );

        response.status(201).json({
            message: "Book added successfully",
            bookId: result.lastID
        });

    } catch (error) {
        response.status(500).json({
            message: "Internal server error"
        });
    }
});
// Update a book
app.put("/books/:bookId", async (request, response) => {
    try {
        const { bookId } = request.params;
        const { title, author, price, pages } = request.body;

        if (
            typeof title !== "string" ||
            title.trim() === "" ||
            typeof author !== "string" ||
            author.trim() === "" ||
            typeof price !== "number" ||
            !Number.isFinite(price)
        ) {
            return response.status(400).json({
                message: "Title, author and a valid numeric price are required"
            });
        }

        const existingBook = await db.get(
            "SELECT * FROM book WHERE id = ?",
            [bookId]
        );

        if (!existingBook) {
            return response.status(404).json({
                message: "Book not found"
            });
        }

        await db.run(
            `UPDATE book
             SET title = ?, author = ?, price = ?, pages = ?
             WHERE id = ?`,
            [title.trim(), author.trim(), price, pages ?? null, bookId]
        );

        response.status(200).json({
            message: "Book updated successfully"
        });

    } catch (error) {
        response.status(500).json({
            message: "Internal server error"
        });
    }
});
// Delete a book
app.delete("/books/:bookId", async (request, response) => {
    try {
        const { bookId } = request.params;

        const result = await db.run(
            "DELETE FROM book WHERE id = ?",
            [bookId]
        );

        if (result.changes === 0) {
            return response.status(404).json({
                message: "Book not found"
            });
        }

        response.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        response.status(500).json({
            message: "Internal server error"
        });
    }
});