const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "perntodo",
	password: "nonono81",
	port: 5432,
});

module.exports = pool;
