// Imports
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Styles
import './App.css';
import styled from 'styled-components';
// import { Nav } from "react-bootstrap";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Components
import NavbarH from './Components/NavbarH';
import NavbarV from './Components/NavbarV';
import Buttons from './Components/Buttons';
import Dashboard from './Components/Dashboard';
import PopupForm from './Components/Popup';

// Styled Components
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`;


function App() {

  const [button, setButton] = useState(false);

  return (
    <div className="Main">

      <NavbarV />
      <NavbarH />
      {/* <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Nav defaultSelected="home">
          <NavItem>
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              <div style={{ color: 'blue' }}>
                Home
              </div>
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', color: 'green' }} />
            </NavIcon>
            <NavText>
              Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
              
              <NavText>
                Line Chart
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>
                Bar Chart
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
        </SideNav> */}

      <Routes>
        <Route path="/" element={<Wrapper>
          <Buttons image={"https://cdn-icons-png.flaticon.com/512/1092/1092216.png"} text={"Case Upload"} color={"#27c690"} />
          <Buttons image={"https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png"} text={"Generate Report"} color={"#0461c9"} />
          <Buttons image={"https://cdn-icons-png.flaticon.com/512/207/207413.png"} text={"Broadcast Message"} color={"#db6028"} />
        </Wrapper>} />
        <Route path="/case-upload" element={<Wrapper>
          <PopupForm />
        </Wrapper>} />
      </Routes>

      <Dashboard />




    </div>
  );
}

export default App;
