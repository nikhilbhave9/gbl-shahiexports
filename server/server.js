// Imports
const express = require('express');

// Initialization
const app = express();
const port = process.env.PORT || 9000;

// Elephant SQL
const pg = require('pg');
const ClientClass = pg.Client;
const pgUrl = process.env.DATABASE_URL || 'postgres://ofesycmj:F83rfOUPbvPTKxnyWdIPSN9qHLIIf599@tiny.db.elephantsql.com/ofesycmj';
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());


// ** Database Routes **
// ==================== 

// Get all cases (new)
app.get('/cases', async (req, res) => {

    const client = new ClientClass(pgUrl);
    try {
        await client.connect();
        console.log("Client connected");

        const results = await client.query("SELECT * FROM cases WHERE case_status = 'Not Prepared' OR case_status = 'In-progress';");
        res.json(results.rows);
        await client.end();

    } catch (err) {
        console.error(err.message);
    }

});

// Get all cases (outstanding)
app.get('/cases/outstanding', async (req, res) => {

    const client = new ClientClass(pgUrl);
    try {
        await client.connect();
        console.log("Client connected");

        const results = await client.query("SELECT * FROM cases WHERE case_status = 'Outstanding' OR case_status = 'Closed';");
        res.json(results.rows);
        await client.end();

    } catch (err) {
        console.error(err.message);
    }

});


// Create a case
app.post('/cases', async (req, res) => {

    const { branch, reportingMethod, category, subCategory, priority, nature, manager, reporter, status } = req.body;

    const date_ob = new Date()
    const case_datetime = date_ob.getFullYear() + "-" + (date_ob.getMonth() + 1) + "-" + date_ob.getDate() + " " + ((date_ob.getHours()+6)%24) + ":" + ((date_ob.getMinutes()+30)%60) + ":" + date_ob.getSeconds();


    const client = new ClientClass(pgUrl);
    try {
        await client.connect();
        console.log("Client connected");

        const results = await client.query("INSERT INTO cases (branch, reporting_method, date_time, category, sub_category, priority_status, nature, case_manager, case_reporter, case_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [branch, reportingMethod, case_datetime, category, subCategory, priority, nature, manager, reporter, status]);
        await client.end();

    } catch (err) {
        console.error(err.message);
    }

});

// Filter a case
app.get('/cases/filter', async (req, res) => {
    const filtercategory = req.query.filter_category;
    const filterquery = req.query.filter_query;
    console.log(typeof(filtercategory));
    const client = new ClientClass(pgUrl);
    try {
        await client.connect();
        console.log("Client connected");

        const results = await client.query(`SELECT * FROM cases WHERE ${filtercategory} = '${filterquery}';`);
        res.json(results.rows);
        await client.end();

    } catch (err) {
        console.error(err.message);
    }

});


app.listen(port, () => console.log(`Listening on port ${port}`));
