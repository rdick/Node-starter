const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();


const PORT = process.env.PORT || 8000;
const ADDRESS = 'localhost';

app.get('/', async (req, res) => {
	// const getEntries = await knex(getDepaxrtmentsDB).select('*').orderBy('department_name', 'asc');
    getEntries = {'dog': 1}
	res.json(getEntries);
});

app.listen(PORT, (ADDRESS) => {
	console.log('http://localhost:' + PORT);
});
// create app.js file
// npm init -y
// install files