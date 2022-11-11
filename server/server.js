// Imports
const express = require('express');
const pool = require('./db');
const { DateTime } = require('luxon');

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
// Get all cases
// app.get('/cases', async (req, res) => {
//     try {
//         console.log(req.body);
//     } catch (err) {
//         console.error(err.message);
//     }

// });

// Get all cases
app.get('/cases', async (req, res) => {

    const client = new ClientClass(pgUrl);
    try {
        await client.connect();
        console.log("Client connected");

        const results = await client.query("SELECT * FROM test1");
        res.json(results.rows);
        await client.end();

    } catch (err) {
        console.error(err.message);
    }

});

// Create a case
app.post('/cases', async (req, res) => {

    // const date_ob = new Date(Date.UTC(year, month, day, hour, minute, second);
    const date_ob = new Date()
    const { branch, reportingMethod, category, subCategory, priority, nature, manager, reporter, status } = req.body;
    console.log(req.body);
    console.log(status);
    console.log(priority);
    const case_datetime = date_ob.getFullYear() + "-" + (date_ob.getMonth() + 1) + "-" + date_ob.getDate() + " " + ((date_ob.getHours()+6)%24) + ":" + ((date_ob.getMinutes()+30)%60) + ":" + date_ob.getSeconds();
    // const datetime_obj = DateTime.local.setZone('Asia/Kolkata');
    // const case_datetime = DateTime.now().toFormat('MM-dd-yyyy') + " " + DateTime.now().toFormat('HH:mm:ss');

    const client = new ClientClass(pgUrl);
    try {
        await client.connect();
        console.log("Client connected");

        const results = await client.query("INSERT INTO test1 (branch, reporting_method, date_time, category, sub_category, priority_status, nature, case_manager, case_reporter, case_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [branch, reportingMethod, case_datetime, category, subCategory, priority, nature, manager, reporter, status]);
        console.log(priority);
        await client.end();

    } catch (err) {
        console.error(err.message);
    }

});

// app.post('/cases', async function (req, res, client) {
//     try {
//         await client.connect()
//         console.log("Client connected");

//         const { case_number, branch, reporting_method } = req.body;

//     } catch {

//     }
//     finally {

//     }
// });
// Filter a case


app.post('/cases1', function (req, res) {

    const { branch, reportingMethod, category, subCategory, priority, nature, manager, reporter, status } = req.body;
    console.log(req.body);

});

app.listen(port, () => console.log(`Listening on port ${port}`));
