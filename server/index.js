const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES //

// create a todo

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
