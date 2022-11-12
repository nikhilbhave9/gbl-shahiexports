import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import PopupForm from './Popup.js';

const StyledButton = styled(Button)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 31%;
    margin: 13px;
    height: 175px;
    background-color: ${props => props.color};
    &:hover {
        background-color: ${props => props.color};
    }

`;


const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    margin: 10px 10px 30px 10px;
`;

const StyledInnerButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
    margin: 10px;
    color: ${props => props.color};
    font-size: 0.9em;
    font-weight: bold;
    background-color: white
`;

function SingleButton(props) {

    const navigate = useNavigate();

    function handleClick() {
        if (props.text === "Case Upload") {
            console.log("Add button clicked");
            navigate('/case-upload');

        }
        else if (props.text === "Generate Report") {
            console.log("Generate button clicked");
        }
        else if (props.text === "Broadcast Message") {
            alert("Message broadcasted to all stakeholders!");
        }

    }

    return (

        <React.Fragment>
            <StyledButton className='outer-btn' color={props.color}>
                <StyledImage src={props.image} />
                <StyledInnerButton color={props.color} onClick={handleClick}>
                    {props.text}
                </StyledInnerButton>
            </StyledButton>
        </React.Fragment>


    )
}

function Buttons(props) {


    return (
            <Routes>
                {/* Route for button (Default) */}
                <Route path="/" element={<SingleButton text={props.text} image={props.image} color={props.color} />} />

                {/* Route for handling a case upload */}
                <Route path="/case-upload" element={<PopupForm />} />
            </Routes>

    );
}



export default Buttons;