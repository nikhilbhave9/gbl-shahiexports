import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

import styled from 'styled-components';

const StyledTable = styled(Table)`
    font-size: 0.75rem;
`;


function Dashboard(props) {

    const [cases, setCases] = useState([]);
    let getURL = "http://localhost:9000/cases";
    if (props.new === 2) {
        getURL = "http://localhost:9000/cases/outstanding";
    }  

    async function getCases() {
        try {

            const response = await Axios.get(getURL);
            setCases(response.data);
        } catch (err) {
            console.error(err);
        }

    }

    useEffect(() => {
        getCases();
    }, []);

    return (
        <div className='mt-3'>
            <StyledTable striped>
                <thead className='text-muted'>
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
            </StyledTable>
        </div>
    )
};

export default Dashboard;