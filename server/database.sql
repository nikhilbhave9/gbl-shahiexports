CREATE DATABASE gbl;

CREATE TABLE cases (
    case_number SERIAL PRIMARY KEY,
    branch VarChar(255) NOT NULL,
    reporting_method VarChar(255) NOT NULL,
    date_time TIMESTAMP,
    category VarChar(255) NOT NULL,
    sub_category VarChar(255) NOT NULL,
    priority_status VarChar(255) NOT NULL,
    nature VarChar(255) NOT NULL,
    case_manager VarChar(255) NOT NULL,
    case_reporter VarChar(255) NOT NULL,
    case_status VarChar(255) NOT NULL
);

SELECT * FROM test1 WHERE case_status = 'Not Prepared' OR case_status = 'In-progress';

SELECT * FROM test1 WHERE case_status = 'Outstanding' OR case_status = 'Closed';