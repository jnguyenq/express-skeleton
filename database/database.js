require('dotenv').load();

module.exports = {
	knex: require('knex')({
		client: 'pg',
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_USER_PASSWORD,
			database: process.env.DB_NAME
		},
		pool: {
			min: 0,
			max: 7
		}
	})
};