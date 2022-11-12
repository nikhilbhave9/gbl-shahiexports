import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { GoSettings } from 'react-icons/go';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin: 20px;
`;

function Filter ( {column} ) {

    const { filterValue, setFilter } = column;

    return (
        <StyledDiv>
            <Button variant="secondary">Filter <GoSettings /></Button>
        </StyledDiv>
    )
}

export default Filter;