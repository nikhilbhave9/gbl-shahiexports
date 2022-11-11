import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

function Dashboard() {

    const [cases, setCases] = useState([]);

    async function getCases() {
        try {
            const response = await Axios.get('http://localhost:9000/cases');
            console.log(response.data);
            setCases(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCases();
    }, []);


    return (
        <div className='mt-3'>
            <Table striped>
                <thead>
                    <tr>
                        <th>CASE NO.</th>
                        <th>BRANCH</th>
                        <th>REPORTING METHOD</th>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>CATEGORY</th>
                        <th>SUB CATEGORY</th>
                        <th>PRIORITY</th>
                        <th>NATURE</th>
                        <th>CASE MANAGER</th>
                        <th>CASE REPORTER</th>
                        <th>CASE STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {cases.map((item) => {
                            return (
                                <tr>
                                    <td>{item.case_number}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.reporting_method}</td>
                                    <td>{item.date_time.split("T")[0]}</td>
                                    <td>{(item.date_time.split("T")[1]).split(".000Z")[0]}</td>
                                    <td>{item.category}</td>
                                    <td>{item.sub_category}</td>
                                    <td>{item.priority_status}</td>
                                    <td>{item.nature}</td>
                                    <td>{item.case_manager}</td>
                                    <td>{item.case_reporter}</td>
                                    <td>{item.case_status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
};

export default Dashboard;