// Update with your config settings.
// ConnectionString = "Driver={PostgreSQL Unicode};Server=localhost;Port=5434;Database=roterranet;Uid=postgres;Pwd=Qzpmal10;"

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgresql://postgres:PASSWORD0@192.168.2.2:5434/roterranet',
		pool: {
			min: 0,
			max: 10,
			acquireTimeoutMillis: 60000,
			idleTimeoutMillis: 600000,
		},
	},
};
