const knex = require({
	client: "pg",
	connection: {
		user: "postgres",
		host: "localhost",
		database: "perntodo",
		password: "nonono81",
		port: 5432,
	},
});

module.exports = knex;
